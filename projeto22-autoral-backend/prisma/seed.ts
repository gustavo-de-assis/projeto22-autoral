import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let sizes = await prisma.sizes.findFirst();
  if (!sizes) {
    await prisma.sizes.createMany({
      data: [{ name: "P" }, { name: "M" }, { name: "G" }, { name: "XG" }],
    });
  }

  let categories = await prisma.categories.findFirst();
  if (!categories) {
    await prisma.categories.createMany({
      data: [{ name: "T-Shirt" }, { name: "Vestido" }, { name: "Casaco" }],
    });
  }

  let colors = await prisma.colors.findFirst();
  if (!colors) {
    await prisma.colors.createMany({
      data: [
        { name: "vermelho" },
        { name: "azul" },
        { name: "verde" },
        { name: "branco" },
        { name: "preto" },
      ],
    });
  }

  let products = await prisma.products.findFirst();
  if (!products) {
    await prisma.products.createMany({
      data: [
        {
          name: "T-Shirt cria",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
        {
          name: "T-Shirt Jesus",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
        {
          name: "T-Shirt Leão",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
        {
          name: "T-Shirt Tetelestyle badge",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
        {
          name: "T-Shirt Tetelestyle",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
        {
          name: "T-Shirt It's Done",
          price: 9000,
          image_url: "",
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
        },
      ],
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
