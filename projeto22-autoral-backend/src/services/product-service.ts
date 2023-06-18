import productRepository from "@/repositories/product-repository";

export async function getProducts() {
  const products = await productRepository.getProductList();

  /*  if(!products){
    throw NotFoundError();
  } */
  return products;
}

export async function getProductById(productId: number) {
  const product = await productRepository.getProductById(productId);
  /*  if(!product){
    throw NotFoundError();
  } */
  return product;
}

const productService = {
  getProducts,
  getProductById,
};

export default productService;
