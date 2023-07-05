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
          name: "Tetelestyle",
          price: 9000,
        },
        {
          name: "It's Done",
          price: 9000,
        },
        {
          name: "Leão",
          price: 9000,
        },
        {
          name: "Foi por você",
          price: 9000,
        },
        {
          name: "Logo Pocket",
          price: 9000,
        },
        {
          name: "Leão 2",
          price: 9000,
        },
      ],
    });
  }

  let product_variants = await prisma.product_variants.findFirst();
  if (!product_variants) {
    await prisma.product_variants.createMany({
      data: [
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
        },
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
        },
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
        },
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
        },
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
        },
        {
          stock: 5,
          color_id: 1,
          size_id: 1,
          category_id: 1,
          image_url:
            "https://instagram.fsdu12-1.fna.fbcdn.net/v/t51.2885-15/312125501_1263658957746007_5665022729574122078_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fsdu12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=P1U_365r7L4AX9vsVWt&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk1Mzk0NDU4NTI1ODIzMDI0OQ%3D%3D.2-ccb7-5&oh=00_AfDC8jBIokNk8gtKD92N9HT8lcKF5KLCb1V4td79VCvVLg&oe=64A7EB4C&_nc_sid=b41fef",
          product_id: 1,
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
