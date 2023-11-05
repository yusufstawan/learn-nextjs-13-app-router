import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 2,
    title: "Sepatu Baru 2",
    price: 200000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png",
  },
  {
    id: 3,
    title: "Sepatu Baru 3",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8409c3b2-add4-4b18-927f-2767435a660b/dunk-low-retro-shoes-Zc0601.png",
  },
  {
    id: 4,
    title: "Sepatu Baru 3",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8409c3b2-add4-4b18-927f-2767435a660b/dunk-low-retro-shoes-Zc0601.png",
  },
  {
    id: 5,
    title: "Sepatu Baru 3",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8409c3b2-add4-4b18-927f-2767435a660b/dunk-low-retro-shoes-Zc0601.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
