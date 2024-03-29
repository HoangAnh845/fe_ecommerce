"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import pricelike from "../../../public/product_price_nice.json";
import Carousel from "../Carousel";

function ProductPriceNice() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;


  const listProduct = () =>
    pricelike.map((item, index) => (
      <div className="col-md-3 p-2 cursor-pointer" key={index}>
        <div className="card relative">
          <Image
            src={item.image}
            alt=""
            width={isMobile ? 85 : 200}
            height={isMobile ? 85 : 200}
          />
          <div className="mt-1">
            <div
              className={`mb-1 ${
                isMobile ? "text-sm" : "text-lg"
              } text-center font-medium dark:text-rose-500`}
            >
              {item.price.toLocaleString("vi-VN")} đ
            </div>
            <div
              className={`absolute top-0 bg-rose-200 text-rose-500 ${
                isMobile ? "p-[0.2rem] text-[10px]" : "p-[0.5rem] text-xs"
              } rounded-lg font-bold`}
            >
              -{item.discount}%
            </div>
            <div className="w-full h-5 mb-4 bg-gray-200 rounded-full dark:bg-[#FFAAAE] relative">
              <div
                className="h-5 rounded-full dark:bg-rose-500 "
                style={{ width: `${item.total_sell}%` }}
              >
                <div
                  className={`absolute top-0 left-0 w-full text-white ${
                    isMobile ? "text-[10px]" : "text-[12px]"
                  } h-full leading-5 text-center`}
                >
                  Vừa mở bán
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <Box className="w-full overflow-scroll pb-0">
      {isMobile ? (
        <Box className="flex w-max">{listProduct()}</Box>
      ) : (
        <Box className="slider-container">
          <Carousel toshow={6} toScroll={6} dots={false} arrows={true} list={listProduct()} type={"list"}/>
        </Box>
      )}
    </Box>
  );
}

export default ProductPriceNice;
