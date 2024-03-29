import React from "react";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";

function PassUpdate() {
  return (
    <LayoutAccount className="" linkBack="/user/account/edit">
      <div className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Cập nhật số điện thoại</h1>
      </div>
      <div className="bg-white lg:py-7 w-full rounded-lg">
        <div className="w-5/12 sm:w-full mx-auto lg:border-2 rounded-lg px-5">
          <Box className="mt-5">
            <div>
              <div className="text-[16px]">Mật khẩu hiện tại</div>
              <input
                className="w-full py-2 px-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-md"
                type="text"
                placeholder="Nhập mật khẩu hiện tại"
              />
            </div>
            <div className="my-3">
              <div className="text-[16px]">Mật khẩu mới</div>
              <input
                className="w-full py-2 px-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-md"
                type="text"
                placeholder="Nhập mật khẩu mới"
              />
              <div className="text-xs mt-1">
                Mật khẩu phải dài từ 8-32 kí tự, phải bao gồm cả chữ và số
              </div>
            </div>
            <div>
              <div className="text-[16px]">Nhập mật khẩu mới</div>
              <input
                className="w-full py-2 px-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-md"
                type="text"
                placeholder="Nhập Nhập mật khẩu mới"
              />
            </div>
          </Box>
          <button className="bg-blue-500 w-full rounded-lg text-white py-2 my-5">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default PassUpdate;
