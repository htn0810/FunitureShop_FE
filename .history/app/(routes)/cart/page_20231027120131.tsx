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
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
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
