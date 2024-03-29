import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

function Setup() {
  return (
    <LayoutAccount className="" linkBack="/user/account/security-settings">
      <Box className="p-5">
      <Box className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Thiết lập mã PIN</h1>
      </Box>
        <div className="lg:hidden text-2xl text-gray-600 mb-3 sm:hidden" >
          <Link className="" href="/user/account/security-settings">
            <FaAngleLeft />
          </Link>
        </div>
        <div className="lg:flex text-center">
          <div className="lg:bg-white lg:p-6 lg:w-6/12">
            <h1 className="text-3xl font-medium">Xác minh số điện thoại</h1>
            <p className="text-gray-500 font-base text-sm mt-2 mb-4">
              Để bắt đầu thiết lập mã PIN, vui lòng xác minh bằng mã OTP gửi qua
              số điện thoại của bản{" "}
            </p>
          </div>
          <div className="lg:bg-white lg:p-6 lg:w-6/12">
            <button
              className="w-8/12 sm:w-full rounded-lg bg-blue-500 py-2 text-white  font-medium"
              type="submit"
            >
              Lấy mã OTP
            </button>
            <p className="mt-5 text-sm text-gray-400">
              Đổi số điện thoại? Liên hệ Hotiline{" "}
              <span className="text-blue-500 underline decoration-1">
                1900-6035
              </span>
            </p>
          </div>
        </div>
      </Box>
    </LayoutAccount>
  );
}

export default Setup;
