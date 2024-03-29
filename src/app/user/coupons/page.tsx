"use client";
import React from "react";
import { useState } from "react";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import { CgDanger } from "react-icons/cg";
import Image from "next/image";

function NotFound() {
  return (
    <Box className="w-full mx-auto h-100 pt-5 pb-10 text-center bg-white">
      <Image
        src="/images/empty-order.png"
        className="mx-auto"
        alt=""
        width={200}
        height={200}
      />
      <h4 className="text-md font-light mt-2">
        Chưa có mã giảm giá được chia sẻ !
      </h4>
    </Box>
  );
}

function Coupons() {
  const data = [
    {
      code: "T2100H",
      title: "Giảm 100K",
      proviso: [
        "Giảm 100K cho đơn hàng từ 5 triệu",
        "Áp dụng cho sản phẩm của Siêu thị",
      ],
      expiry: "2024-04-01",
      order_total: 5000000,
      discount: 100000,
    },
    {
      code: "DGF223",
      title: "Giảm 70K",
      proviso: [
        "Giảm 70K cho đơn hàng từ 1.6 triệu",
        "Áp dụng cho sản phẩm của Remax Việt Nam.",
      ],
      expiry: "2024-05-01",
      order_total: 5000000,
      discount: 70000,
    },
  ];
  const [coupons, setCoupons] = useState(data);
  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Box className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Mã giảm giá được chia sẻ</h1>
      </Box>
      {coupons.length > 0 ? (
        <Box className="flex gap-4 sm:flex-col sm:p-4">
          {coupons.map((coupon, index) => {
            console.log();

            return (
              <Box
                key={index}
                className="relative flex w-6/12 border-b border-gray-200 bg-white rounded-xl sm:w-full"
              >
                <Box className="w-4/12 py-5 border-r-2 relative ">
                  <div>
                    <Image
                      className="mx-auto"
                      src="/images/logo-tiki-file-vector.png"
                      width={80}
                      height={80}
                      alt=""
                    />
                  </div>
                  <p className="text-center mt-3 text-blue-400 ">
                    Hệ thống tiki
                  </p>
                  <div className="bg-[#F5F5FA] absolute top-[-6%] right-[-6%] w-5 h-5 rounded-full"></div>
                  <div className="bg-[#F5F5FA] absolute bottom-[-6%] right-[-6%] w-5 h-5 rounded-full"></div>
                </Box>
                <Box className="w-9/12 p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-medium">{coupon.title}</p>
                    <p className="text-sm text-gray-500">
                      Cho đơn hàng {coupon.order_total.toLocaleString("vi-VN")}{" "}
                      đ
                    </p>
                  </div>
                  <div className="text-[0.95rem] text-gray-500">
                    HSD: {coupon.expiry}
                  </div>
                </Box>
                <Box className="group">
                  <Box className="absolute top-0 right-0 p-4">
                    <CgDanger className="text-blue-400 text-xl cursor-pointer" />
                  </Box>
                  <Box className="absolute top-10 right-0 border rounded-lg bg-white shadow-2xl w-[25rem] hidden group-hover:block">
                    <div className="flex items-center gap-10 py-5 bg-gray-100">
                      <div className="text-[0.95rem] text-gray-500 w-3/12 px-4">
                        Mã
                      </div>
                      <p className="text-[16px] text-black font-normal">
                        {coupon.code}
                      </p>
                    </div>
                    <div className="flex items-center gap-10 py-5 px-4">
                      <div className="text-[0.95rem] text-gray-500 w-3/12">
                        Hạn sử dụng
                      </div>
                      <p className="text-[16px] text-black font-normal">
                        {coupon.expiry}
                      </p>
                    </div>
                    <div className="py-5 bg-gray-100 px-5">
                      <div className="text-[0.95rem] text-gray-500 mb-3">
                        Điều kiện
                      </div>
                      <ul className="text-lg font-medium list-disc ml-[20px]">
                        {coupon.proviso.map((item, index) => (
                          <li
                            key={index}
                            className="text-[15px] text-black font-normal"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <NotFound />
      )}
    </LayoutAccount>
  );
}

export default Coupons;
