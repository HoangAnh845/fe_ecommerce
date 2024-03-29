import React from "react";
import { FaAddressBook } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BiSolidCommentEdit } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { BiDetail } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { DiscountIcon } from "../../../public/icons";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function AccountMobile() {
  const menu_user = [
    {
      icon: <FaAddressBook className="text-gray-500 text-xl" />,
      name: "Sổ địa chỉ",
      link: "/user/address",
    },
    {
      icon: <MdOutlinePayment className="text-gray-500 text-xl" />,
      name: "Thông tin thanh toán",
      link: "/user/payment",
    },
    {
      icon: <BsFillShieldLockFill className="text-gray-500 text-xl" />,
      name: "Thiết lập bảo mật",
      link: "/user/account/security-settings",
    },
  ];

  const menu_tiki = [
    {
      icon: <BiSolidCommentEdit className="text-gray-500 text-xl" />,
      name: "Đánh giá sản phẩm",
      link: "/user/review",
    },
    {
      icon: <IoMdNotifications className="text-gray-500 text-xl" />,
      name: "Thông báo của tôi",
      link: "/user/notification",
    },
    {
      icon: <BiDetail className="text-gray-500 text-xl" />,
      name: "Quản lý đơn hàng",
      link: "/order/history-orders",
    },
    {
      icon: <MdFavorite className="text-gray-500 text-xl" />,
      name: "Sản phẩm yêu thích",
      link: "/user/wishlist",
    },
  ];

  const menu_other = [
    {
      icon: "https://salt.tikicdn.com/ts/upload/b5/33/14/09096979a40d25a2ad3976e3809ceb78.png",
      name: "Thông tin Tiki xu",
    },
    {
      icon: "https://salt.tikicdn.com/ts/tmp/95/15/2d/4b3d64b220f55f42885c86ac439d6d62.png",
      name: "Mua trước trả sau",
    },
  ];
  return (
    <Box className="">
      <Box className="flex items-center gap-4 bg-white p-4">
        <div className="bg-blue-400 text-white rounded-full p-5 text-medium">
          HO
        </div>
        <div className="w-9/12">
          <h4 className="mb-1">Hoàng Anh</h4>
          <p className="text-gray-500 text-sm">uonghoanganh45@gmail.com</p>
          <span className="text-gray-500 font-medium text-sm">
            Thành viên từ: 03/01/2024
          </span>
        </div>
        <Link href={"/user/account/edit"}>
          <FaAngleRight className="text-gray-400 text-xl" />
        </Link>
      </Box>
      <Link href={"/user/coupons"}>
        <Box className="flex items-center gap-4 bg-white my-3 p-4">
          <div>
            <DiscountIcon width="1.7rem" height="1.7rem" />
          </div>
          <div className="w-10/12 text-sm">
            <p>Mã giảm giá</p>
            <span className="font-light">
              (Bạn đang có <b className="font-medium">1</b> mã giảm giá)
            </span>
          </div>

          <FaAngleRight className="text-gray-400 text-xl" />
        </Box>
      </Link>
      <Box>
        {menu_user.map((item, index) => {
          return (
            <Link href={item.link}>
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  menu_user.length - 1 !== index && "border-b-[1px]"
                } bg-white p-4`}
              >
                <div>{item.icon}</div>
                <div className="w-10/12 text-sm">{item.name}</div>
                <FaAngleRight className="text-gray-400 text-xl" />
              </div>
            </Link>
          );
        })}
      </Box>
      <Box className="my-3">
        {menu_tiki.map((item, index) => {
          return (
            <Link href={item.link}>
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  menu_tiki.length - 1 !== index && "border-b-[1px]"
                } bg-white p-4`}
              >
                <div>{item.icon}</div>
                <div className="w-10/12 text-sm">{item.name}</div>
                <FaAngleRight className="text-gray-400 text-xl" />
              </div>
            </Link>
          );
        })}
      </Box>
      <Box className="">
        {menu_other.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                menu_other.length - 1 !== index && "border-b-[1px]"
              } bg-white p-4`}
            >
              <div>
                <Image src={item.icon} alt="" width={27} height={27}></Image>
              </div>
              <div className="w-10/12 text-sm">{item.name}</div>
              <FaAngleRight className="text-gray-400 text-xl" />
            </div>
          );
        })}
      </Box>
      <Box className="w-10/12 mt-5 mx-auto">
        <button className="w-full py-2 border border-blue-500 bg-white text-blue-500">
          Đăng Xuất
        </button>
      </Box>
    </Box>
  );
}

export default AccountMobile;
