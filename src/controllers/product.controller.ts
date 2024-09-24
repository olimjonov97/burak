import { json, Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();
const productController: T = {};
   /*SPA */

/*SSR */
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");

    res.render("products");
  } catch (err) {
    console.log(" Error On getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");
    console.log("req.files)", req.files);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });
    console.log("data",data);
    await productService.createNewProduct(data);

   res.send(
     `<script> alert("Successfully Created !" );window.locaion.replace('admin/login') </script>`
   );
  } catch (err) {
    const message = err instanceof Errors ? err.message:Message.SOMETHING_WENT_WRONG
    console.log(" Error On createNewProduct", err);
     res.send(
       `<script> alert("${message}");window.locaion.replace('admin/login') </script>`
     );
  }
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = req.params.id;
    const result = await productService.updateChosenProduct(id,req.body);
    console.log(id)
    res.send(result)
  } catch (err) {
    console.log(" Error On updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
