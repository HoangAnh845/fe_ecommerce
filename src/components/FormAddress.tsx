"use client";
import React from "react";
import { Box } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import useWindowSize from "@/hooks/useWindowSize";

function FormAddress() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  return (
    <Box className="lg:bg-white lg:py-8 lg:px-5 rounded-md">
      <Box component={"form"}>
        <Box className="sm:bg-white sm:p-5">
          {isMobile && (
            <Box className="text-md font-medium mb-2">Nhập địa chỉ mới</Box>
          )}
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Họ và tên:
            </label>
            <input
              className="w-6/12 sm:w-full py-2 px-4 border-[1.5px] outline-[#65AFE9] rounded-md placeholder:text-[16px] sm:placeholder:text-[15px]"
              type="text"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Công ty:
            </label>
            <input
              className="w-6/12 sm:w-full py-2 px-4 border-[1.5px] outline-[#65AFE9] rounded-md placeholder:text-[16px] sm:placeholder:text-[15px]"
              type="text"
              placeholder="Nhập công ty"
            />
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Số điện thoại:
            </label>
            <input
              className="w-6/12 sm:w-full py-2 px-4 border-[1.5px] outline-[#65AFE9] rounded-md placeholder:text-[16px] sm:placeholder:text-[15px]"
              type="text"
              placeholder="Nhập điện thoại"
            />
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Tỉnh/Thành phố:
            </label>
            <select className="w-6/12 sm:w-full py-2.5 px-3 border-[1.5px] outline-[#65AFE9] rounded-md text-[14.7px]">
              <option>Chọn Tỉnh/Thành phố</option>
            </select>
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Quận huyện:
            </label>
            <select className="w-6/12 sm:w-full py-2.5 px-3 border-[1.5px] outline-[#65AFE9] rounded-md text-[14.7px] sm:bg-gray-200">
              <option>Chọn Quận/Huyện</option>
            </select>
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Phường xã:
            </label>
            <select className="w-6/12 sm:w-full py-2.5 px-3 border-[1.5px] outline-[#65AFE9] rounded-md text-[14.7px] sm:bg-gray-200">
              <option>Chọn Phường/Xã</option>
            </select>
          </div>
          <div className="flex items-center sm:flex-col gap-3 sm:gap-1 my-3">
            <label className="w-32 sm:w-full text-[14.5px] font-normal">
              Địa chỉ:
            </label>
            <textarea
              className="w-6/12 sm:w-full size rounded-md h-28 py-3 px-4 border-[1.5px] outline-[#65AFE9] text-[14.7px]"
              placeholder="Nhập địa chỉ"
            ></textarea>
          </div>
        </Box>
        <div className="lg:flex items-center gap-3 sm:gap-1 mb-3 sm:mb-6 mt-6 sm:bg-white sm:p-5">
          <label className="w-32 sm:w-full sm:font-medium text-[14.5px] font-normal">
            Loại địa chỉ:
          </label>
          <div className="flex gap-2 sm:my-2">
            {isMobile ? (
              <Box className="flex items-center gap-2 border-2 rounded-lg py-2 px-5 text-sm">
                <AiOutlineHome />
                <span>Nhà</span>
              </Box>
            ) : (
              <label className="flex items-center mr-5 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="house"
                  className="cursor-pointer w-[20px] h-[20px] mr-2 accent-[#0C5CB6]"
                />
                <span className="label text-[14.7px] leading-5 flex items-center">
                  Nhà riêng / Chung cư
                </span>
              </label>
            )}
            {isMobile ? (
              <Box className="flex items-center gap-2 border-2 rounded-lg py-2 px-5 text-sm">
                <AiOutlineHome />
                <span>Văn phòng</span>
              </Box>
            ) : (
              <label className="flex items-center mr-5 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="company"
                  className="cursor-pointer w-[20px] h-[20px] mr-3 accent-[#0C5CB6]"
                />
                <span className="label text-[14.7px] leading-5 flex items-center">
                  Cơ quan / Công ty
                </span>
              </label>
            )}
          </div>
          {isMobile && (
            <span className="text-xs text-gray-500 font-light">
              Tiki sẽ giao hàng cho bạn vào tất cả các ngày trong tuần.
            </span>
          )}
        </div>
        <Box className="sm:bg-white sm:pb-1">
          <div className="flex lg:justify-end items-center gap-3 mb-3 mt-6 w-4/12 sm:w-full lg:ms-4 sm:border-b-2 sm:p-5">
            <label className="flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="cursor-pointer w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] mr-2 "
              />
              <span className="label text-[14.7px] leading-5 flex items-center sm:font-medium">
                Đặt làm địa chỉ mặc định
              </span>
            </label>
          </div>
          <div className="sm:bg-rose-500 my-6 sm:w-10/12 w-3/12 lg:ms-12 sm:mx-auto sm:text-center lg:text-right sm:shadow-lg sm:rounded-lg">
            <button
              type="submit"
              className="lg:bg-[#FDD736] text-md sm:text-white py-2 px-12 rounded-md"
            >
              {isMobile ? "Xác nhận" : "Cập nhật"}
            </button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default FormAddress;
