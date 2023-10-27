"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Product from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Image, { StaticImageData } from "next/image";
import { TrashIcon } from "@/app/_icons";

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
    align: "center",
    render: (text) => (
      <div className="w-full flex items-center justify-center">
        <Image
          src={text}
          alt="Product"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    align: "center",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "center",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
    align: "center",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    align: "center",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
    align: "center",
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
    delete: (
      <button className="group">
        <TrashIcon className="w-4 h-4 group-hover:text-red-600" />
      </button>
    ),
  },
  {
    key: "2",
    image: Product,
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: (
      <button className="group">
        <TrashIcon className="w-4 h-4 group-hover:text-red-600" />
      </button>
    ),
  },
  {
    key: "3",
    image: Product,
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: (
      <button className="group">
        <TrashIcon className="w-4 h-4 group-hover:text-red-600" />
      </button>
    ),
  },
];

const Page = () => {
  return (
    <div className="mt-8">
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: 768 }}
        pagination={false}
      />
    </div>
  );
};

export default Page;
