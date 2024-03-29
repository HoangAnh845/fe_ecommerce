"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ProductSuggest from "./ProductSuggest";
import useWindowSize from "@/hooks/useWindowSize";
import { LuArrowUpDown } from "react-icons/lu";

function ProductFilter() {
  const [sorting, setSorting] = useState(false);
  const size = useWindowSize();
  const isMobile: boolean = size.width < 640;
  return (
    <Box>
      <div className="flex items-end sm:hidden">
        <div className="flex border-b pb-3 w-11/12 overflow-scroll">
          <div>
            <label className="text-xs text-gray-500 mb-1 inline-block">
              Thương hiệu
            </label>
            <ul className="flex gap-2 w-max border-r pr-4 mr-4">
              <li className="border rounded-full py-1 px-5 text-sm">Dell</li>
              <li className="border rounded-full py-1 px-5 text-sm">
                Thiên Long
              </li>
              <li className="border rounded-full py-1 px-5 text-sm">Hồng Hà</li>
              <li className="border rounded-full py-1 px-5 text-sm">KLONG</li>
              <li className="border rounded-full p-2 text-sm">
                <FaChevronDown />
              </li>
            </ul>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 inline-block">
              Nhà cung cấp
            </label>
            <ul className="flex gap-2 w-max border-r pr-4 mr-4">
              <li className="border rounded-full py-1 px-5 text-sm">
                Nhà sách Fahasa
              </li>
              <li className="border rounded-full py-1 px-5 text-sm">
                info book
              </li>
              <li className="border rounded-full py-1 px-5 text-sm">
                Bamboo Books
              </li>
              <li className="border rounded-full py-1 px-5 text-sm">
                HỆ THỐNG NHÀ SÁCH
              </li>
              <li className="border rounded-full p-2 text-sm">
                <FaChevronDown />
              </li>
            </ul>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 inline-block">
              Giao hàng
            </label>
            <ul className="flex gap-2 w-max pr-4">
              <li className="border rounded-full py-1 px-5 text-sm">
                Hàng nội địa
              </li>
              <li className="border rounded-full py-1 px-5 text-sm">
                Hàng quốc tế
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/12 mb-3 border-l ps-3">
          <div className="flex justify-center gap-2 items-center border rounded-md p-2">
            <FiFilter /> <div className="text-sm">Tất cả </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex sm:hidden">
          <div className="flex items-center w-max ">
            <Checkbox />
            <Image
              src={
                "https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
              }
              alt="s"
              className="mr-2"
              width={40}
              height={40}
            />
            <span className="text-sm inline-block border-r pr-3">
              Giao siêu tốc 2H
            </span>
          </div>
          <div className="flex items-center w-max ">
            <Checkbox />
            {[1, 2, 3, 4, 5].map((i) => (
              <TiStarFullOutline
                key={i}
                className={`${
                  i !== 5 ? "text-yellow-300" : "text-gray-300"
                } text-xs `}
              />
            ))}
            <span className="text-sm inline-block ms-1">từ 4 sao</span>
          </div>
        </div>
        {!isMobile ? (
          <div className="flex items-center gap-2 relative">
            <div className="text-sm font-light text-gray-500">Sắp xếp</div>
            <div
              className="flex gap-2 items-center border rounded-full py-2 px-4 text-xs cursor-pointer"
              onClick={() => setSorting(!sorting)}
            >
              <div>Phổ biến</div>
              <FaChevronDown className="text-[11px] mb-[2px]" />
            </div>
            {sorting && (
              <ul
                className="absolute z-10
           top-10 left-[-30%] bg-white leading-10 shadow-lg w-52"
              >
                <li className="px-5 text-sm bg-blue-50 relative rounded-tl-xl rounded-tr-xl">
                  <div className="border-b py-2 font-medium">Phổ biến</div>
                  <IoMdCheckmarkCircle className="text-green-500 text-2xl absolute right-5 top-2" />
                </li>
                <li className="px-5 text-sm hover:bg-gray-200 cursor-pointer">
                  <div className="border-b py-2 ">Bán chạy</div>
                </li>
                <li className="px-5 text-sm hover:bg-gray-200 cursor-pointer">
                  <div className="border-b py-2 ">Hàng mới</div>
                </li>
                <li className="px-5 text-sm hover:bg-gray-200 cursor-pointer">
                  <div className="border-b py-2 ">Giá thấp đến cao</div>
                </li>
                <li className="px-5 text-sm hover:bg-gray-200 cursor-pointer">
                  <div className="py-2">Giá cao đến thấp</div>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="w-full bg-white p-5">
            <ul
              className="flex justify-between border-b pb-3 text-sm"
              style={{ fontKerning: "auto" }}
            >
              <li>Phổ biến</li>
              <li>Bán chạy</li>
              <li>Hàng mới</li>
              <li className="flex items-center gap-2">
                Giá <LuArrowUpDown className="text-lg" />
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-2 border-r pr-2">
                <FiFilter />
                Lọc
              </div>
              <div>
                <Image
                  src={
                    "https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                  }
                  alt="s"
                  className="mr-2"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <ProductSuggest />
      </div>
    </Box>
  );
}

export default ProductFilter;
