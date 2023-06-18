import productService from "@/services/product-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await productService.getProducts();
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getProduct(req: Request, res: Response) {
  const { productId } = req.params;

  if (isNaN(Number(productId))) {
    return res.sendStatus(httpStatus.IM_A_TEAPOT);
  }

  try {
    const product = await productService.getProductById(Number(productId));

    res.status(httpStatus.OK).send(product);
  } catch (error) {
    if (error.name === "NotFoundError") {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
