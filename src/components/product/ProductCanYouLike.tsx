import React from "react";
import Image from "next/image";
import productCare from "../../../public/product_your_care.json";
import Box from "@mui/material/Box";
import useWindowSize from "@/hooks/useWindowSize";
import Carousel from "../Carousel";
import { IoIosStar } from "react-icons/io";

function ProductCanYouLike({ toshow }: { toshow?: number }) {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  const listProduct = () =>
    productCare.map((item, index) => (
      <div
        className={`${isMobile ? "w-[140px]" : "col-md-3"} h-full p-1`}
        key={index}
      >
        <div className="card relative cursor-pointer border rounded-lg h-full">
          <Image
            src={item.image}
            alt=""
            className="rounded-tl-lg rounded-tr-lg"
            width={isMobile ? 140 : 200}
            height={isMobile ? 140 : 200}
          />
           <Image
            src="https://salt.tikicdn.com/ts/upload/0f/27/42/1fff0f8fe6125514354597d1c5f5260c.png"
            alt=""
            className="p-2 pb-1"
            width={isMobile ? 80 : 90}
            height={isMobile ? 80 : 90}
          />
          <Image
            src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
            className="px-2"
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
        {isMobile ? (
          <Box className="flex w-max">{listProduct()}</Box>
        ) : (
          <Box className="slider-container">
            <Carousel
              toshow={toshow ? toshow : 6}
              toScroll={4}
              dots={false}
              arrows={true}
              list={listProduct()} //<ProductCard data={productCare} best={true} genuine={false} star={false}/>
              type={"list"}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default ProductCanYouLike;
