import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import productCare from "../../../public/product_your_care.json";
import Box from "@mui/material/Box";
import useWindowSize from "@/hooks/useWindowSize";
import Carousel from "../Carousel";
import { IoIosStar } from "react-icons/io";
import { get_product_by_category } from "@/services/product";

function ProductGenuine({
  toshow,
  category_id,
  tiki_best,
  genuine,
}: {
  toshow?: number;
  category_id?: number;
  tiki_best?: number;
  genuine?: number;
}) {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);
  async function fetchData() {
    const res_product = await get_product_by_category(
      Number(category_id),
      Number(tiki_best),
      Number(genuine)
    );
    if (res_product.status === 200) {
      setFlag(!flag);
      setData(res_product.data);
    } else {
      console.log("error in login (service)");
    }
  }

  // Dùng để gọi API khi component được render
  useEffect(() => {
    fetchData();
  }, [category_id]);

  const listProduct = () =>
    (data || []).map((item: any, index: number) => (
      <div
        className={`${isMobile ? "w-[140px]" : "col-md-3"} h-full p-1`}
        key={index}
      >
        <div className="card relative cursor-pointer border rounded-lg h-full">
          <Image
            src={item.avatar}
            alt=""
            className="rounded-tl-lg rounded-tr-lg"
            width={isMobile ? 140 : 200}
            height={isMobile ? 140 : 200}
          />
          <Image
            src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
            className="p-2"
            alt=""
            width={isMobile ? 90 : 110}
            height={isMobile ? 90 : 110}
          />
          <div className="mt-2 px-2 my-2">
            <div
              className={`text-gray-500 font-base text-xs w-full h-8 overflow-hidden`}
            >
              {item.name.length > 80
                ? item.name.substring(0, isMobile ? 80 : 80) + "..."
                : item.name}
            </div>
            {/* <div className="flex my-1 ">
              {[1, 2, 3, 4, 5].map((star) => (
                <IoIosStar
                  key={star}
                  className={`text-yellow-400 text-md ${
                    isMobile ? "text-[11px]" : "text-sm"
                  }`}
                />
              ))}
            </div> */}
            <div
              className={`${
                isMobile ? "text-md" : "text-lg"
              } mt-5  font-medium`}
            >
              {item.price.toLocaleString("vi-VN")}
              <sup className="text-md underline text-ellipsis">đ</sup>
            </div>
            <div className="text-xs mb-2 sm:text-xs">Made in Korea</div>
            <div className="border-t py-2 text-[12px] text-gray-500 sm:text-xs">
              {item.note}
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
              toshow={6}
              toScroll={6}
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

export default ProductGenuine;
