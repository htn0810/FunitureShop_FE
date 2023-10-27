"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Product from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Image, { StaticImageData } from "next/image";
import { TrashIcon } from "@/app/_icons";
import Link from "next/link";
import TypedInputNumber from "antd/es/input-number";

interface DataType {
  key: string;
  image: StaticImageData;
  product: string;
  price: number;
  quantity: number;
  total: number;
  delete: React.ReactNode;
}

const onChangeQuantity = (value: number | null) => {
  console.log("changed", value);
};

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
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
    align: "center",
    render: (quantity) => (
      <TypedInputNumber
        min={1}
        defaultValue={quantity}
        onChange={onChangeQuantity}
        className="hover:border-darkYellow focus-within:border-darkYellow"
      />
    ),
    //
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
      <div className="flex mt-16 font-tertiary gap-8">
        <div className="basis-1/2">
          <h5 className="text-xl font-medium text-white px-6 py-3 bg-softBlack">
            COUPON
          </h5>
          <div className="px-8 py-4 border border-gray-300">
            <p className="font-thin text-grayC">
              Enter your coupon code if you have one
            </p>
            <div className="mt-4 flex gap-x-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="w-[180px] px-6 py-2 text-base font-thin outline-none border border-gray-300"
              />
              <button className="font-medium text-white px-5 py-2 text-base bg-darkYellow hover:opacity-80 rounded-sm">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <h5 className="text-xl font-medium text-white px-6 py-3 bg-softBlack">
            CART TOTALS
          </h5>
          <div className="px-6 py-4">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>$215.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="w-full h-1 bg-gray-300"></div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span>$230.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
