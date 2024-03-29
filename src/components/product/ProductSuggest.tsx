import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel";
import Image from "next/image";
import productCare from "../../../public/product_your_care.json";
import Box from "@mui/material/Box";
import useWindowSize from "@/hooks/useWindowSize";
import { IoIosStar } from "react-icons/io";

function ProductSuggest() {


  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  const listProduct = () =>
    productCare.map((item, index) => (
      <div
        className={`${isMobile ? "w-6/12" : "w-2/12"} h-full p-1`}
        key={index}
      >
        <div className="card relative cursor-pointer border rounded-lg h-full bg-white">
          <Image
            src={item.image}
            alt=""
            className="rounded-tl-lg rounded-tr-lg"
            width={isMobile ? 200 : 200}
            height={isMobile ? 200 : 200}
          />
          <Image
            src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
            className="p-2"
            alt=""
            width={isMobile ? 90 : 110}
            height={isMobile ? 90 : 110}
          />
          <div className="mt-2 px-2 my-2">
            <div className="text-gray-500 font-base text-xs w-full">
              {item.name.length > 28
                ? item.name.substring(0, isMobile ? 28 : 42) + "..."
                : item.name}
            </div>
            <div className="flex my-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <IoIosStar
                  key={star}
                  className={`text-yellow-400 text-md ${
                    isMobile ? "text-[11px]" : "text-sm"
                  }`}
                />
              ))}
            </div>
            <div
              className={`mb-1 ${
                isMobile ? "text-md" : "text-lg"
              }  font-medium`}
            >
              {item.price.toLocaleString("vi-VN")}
              <sup className="text-md underline text-ellipsis">đ</sup>
            </div>
            <div className="border-t py-2 text-[12px] text-gray-500">
              {item.delivery}
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <>
      

      <Box className="w-full overflow-scroll">
        <Box className="flex flex-wrap">{listProduct()}</Box>
      </Box>
      <Box className="text-center my-5">
        <button type="submit" className="border border-blue-500 rounded-lg text-blue-500 px-5 w-6/12 lg:w-3/12 py-2">Xem Thêm</button>
      </Box>
    </>
  );
}

export default ProductSuggest;
