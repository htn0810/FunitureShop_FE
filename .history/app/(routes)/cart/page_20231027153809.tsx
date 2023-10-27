"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Product from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Image, { StaticImageData } from "next/image";

interface DataType {
  key: string;
  image: StaticImageData;
  product: string;
  price: number;
  quantity: number;
  total: number;
  delete: React.ReactNode;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text) => (
      <Image
        src={text}
        alt="Product"
        className="w-[80px] h-[80px] object-contain"
      />
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
];

const data: DataType[] = [
  {
    key: "1",
    image: Product,
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: <button>Delete</button>,
  },
  {
    key: "2",
    image: Product,
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: <button>Delete</button>,
  },
  {
    key: "3",
    image: Product,
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: <button>Delete</button>,
  },
];

const Page = () => {
  return (
    <div className="mt-8">
      <Table columns={columns} dataSource={data} bordered className="" />
    </div>
  );
};

export default Page;
