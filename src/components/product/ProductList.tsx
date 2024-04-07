"use client";
import React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel";
import Image from "next/image";
import Box from "@mui/material/Box";
import useWindowSize from "@/hooks/useWindowSize";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IoIosStar } from "react-icons/io";
import { get_products } from "@/services/product";

function ProductList() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  const [paginate, setPaginate] = useState<any>({
    toatal: 0,
    currentPage: 1,
  });
  const [pageurl, setPageUrl] = useState(1);
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);
  async function fetchData() {
    const res_product = await get_products(Number(pageurl));
    if (res_product.status === 200) {
      setFlag(!flag);
      setData(res_product.data);
      setPaginate(res_product.pagination);
    } else {
      console.log("error in login (service)");
    }
  }

  // Dùng để gọi API khi component được render
  useEffect(() => {
    fetchData();
  }, [pageurl]);

  //   console.log("LOG__data__",data);

  const listProduct = () =>
    (data || []).map((item: any, index) => (
      <div
        className={`${isMobile ? "w-6/12" : "w-2/12"} h-full p-1`}
        key={index}
      >
        <div className="card relative cursor-pointer border rounded-lg h-full bg-white">
          <Image
            src={item.avatar}
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
            <div
              className={`text-gray-500 font-base text-xs w-full h-8 overflow-hidden`}
            >
              {item.name.length > 80
                ? item.name.substring(0, isMobile ? 80 : 80) + "..."
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
            <div className="border-t py-2 lg:pb-0 text-[12px] text-gray-500">
              {item.note.length > 20 ? item.note.substring(0, 20) : item.note}
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
      <Box className="text-center w-max mx-auto my-5">
        <Stack spacing={2}>
          <Pagination
            page={paginate.currentPage}
            count={5}
            shape="rounded"
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              return setPageUrl(page);
            }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default ProductList;
