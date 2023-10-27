"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  Image: string;
  Product: string;
  Price: number;
  Quantity: number;
  Total: number;
  Delete: React.ReactNode;
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
    Image: "John Brown",
    Product: "The Car Wheel",
    Price: 32,
    Quantity: 1,
    Total: 100,
    Delete: <button>Delete</button>,
  },
  {
    key: "2",
    Image: "John Brown",
    Product: "The Car Wheel",
    Price: 32,
    Quantity: 1,
    Total: 100,
    Delete: <button>Delete</button>,
  },
  {
    key: "3",
    Image: "John Brown",
    Product: "The Car Wheel",
    Price: 32,
    Quantity: 1,
    Total: 100,
    Delete: <button>Delete</button>,
  },
];

const Page = () => {
  return (
    <div className="mt-8">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;
