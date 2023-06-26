import { getProduct, getProducts } from "@/controllers/product-controller";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/", getProducts).get("/:productId", getProduct);

export { productRouter };
