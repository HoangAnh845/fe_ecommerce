"use client";
import React from "react";
import { useState } from "react";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

function NotFound() {
  return (
    <Box className="w-full mx-auto h-100 sm:h-screen py-20 sm:px-10 text-center bg-white">
      <Image
        src="/supmer.svg"
        alt=""
        width={170}
        height={170}
        className="mx-auto"
      />
      <Box>
        <p className="flex items-center justify-center gap-2 my-3 text-[16px] sm:text-sm text-gray-500 sm:hidden">
          Hãy <FaHeart className="text-rose-500" /> sản phẩm yêu thích khi mua
          sắm để xem lại thuận tiện nhất
        </p>
        <p className="flex items-center justify-center gap-2 my-3 text-[16px] sm:text-sm text-gray-500 lg:hidden">
          Hãy "Thích" sản phẩm yêu thích khi mua
          sắm để xem lại thuận tiện nhất
        </p>
        <button className="bg-[#FDDA43] py-2 px-12 rounded-md">
          Tiếp tục mua sắm
        </button>
      </Box>
    </Box>
  );
}

function Wishlist() {
  const data = [
    {
      id: 1,
      name: "Cà phê hòa tan G7 3in1 - Bịch 50 sachets 16gr",
      avatar:
        "https://salt.tikicdn.com/cache/750x750/ts/product/df/12/9d/1fa00fa2473e17471a881e73a8d6fbe4.jpg",
      describe:
        "Cà phê G7 3in1 được chiết xuất từ những phần tinh túy có trong từng hạt cà phê, trên công nghệ hàng đầu và bí quyết không thể sao chép để cho ra đời sản phẩm cà phê hòa tan thượng hạng, với hương vị khác biệt, đậm đà, hương thơm độc đáo quyến rũ mà không một sản phẩm cà phê hòa tan nào khác đạt được. Trong suốt 12 năm liên tục cà phê G7 được người tiêu dùng bình chọn là hàng Việt Nam chất lượng cao.",
      price: 150000,
    },
    {
      id: 2,
      name: "Gạo Hoa Lúa Đỏ - Túi 2kg - Dẻo mềm, Vị ngọt đậm, Thơm đặc trưng",
      avatar:
        "https://salt.tikicdn.com/cache/750x750/ts/product/b5/12/ee/c5a078994dd6f842512b42e726a57543.jpg",
      describe:
        "Việc chọn lựa nguyên liệu là 01 bí quyết, cùng với nghệ thuật rang tạo nên sản phẩm cà phê Năng Lượng đượm hương thơm, thoáng mùi khói nhẹ, đậm vị cà phê nguyên bản, hậu vị đậm.",
      price: 88000,
    },
  ];
  const [wishlist, setWishlist] = useState(data);
  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Box className="py-5 sm:hidden ">
        <h1 className="text-[22px] font-light ">Danh sách yêu thích</h1>
      </Box>
      {wishlist.length > 0 ? (
        <Box className="sm:p-4 ">
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wishlist.map((item) => (
              <Box key={item.id} className="bg-white shadow-md rounded-md p-5">
                <Box className="relative">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-md mx-auto"
                  />
                  <Box className="absolute top-2 right-2">
                    <FaHeart className="text-rose-500 text-2xl" />
                  </Box>
                </Box>
                <Box className="py-3">
                  <h3 className="text-[16px] font-medium">{item.name}</h3>
                  <p className="text-[14px] text-gray-500">
                    {item.describe.length > 100
                      ? item.describe.substring(0, 100) + "..."
                      : item.describe}
                  </p>
                  <Box className="flex items-center justify-between mt-4">
                    <p className="text-[16px] font-medium text-rose-500">
                      {item.price.toLocaleString("vi-VN")} đ
                    </p>
                    <div>
                      <button className="bg-[#FDDA43] py-1 px-2 rounded-md mr-3">
                        Mua ngay
                      </button>
                      <button className="bg-rose-500 py-1 px-5 rounded-md text-white">
                        Xóa bỏ
                      </button>
                    </div>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <NotFound />
      )}
      <Box></Box>
    </LayoutAccount>
  );
}

export default Wishlist;
