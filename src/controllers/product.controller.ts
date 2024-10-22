import { json, Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import ProductInquiry, { ProductInput } from "../libs/types/product";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();
const productController: T = {};
/*SPA */
productController.getProducts = async (req: Request, res: Response) => {
  // const query = req.query comes with request
  // // console.log("query", query);
  // const params = req.params
  // console.log("params", params);

  try {
    console.log("getProducts");
    const { order, page, limit, productCollection, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };

    if (productCollection) {
      inquiry.productCollection = productCollection as ProductCollection;
    }
    if (search) {
      inquiry.search = String(search);
    }
    const result = await productService.getProducts(inquiry);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log(" Error On getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProducts");
    const { id } = req.params;
    const memberId = req.member?._id ?? null;
    const result = await productService.getProduct(memberId,id);
  res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log(" Error On getProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};

/*SSR */
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    // console.log("data: ", data);

    res.render("products", { products: data });
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
    // console.log("createNewProduct", req.body);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });
    // console.log("data",data);
    await productService.createNewProduct(data);

    res.send(
      `<script> alert("Successfully Created !" );window.location.replace('/admin/product/all') </script>`
    );
  } catch (err) {
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    console.log(" Error On createNewProduct", err);
    res.send(
      `<script> alert("${message}");window.location.replace('/admin/product/all') </script>`
    );
  }
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = req.params.id;
    const result = await productService.updateChosenProduct(id, req.body);
    // console.log(id)
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log(" Error On updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
