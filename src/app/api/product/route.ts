import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 100000,
  },
  {
    id: 2,
    name: "Sepatu Baru 2",
    price: 200000,
  },
  {
    id: 3,
    name: "Sepatu Baru 3",
    price: 300000,
  },
  {
    id: 4,
    name: "Sepatu Baru 4",
    price: 400000,
  },
  {
    id: 5,
    name: "Sepatu Baru 5",
    price: 500000,
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
