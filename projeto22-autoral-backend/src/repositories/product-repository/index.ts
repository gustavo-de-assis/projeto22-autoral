import { prisma } from "@/config";

async function getProductList() {
  const products = await prisma.products.findMany();

  return products;
}

async function getProductById(id: number) {
  const product = await prisma.products.findFirst({
    where: {
      id,
    },
  });

  return product;
}

const productRepository = {
  getProductList,
  getProductById,
};

export default productRepository;
