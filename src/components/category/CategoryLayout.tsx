"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "../Carousel";
import { FaStar } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import axios from "axios";
import ProductPriceNice from "../product/ProductPriceNice";
import ProductTikiBest from "../product/ProductTikiBest";
import ProductGenuine from "../product/ProductGenuine";
import ProductFilter from "../product/ProductFilter";
import Footer from "../Footer";
// import cheerio from 'cheerio'; // Cái này để parse html

function CategoryLayout({ title, data }: { title: string; data: Array<any> }) {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const slider = () => {
    return [
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/22/27/4f/bd8035ded7b80defcc29420662d7e8c3.jpg",
        name: "Muôn Kiếp Nhân Sinh",
        sub: "Tài trở bởi First News",
      },
      {
        image:
          "https://salt.tikicdn.com/ts/tka/66/df/25/eee7aa9793d72df4a7150d39e2e5bb80.png",
        name: "Cùng Nhã Nam Đón Tết",
        sub: "Tài trở bởi Hiệu Sách Nhã Nam",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/89/9e/7d/e292d266ae6cde91c045c23e97ad05de.jpg",
        name: "Top 10 Sách Kinh",
        sub: "Tài trở bởi GIVẺ Books",
      },
      {
        image:
          "https://salt.tikicdn.com/ts/tka/92/8d/88/ba9cd98ea470ecf030d4df2cbfbf301b.jpg",
        name: "Đầu từ đúng cách với",
        sub: "Tài trở bởi finfin",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/98/02/ca/f5c52e12e6791bfc7ad8172c443ce2b7.jpg",
        name: "Sao Chúng Ta lại Ngủ - Tái Bản 2021",
        sub: "Tài trở bởi Hiệu Sách Tự Do",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png",
        name: "Sách Hay Về Tài Chính",
        sub: "Tài trở bởi NVP",
      },
      {
        image:
          "https://salt.tikicdn.com/ts/tka/cf/b2/2a/bf1d89cdb9aba0e58d8b099f853db973.png",
        name: "TOP SÁCH LUYỆN THI",
        sub: "Tài trở bởi Tiki Trading Books",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/f8/fc/35/b9cf2e2abd40db7885da67494afe5d8f.jpg",
        name: "SBooks",
        sub: "Tài trở bởi Sbooks",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/0a/f8/b4/ea153d8d87e8a1527af84503e7f56de7.png",
        name: "Nhà Sách Korichi",
        sub: "Tài trở bởi KoriChi Official",
      },
      {
        image:
          "https://vcdn.tikicdn.com/ts/seller/dc/2b/e6/5cc2f98caf8cb4c6a78a5ee336458207.jpg",
        name: "Sách excel thầy Vinh",
        sub: "Tài trở bởi Đào Tạo Tin Học",
      },
    ].map((item, index) => (
      <Box key={index} className="relative lg:p-2 mb-7 ">
        <div className="flex border rounded-lg ">
          <div className="border-[15px] border-[#E0F2E0] rounded-tl-lg rounded-bl-lg w-4/12">
            <Image
              src={item.image}
              alt={""}
              width={isMobile ? 150 : 200}
              height={isMobile ? 150 : 200}
            />
          </div>
          <div className="w-8/12 p-4 lg:bg-white">
            <div className="font-base sm:text-lg text-2xl w-full">
              {item.name.length > 28
                ? item.name.substring(0, 28) + "..."
                : item.name}
            </div>
            <div className="lg:flex gap-2">
              <div className="text-gray-500 font-base sm:text-sm text-md my-1">
                {item.sub.length > 28
                  ? item.sub.substring(0, 28) + "..."
                  : item.sub}
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <div>5/5</div> <FaStar className="text-yellow-400 text-lg" />
              </div>
            </div>
            <div className="sm:hidden flex gap-2 absolute bottom-7">
              {[
                "https://salt.tikicdn.com/cache/100x100/ts/product/a6/95/77/de4b0c78554cbef2da83e0c2417c9e9f.jpg",
                "https://salt.tikicdn.com/cache/100x100/ts/product/6a/cf/2e/e1e263efd2bc5a7ea42ff6ea2238f1b4.jpg",
                "	https://salt.tikicdn.com/cache/100x100/ts/product/f2/e6/4d/00c59c441ec09050fa59bb357e4922ba.jpg",
              ].map((item, index) => (
                <div className="relative" key={index}>
                  <Image
                    src={item}
                    alt=""
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-1 right-1 bg-rose-500 rounded-md p-1 text-white text-[10px]">
                    -20%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    ));
  };

  // const CategoryHot = () => {
  //   return [
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/category/33/f4/5b/049d91f3ede87f206498aa3e30d27eb0.png",
  //       name: "Sách tư duy - Kỹ năng sống",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/category/f0/de/c7/b099ef3717561ef0867cee2c4910bfb3.png",
  //       name: "Truyện ngắn - Tản văn - Tạp Văn",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
  //       name: "Tiểu Thuyết",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/media/catalog/product/k/h/khi-hoi-tho-hoa-thinh-khong.u5464.d20170726.t170655.288851.jpg",
  //       name: "Tiểu sử - Hồi ký",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg",
  //       name: "Sách Học Tiếng Anh",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  //       name: "Tác phẩm kinh điển",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/product/23/56/86/a538698ead7dc2f693d1e9778417317d.jpg",
  //       name: "Truyện trinh thám",
  //     },
  //     {
  //       image:
  //         "https://salt.tikicdn.com/cache/280x280/ts/product/8e/32/3d/e4487c4c7e335bbda4f06dd54d8e35b8.jpg",
  //       name: "Truyện Giả tưởng - Huyền Bí - Phiêu Lưu",
  //     },
  //   ].map((item, index) => (
  //     <div className=" w-[172px] py-2 px-5" key={index}>
  //       <Image
  //         className="rounded-full mx-auto"
  //         alt={""}
  //         width={150}
  //         height={150}
  //         src={item.image}
  //       />
  //       <div className="text-center font-medium text-sm mt-2 ">{item.name}</div>
  //     </div>
  //   ));
  // };

  const handleExtend = () => {
    setExpanded(true);
  };

  const CategoryExplore = () => (
    <div className="flex flex-wrap ">
      {(isMobile ? (expanded ? data : data.slice(0, 2)) : data).map(
        (item, index) =>
          index > 0 && (
            <Box className="sm:w-6/12 lg:py-2 lg:px-5" key={index}>
              <div className="sm:flex px-1 mb-2 lg:w-[130px] ">
                <div className="border lg:rounded-full p-1 overflow-hidden">
                  <Image
                    className="mx-auto "
                    src={item.avatar}
                    alt=""
                    width={isMobile ? 90 : 100}
                    height={isMobile ? 90 : 100}
                  />
                </div>
                <div className="font-medium sm:bg-gray-200  p-2 text-xs pr-2 lg:text-center">
                  {item?.name}
                </div>
              </div>
            </Box>
          )
      )}
    </div>
  );

  return (
    <>
      <Box>
        <div className="mb-5 p-5 bg-white w-full font-medium text-2xl sm:hidden rounded-lg">
          {title}
        </div>
        <Box className={`sm:bg-white sm:p-5 sm:pt-0 rounded-lg mb-5`}>
          <div className="slider-container">
            <Carousel
              toshow={isMobile ? 1 : 2}
              dots={true}
              toScroll={isMobile ? 1 : 2}
              arrows={false}
              type="list"
              list={slider()}
            />
          </div>
          <Box className="mt-3 lg:hidden">
            <h1 className="font-medium mb-3">Nhà Sách Tiki bán chạy</h1>
            {CategoryExplore()}
            <div
              className="flex justify-center items-center gap-2 text-sm mt-2 text-blue-700 font-medium"
              onClick={!expanded ? handleExtend : () => setExpanded(false)}
            >
              {!expanded ? (
                <>
                  Xem Thêm 2 Danh Mục <FaChevronDown />
                </>
              ) : (
                <>
                  Thu gọn <FaChevronUp />
                </>
              )}
            </div>
          </Box>
        </Box>
        <Box className={`bg-white p-5 rounded-lg mb-5 lg:hidden`}>
          <div className="w-full overflow-scroll flex justify-between gap-2">
            {[
              "https://salt.tikicdn.com/cache/w150/ts/brickv2og/69/d4/81/a6b7fcade44ec9e28b3abb6f96837e98.png",
              "https://salt.tikicdn.com/cache/w150/ts/brickv2og/ed/ae/fa/55388bd6e79be50e1e53c08909fdc7e4.png",
              "https://salt.tikicdn.com/cache/w150/ts/brickv2og/10/e0/8c/0c353c41829a0aa44f66e49b718749cd.png",
              "https://salt.tikicdn.com/cache/w150/ts/brickv2og/70/b9/74/cd0627dec9863151fcc344558861023a.png",
            ].map((item, index) => (
              <div
                className="w-max py-2 px-5 bg-gray-100 rounded-md"
                key={index}
              >
                <Image
                  className="rounded-lg mx-auto"
                  alt={""}
                  width={50}
                  height={50}
                  src={item}
                />
              </div>
            ))}
          </div>
        </Box>
        <Box className={`bg-white p-5 pb-0 rounded-lg mb-5 sm:hidden`}>
          <h1 className="font-medium mb-3">Khám phá theo danh mục</h1>
          <Box className="w-full">{CategoryExplore()}</Box>
        </Box>
        <Box className={`sm:bg-[#F5F5FA] sm:pt-1 rounded-lg mb-5`}>
          <Box className="w-full">
            <ProductFilter data={data[0]} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CategoryLayout;
