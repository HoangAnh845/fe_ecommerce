"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import {
  BookAddressIcon,
  DiscountIcon,
  FavouterIcon,
  NoticeIcon,
  OrderIcon,
  PaymentIcon,
  PresonIcon,
  RightIcon,
} from "../../public/icons";
import Link from "next/link";
import Footer from "@/components/Footer";
import { BsCart2 } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import useWindowSize from "@/hooks/useWindowSize";
import Loading from "@/app/loading";

function LayoutAccount(
  {
    children,
    className,
    linkBack,
  }: { children: React.ReactNode; className: string; linkBack: string } = {
    children: null,
    className: "",
    linkBack: "",
  }
) {
  const [active, setActive] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();
  const router_children = pathname;
  const router_parent = pathname.split("/")[1];
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  useEffect(() => {
    if (size.width !== undefined) {
      setIsReady(true);
    }
  }, [size]);

  // Chuyển đổi name
  var name_bread = "";
  switch (router_children) {
    case "/user/account":
      name_bread = "Thông tin tài khoản";
      break;
    case "/user/account/edit/phone":
      name_bread = "Số điện thoại";
      break;
    case "/user/account/edit/email":
      name_bread = "Địa chỉ email";
    case "/user/account/edit/pass":
      name_bread = "Đổi mật khẩu";
      break;
    case "/user/notification":
      name_bread = "Thông báo của tôi";
      break;
    case "/order/history-orders":
      name_bread = "Quản lý đơn hàng";
      break;
    case "/user/address":
      name_bread = "Sổ địa chỉ";
      break;
    case "/user/address/create":
      name_bread = "Thêm địa chỉ";
      break;
    case "/user/address/edit":
      name_bread = "Sửa địa chỉ";
      break;
    case "/user/payment":
      name_bread = "Thông tin thanh toán";
      break;
    case "/user/account/security-settings":
      name_bread = "Thiết lập bảo mật";
      break;
      case "/user/account/security-settings/pin-code":
      name_bread = "Thiết lập bảo mật";
      break;
    case "/user/review":
      name_bread = "Đáng giá sản phẩm";
      break;
    case "/user/wishlist":
      name_bread = "Sản phẩm yêu thích";
      break;
    case "/user/coupons":
      name_bread = "Mã giảm giá";
      break;
    default:
      name_bread = "";
      break;
  }

  switch (router_parent) {
    case "order":
      name_bread = "Đơn hàng";
      break;
  }

  if (!isReady) {
    return <Loading />; // Nếu chưa sẵn sàng, hiển thị component Loading
  }

  return (
    <div>
      {isMobile ? (
        <Box
          className={`flex justify-between items-center p-4 bg-[#3BA8FF] text-white ${className}`}
        >
          <Link href={linkBack}>
            <FaChevronLeft />
          </Link>
          <div className="font-medium text-lg">{name_bread}</div>
          <Badge color="error" badgeContent={3}>
            <BsCart2 className="text-2xl" />
          </Badge>
        </Box>
      ) : (
        <Navbar />
      )}

      <Box className="bg-[#F5F5FA] pb-[12rem] max-[768px]:h-screen">
        {isMobile ? (
          <Box className="h-screen">{children}</Box>
        ) : (
          // Desktop
          <Box className="w-10/12 mx-auto pt-5">
            <Box className="flex items-center text-[15px]">
              <span className="text-[#6D6D71] font-light">Trang chủ</span>
              <RightIcon
                width="0.8rem"
                height="0.8rem"
                className="text-[#6D6D71] font-light ms-1 me-2"
              />
              <span className="text-[#6D6D71]">{name_bread}</span>
            </Box>
            <Grid container>
              <Grid item xs={2} className="text-[15px]">
                <Box className="welcome flex items-center gap-3 my-3">
                  <Image
                    src={"/images/avatar_left_account.png"}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-[15px] font-light">Tài khoản của</p>
                    <h3 className="text-lg">Hoàng Anh</h3>
                  </div>
                </Box>
                <div className="menus">
                  <nav>
                    <ul>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <PresonIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/user/account">Thông tin tài khoản</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <NoticeIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/user/notification">Thông báo của tôi</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <OrderIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/order/history-orders">
                          Quản lý đơn hàng
                        </Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <BookAddressIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/user/address">Sổ địa chỉ</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <PaymentIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/user/payment">Thông tin thanh toán</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <Image
                          src={"/images/icon_review.png"}
                          alt=""
                          width={22}
                          height={22}
                        />
                        <Link href="/user/review">Đáng giá sản phẩm</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <FavouterIcon
                          width="1.5rem"
                          height="1.5rem"
                          className="text-[#9B9B9B]"
                        />
                        <Link href="/user/wishlist">Sản phẩm yêu thích</Link>
                      </li>
                      <li
                        className={`${
                          active && "bg-[#ECECF1]"
                        } flex items-center gap-2 py-3 px-2 hover:bg-[#ECECF1] cursor-pointer`}
                      >
                        <DiscountIcon width="1.5rem" height="1.5rem" />
                        <Link href="/user/coupons">Mã giảm giá</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Grid>
              <Grid item xs={10} className="ps-10 w-full">
                {children}
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      {!isMobile && (
        <Box className="w-10/12 mx-auto">
          <Footer />
        </Box>
      )}
    </div>
  );
}

export default LayoutAccount;
