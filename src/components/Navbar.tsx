"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import LoginModal from "./LoginModal";
import { Box } from "@mui/material";
import useWindowSize from "@/hooks/useWindowSize";
import React from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";
import Loading from "@/app/loading";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleAccount = function () {
    setOpen(true);
  };
  const [isReady, setIsReady] = useState(false);
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  useEffect(() => {
    if (size.width !== undefined) {
      setIsReady(true);
    }
  }, [size]);

  if(!isReady){
    return <Loading/>;
  };

  return (
    <>
      {open && <LoginModal isopen={open} />}
      <div className="container sm:w-fulll mx-auto py-1 sm:py-3 sm:pt-5 lg:flex lg:justify-between ">
        <div className="w-1/12 sm:w-full sm:px-2 sm:mb-2">
          <Link href={"/"} className="">
            <Image
              src={`${
                isMobile
                  ? "https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                  : "/images/logo.png"
              }`}
              className="mt-[-11px] ms-[7px] sm:inline-block sm:mt-[-1px]"
              width={isMobile ? 50 : 100}
              height={isMobile ? 50 : 100}
              alt="Logo"
            />
            <span className="inline-block border-l px-2 ms-2 text-sm text-blue-800 font-bold lg:hidden">Tốt & Nhanh</span>
          </Link>
        </div>

        <div className="lg:w-11/12">
          <div className="flex w-full lg:mb-1 justify-between items-center sm:px-2 ">
            <form className="w-9/12 sm:w-full h-[40px] lg:pe-5 ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative lg:ms-8 ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoSearch className="text-[#808089] text-2xl" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-12 sm:p-2 sm:ps-10  sm:border-gray-400 text-sm text-gray-900 border border-[#1b1b1c77] rounded-lg bg-white outline-none placeholder:text-[16px] sm:placeholder:text-[15px]"
                  placeholder="Top bán chạy giá tốt nhất tháng"
                  required
                />
                <button
                  type="submit"
                  className="text-blue-600 absolute bottom-[-1px] right-0 hover:bg-bg-800 text-md py-[0.7rem] px-5 hover:bg-rgba-blue rounded-r-lg border-l-[1.2px] sm:hidden"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
            <div className="flex items-center justify-end lg:w-3/12 pt-1">
              <div className="text-blue-500 font-meduim cursor-pointer hover:bg-rgba-blue p-3 rounded-xl sm:hidden">
                <GoHomeFill className="inline-block text-2xl" />
                <span className="inline-block ms-1 font-medium">Trang chủ</span>
              </div>
              <div
                className="relative group mx-2 p-3hover:bg-gray-200 rounded-xl text-gray-400 font-meduim cursor-pointer sm:hidden"
                onClick={handleAccount}
              >
                <FaRegFaceSmileWink className="inline-block text-2xl" />
                <span className="inline-block ms-1 font-medium">Tài khoản</span>
                <Box className="absolute top-7 right-[-10%] z-1 w-72 border rounded-lg shadow-md py-2 bg-white leading-9 hidden group-hover:block">
                  <div className="px-4 py-2 hover:bg-gray-200 text-black text-[15px]">
                    <Link href="/user/account">Thông tin tài khoản</Link>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-200 text-black text-[15px]">
                    <Link href="/order/history-orders">Đơn hàng của tôi</Link>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-200 text-black text-[15px]">
                    Trung tâm hỗ trợ
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-200 text-black text-[15px]">
                    Đăng xuất
                  </div>
                </Box>
              </div>
              <div className="w-[1.5px] pb-6 bg-gray-300 me-2 sm:hidden"></div>
              <div className="text-blue-500 text-2xl sm:text-3xl cursor-pointer hover:bg-rgba-blue py-1 px-2 rounded-xl sm:mt-[-10px]">
                <CgShoppingCart className="inline-block" />
              </div>
            </div>
          </div>
          <div className="lg:hidden my-3 sm:px-2 ">
            <div className="slider-container">
              <Carousel toshow={1} toScroll={1} dots={true}/>
            </div>
          </div>
          <div className="lg:hidden bg-[#F5F5FA] w-full py-3"></div>
          <div className="flex items-center justify-between sm:pt-3 sm:px-2  ">
            <nav className="sm:hidden ms-10">
              <ul className="flex gap-3 text-rgb-gray font-normal text-[15px]">
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Điện gia dụng</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Xe cộ</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Mẹ & bé</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Khỏe đẹp</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Nhà cửa</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Sách</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={""}>Thể thao</Link>
                </li>
              </ul>
            </nav>
            <div className="text-[15px] font-medium">
              <IoLocationOutline className="inline-block text-2xl text-gray-400 font-medium mb-[5px] mx-1" />
              <span className="text-gray-400 inline-block me-2">Giao đến:</span>
              <span className="inline-block underline ">
                Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
