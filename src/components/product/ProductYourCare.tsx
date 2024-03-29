"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import productCare from "../../../public/product_your_care.json";
import Carousel from "../Carousel";

function ProductYourCare() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  const listProduct = () =>
    productCare.map((item, index) => (
      <div className={`${isMobile ? "w-[140px]" : "col-md-3"} h-full p-1`} key={index}>
        <div className="card relative cursor-pointer border rounded-lg h-full">
          <Image
            src={item.image}
            alt=""
            className="rounded-tl-lg rounded-tr-lg"
            width={isMobile ? 140 : 200}
            height={isMobile ? 140 : 200}
          />
          <div className="mt-2 px-2">
            <div className="text-gray-500 font-base text-xs w-full">{item.name.length > 28 ? item.name.substring(0,isMobile ? 28 : 42) + "..." : item.name}</div>
            <div
              className={`mb-1 mt-2 ${
                isMobile ? "text-md" : "text-lg"
              }  font-medium`}
            >
              {item.price.toLocaleString("vi-VN")}<sup className="text-md underline text-ellipsis">đ</sup>
            </div>
            <div className="border-t py-2 text-[12px] text-gray-500">
              {item.delivery}
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
          <Carousel
            toshow={6}
            toScroll={6}
            dots={false}
            arrows={true}
            list={listProduct()}
            type={"list"}
          />
        </Box>
      )}
    </Box>
  );
}

export default ProductYourCare;
