import React from "react";
import { BiDetail } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { LiaStoreSolid } from "react-icons/lia";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiOutlineWallet } from "react-icons/ai";
import { Box } from "@mui/material";
import Image from "next/image";

function ViewOrdersMobile() {
  return (
    <Box>
      <div className="bg-white p-4">
        <div className="flex gap-2">
          <BiDetail className="text-blue-500 text-2xl" />
          <div>
            <h2>Mã Đơn Hàng: 80938</h2>
            <p className="my-1 text-gray-500 text-sm font-light">
              Ngày đặt hàng: 17/03/2024
            </p>
            <p className="text-gray-500 text-sm font-medium">Đã hủy</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 my-4">
        <div className="flex gap-2">
          <GrLocation className="text-blue-500 text-4xl" />
          <div className="mt-2">
            <h2>Địa Chỉ Người Nhận</h2>
            <div className="my-1 text-gray-500 text-sm font-light">
              <p className="font-medium">Hoanh Anh</p>
              <p className="my-1">0963868645</p>
              <p>
                Ha Noi, Viet Nam 123 Yen Xa, Thị trấn Thường Tín, Huyện Thường
                Tín, Hà Nội, Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mb-4">
        <div className="flex gap-2">
          <LiaStoreSolid className="text-blue-500 text-2xl" />
          <div className="">
            <h2>Thông Tin Kiện Hàng</h2>
          </div>
        </div>
        <Box className="flex justify-between gap-2 lg:my-5 sm:mt-5 lg:border-b-2 lg:pb-5">
          <Box className="flex">
            <div className="border rounded-md p-1 relative">
              <Image
                src={
                  "https://salt.tikicdn.com/cache/200x200/ts/product/b1/6a/16/345eddc667e025f3c34ef4283b3c0d8b.jpg"
                }
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="ml-4 w-full">
              <h4 className="text-md sm:text-sm font-normal">
                Tẩu sạc nhanh hoco 20w trên ô tô Z42, 1 cổng USB 1 cổng type-C
                có màn hình led PD20W QC3.0
              </h4>
              <span className="text-xs text-gray-400 font-mdeium">
                Cung cấp bởi Tiki Shop
              </span>
              <div className="flex items-center gap-1 text-md font-medium">
                <span className="inline-block mr-2">x 1 </span>
                169.000đ
                <span className="underline decoration-solid">đ</span>
              </div>
            </div>
          </Box>
        </Box>
      </div>
      <div className="bg-white p-4 mb-4">
        <div className="flex gap-2">
          <GiDeliveryDrone className="text-blue-500 text-2xl" />
          <div className="">
            <h2>Hình Thức Giao Hàng</h2>
            <div className="font-light text-[14px] mt-1">
              <span className="text-[#FFB700] font-medium text-sm">FAST</span>{" "}
              Giao Tiết Kiệm
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mb-4">
        <div className="flex gap-2">
          <AiOutlineWallet className="text-blue-500 text-2xl" />
          <div className="">
            <h2>Hình Thức Thanh Toán</h2>
            <div className="my-1 text-gray-500 text-sm font-light">
              Thanh toán qua ứng dụng ngân hàng
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mb-4">
        <ul>
          {[
            { name: "Tạm tính", value: "169.000đ" },
            { name: "Phí vận chuyển", value: "14.000đ" },
            { name: "Khuyến mãi vận chuyển", value: "-10.000đ" },
            { name: "Thành tiền", value: "173.000đ" },
          ].map((item, index) => (
            <li key={index} className={`flex justify-between ${index !== 3 && "border-b-2"} py-1 mb-1`}>
              <h6 className="text-gray-500 text-sm">{item.name}</h6>
              <span className={`inline-block ${index === 2 && "text-green-500"} ${index === 3 ? "text-md font-medium": "text-sm"} text-right`}>
                {item.value}
                {index === 3 && <div className="text-xs text-gray-500 font-medium">Đã bao gồm VAT nếu có</div>}
            </span>
              
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 mb-4 text-center">
        <button className="w-10/12 mx-auto border border-blue-500 rounded-lg text-blue-500 py-2">Mua Lại</button>
      </div>
    </Box>
  );
}

export default ViewOrdersMobile;
