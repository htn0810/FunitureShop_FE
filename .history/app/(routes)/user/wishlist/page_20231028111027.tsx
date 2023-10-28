"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Product from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Image from "next/image";
import { TrashIcon } from "@/app/_icons";
import Link from "next/link";
import { Fragment } from "react";
import { IWishListProduct } from "@/app/_types/general.type";

const onChangeQuantity = (value: number | null) => {
  console.log("changed", value);
};

const columns: ColumnsType<IWishListProduct> = [
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
    render: (text) => (
      <Link
        href="/"
        className="text-base font-medium text-gray-500 hover:text-darkYellow"
      >
        {text}
      </Link>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "center",
    render: (text) => <span className="text-base font-medium ">{text}</span>,
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
    align: "center",
  },
];

const data: IWishListProduct[] = [
  {
    key: "1",
    image: Product,
    product: "The Car Wheel",
    price: 32,
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
    delete: (
      <button className="group">
        <TrashIcon className="w-4 h-4 group-hover:text-red-600" />
      </button>
    ),
  },
];

const Page = () => {
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: 768 }}
        pagination={false}
      />
    </Fragment>
  );
};

export default Page;
