import { Member } from "../libs/types/member";
import ProductInquiry, {
  Product,
  ProductUpdateInput,
  ProductInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";
import { ObjectId } from "mongoose";

class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }
  /*SPA */
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    console.log("inquiry", inquiry);
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }
    console.log("match", match);
    if (inquiry.productCollection)
      match.productCollection = inquiry.productCollection;
    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };
    console.log("sort", sort);
    const result = this.productModel
      .aggregate([
        { $match: match },
        {
          $sort: sort,
        },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, //0
        { $limit: inquiry.limit * 1 }, //3=>4.5.6
      ])
      .exec();
    console.log("result", result);
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }
  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);
    let result = this.productModel
      .findOne({ _id: productId, productStatus: ProductStatus.PROCESS })
      .exec();
     if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    //TODO => if authenticated=> first =>view lod creation


    return result;
  }
  /*SSR */
  public async getAllProducts(): Promise<Product[]> {
    //string => obejct ID
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    // console.log("result", result);
    return result;
  }
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("ERROR, model:createNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    //string => obejct ID
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    // console.log("result", result);
    return result;
  }
}
export default ProductService;
