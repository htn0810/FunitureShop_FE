"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  image: string;
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
    render: (text) => <a>{text}</a>,
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
    image: "John Brown",
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: <button>Delete</button>,
  },
  {
    key: "2",
    image: "John Brown",
    product: "The Car Wheel",
    price: 32,
    quantity: 1,
    total: 100,
    delete: <button>Delete</button>,
  },
  {
    key: "3",
    image: "John Brown",
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
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
};

export default Page;
