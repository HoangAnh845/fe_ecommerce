"use client";

import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const data = [
  {
    id: 1,
    message:
      "Tiki giao hàng cực nhanh luôn nhé. Mình mua làm quà tặng cho bạn nên chưa bóc ra thử được. Sản phẩm có bao bì đẹp, chắc chắn, có nghe mùi cà phê thơm nhẹ nữa.",
    rating_value: 3,
    image: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3b/f3/37/f4ab323be2598dd39da1aabfa0e0dbc6.jpg"
  },
  {
    id: 2,
    message:
      "Hàng của Shop là ok. đóng gói hàng cẩn thận, giao đủ hàng, giá bán hợp lý. Mình thích khuyến mại, cứ có khuyến mại là mua ủng hộ.",
    rating_value: 5,
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/4c/c4/04/2c40b4e11780a0079dd18d6dd326e2a8.jpg"
  },
];

function Review() {
  const [review, setReview] = useState(data);
  return (
    <LayoutAccount className="" linkBack="/user/account">
      {review.length > 0 ? (
        <Box>
          <Box className="py-5 sm:hidden">
            <h1 className="text-[22px] font-light ">Thông tin đánh giá</h1>
          </Box>
          <Box className="flex gap-3 sm:p-5">
            {(review || []).map((item) => (
              <Box key={item.id} className="border-b border-gray-200 bg-white sm:w-max sm:mx-auto">
                <div className="w-full relative group cursor-pointer ">
                  <Image
                    src={
                      item.image
                    }
                    width={200}
                    height={200}
                    alt=""
                  />
                  <div className="bg-black opacity-50  w-full h-full absolute top-0 hidden group-hover:block "></div>
                  <div className="text-[16px] font-medium w-full h-full absolute top-0 text-white p-4 text-xs hidden group-hover:block"
                   >{item.message}</div>
                </div>
                <div className="py-3 border-t-2">
                  <div className="flex gap-1 justify-center">
                    {[...Array(item.rating_value)].map((_, index) => (
                      <FaStar key={index} className=" text-yellow-400"/>
                    ))}
                  </div>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box className="flex items-center flex-col justify-center text-center w-full h-full mt-[-30px]">
          <Image
            src={"/supmer_star.svg"}
            width={190}
            height={190}
            alt=""
            className="mx-auto"
          />
          <div>Bạn chưa có sản phẩm nào cần đánh giá. Mua sắm thôi!</div>
        </Box>
      )}
    </LayoutAccount>
  );
}

export default Review;
