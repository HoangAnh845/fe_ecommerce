"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Fade from "@mui/material/Fade";
import Drawer from "@mui/material/Drawer";

import Navbar from "@/components/Navbar";
import CategoryLayout from "@/components/category/CategoryLayout";
import Footer from "@/components/Footer";

import useWindowSize from "@/hooks/useWindowSize";

import { get_all_category } from "@/services/category";

import {
  FaChevronDown,
  FaBars,
  FaAngleLeft,
  FaAngleRight,
  FaChevronRight,
} from "react-icons/fa";
import { IoIosStar, IoMdHome, IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3, HiMiniUserCircle } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import Loading from "@/app/loading";
import { log } from "console";

function ViewCategory() {
  const { id } = useParams();
  const [data, setData] = useState<any>([
    {
      id: 0,
      name: "",
      category_children: [],
    },
  ]);
  const [flag, setFlag] = useState(false);
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  const [expanded, setExpanded] = useState<string | false>("panel0");
  const [bread, setBread] = useState<string>("");

  // const handleChange =
  //   (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setExpanded(newExpanded ? panel : false);
  //   };
  // Thanh menu danh mục

  async function fetchData() {
    const res_category = await get_all_category(Number(id));
    if (res_category.status === 200) {
      setFlag(!flag);
      setData(res_category.data);
    } else {
      console.log("error in login (service)");
    }
  }

  // if (data.length > 1) {
  //   setBread(data[0].name);
  // }

  // Bánh mì
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography key="3" color="text.primary">
      {data[0].name}
    </Typography>,
  ];

  // Menu Mobile
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex items-center justify-between gap-1 bg-[#1BA7FE] px-2 py-3">
        <div className="flex gap-2">
          <div className="rounded-full bg-orange-400 text-white p-3">HO</div>
          <div className="text-white">
            <h3 className="text-[16px] mb-1">Hoàng Anh</h3>
            <p className="text-xs">uonghoanganh45@gmail.com</p>
          </div>
        </div>
        <div>
          <FaChevronRight className="text-sm text-white" />
        </div>
      </div>
      <div className="p-4 border-b">
        <ul className="leading-10">
          <li className="flex items-center gap-4">
            <IoMdHome className="text-gray-500 text-2xl mr-5" />
            <span className="font-base inline-block text-[14px] ">
              Trang chủ
            </span>
          </li>
          <li className="flex items-center gap-3">
            <HiMiniBars3 className="text-gray-500 text-2xl mr-5" />
            <span className="font-base inline-block text-[14px] ">
              Danh sách ngành hàng
            </span>
          </li>
          <li className="flex items-center gap-3">
            <HiMiniUserCircle className="text-gray-500 text-2xl mr-5" />
            <span className="font-base inline-block text-[14px] ">
              Quản lý tài khoản
            </span>
          </li>
          <li className="flex items-center gap-3">
            <IoIosNotifications className="text-gray-500 text-2xl mr-5" />
            <span className="font-base inline-block text-[14px] ">
              Thông báo
            </span>
          </li>
        </ul>
      </div>
      <div className="px-4 py-3 border-b">
        <h2 className="font-base text-gray-400 text-[15px]">KHUYẾN MÃI HOT</h2>
        <ul className="leading-9 mt-1">
          <li className="text-[14.5px]">Tiki Deal</li>
          <li className="text-[14.5px]">Phiếu quà tặng</li>
          <li className="text-[14.5px]">Ưu đãi cho chủ thẻ ngân hàng</li>
        </ul>
      </div>
      <div className="px-4 py-3">
        <h2 className="font-base text-gray-400 text-[15px]">HỖ TRỢ</h2>
        <ul className="leading-9 mt-1">
          <li className="text-[14.5px]">
            HOTLINE: <b className="text-green-500 font-medium">1900 - 6035</b>{" "}
            (1000đ/phút)
          </li>
          <li className="text-[14.5px] flex justify-between items-center">
            <div>Hỗ trợ khách hàng</div>
            <FaChevronRight className="text-xs" />
          </li>
        </ul>
      </div>
    </Box>
  );

  // Dùng để gọi API khi component được render
  useEffect(() => {
    fetchData();
  }, []); // [] là mảng dependency, nếu có giá trị thì sẽ gọi API khi giá trị thay đổi

  // Chờ đợi dữ liệu
  if (!data) {
    return <Loading />;
  }

  return (
    <>
      {!isMobile && <Navbar />}
      {isMobile && (
        <>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Box className="flex justify-between items-center gap-4 p-3 bg-[#1BA7FE]">
            <div>
              <Link href="/">
                <FaAngleLeft className="text-white text-2xl" />
              </Link>
            </div>
            <div>
              <FaBars
                className="text-white text-xl"
                onClick={toggleDrawer(true)}
              />
            </div>
            <div className="relative w-full">
              <IoSearch className="absolute left-3 top-2 text-gray-500 text-xl" />
              <input
                className="ps-10 pe-3 py-2 w-full rounded-md placeholder:font-bases"
                type="text"
                placeholder="Bạn đang tìm kiếm gì"
              />
            </div>
            <div>
              <LuShoppingCart className="text-white text-3xl" />
            </div>
          </Box>
        </>
      )}
      <Box className="bg-[#F5F5FA] lg:py-5 lg:pb-0">
        <div className="container mx-auto">
          <Stack spacing={2} className="ps-2 sm:hidden mb-8">
            <Breadcrumbs separator={<FaAngleRight />} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Grid container spacing={2} className="mt-3">
            <Grid
              item
              xs={2}
              style={{ paddingTop: "0px" }}
              className={`${data.length === 1 && "hidden"} sm:hidden`}
            >
              <h1 className="py-3 px-4 rounded-tl-lg rounded-tr-lg shadow-lg w-full bg-white font-bold">
                Khám phá theo danh mục
              </h1>
              <Box>
                {(data || []).map(
                  (item: any, index: number) =>
                    index > 0 && (
                      <Box className="" key={index}>
                        <Accordion
                          expanded={expanded === "panel" + index}
                          onChange={(
                            event: React.SyntheticEvent,
                            newExpanded: boolean
                          ) => {
                            setExpanded(newExpanded ? "panel" + index : false);
                          }}
                        >
                          <AccordionSummary
                            expandIcon={item.category_children.length > 0 ? <FaChevronDown /> : ""}
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                          >
                            <Typography>{item.name}</Typography>
                          </AccordionSummary>
                          <AccordionDetails className="">
                            {item.category_children.map(
                              (child: any, index: number) => (
                                <Box
                                  key={index}
                                  className="p-2 text-md hover:underline hover:text-blue-500 cursor-pointer"
                                >
                                  {child.name}
                                </Box>
                              )
                            )}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    )
                )}
              </Box>
              <Box className="qc_category relative bg-white mt-4 rounded-lg">
                <Image
                  src={
                    "https://salt.tikicdn.com/cache/280x280/ts/product/62/03/94/14bfb494af5b1c64eb1f707f25726346.png"
                  }
                  alt=""
                  className="mx-auto"
                  width={200}
                  height={200}
                />
                <h2 className="text-center mt-4 mb-2 font-medium text-lg">
                  Combe 10 Cuốn: Chuyện <br /> Xóm Gà{" "}
                </h2>
                <div>
                  <div className="flex gap-2 justify-center items-center mb-2">
                    <span>4.9</span>
                    <IoIosStar className="text-yellow-300" />
                    <span className="inline-block border-l ps-2 text-gray-400">
                      Đã bán 1531
                    </span>
                  </div>
                  <div className="text-rose-500 text-center font-medium">
                    <span>Giá: 100.000đ</span>
                    <span className="ms-2 text-xs">-20%</span>
                  </div>
                  <div className=" text-center pb-4 pt-2 mx">
                    <button className="w-6/12 -auto bg-blue-500 text-white py-1 px-3 rounded-lg">
                      Xem ngay
                    </button>
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-xs bg-gray-200 font-light rounded-sm p-1">
                  Tài trợ
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={isMobile ? 12 : data.length === 1 ? 12 : 10}
              className="sss pt-0"
              style={{ paddingTop: "0px" }}
            >
              <CategoryLayout title={data[0].name} data={data} />
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box className="bg-[#F5F5FA] pb-8 sm:hidden">
        <div className="w-11/12 mx-auto bg-white p-5 shadow-lg rounded-lg">
          <h1 className="text-xl">Thông Tin Danh Mục</h1>
          <div className="my-3">
            Nhà sách là một trong những địa điểm đã gắn liền với tuổi thơ của
            nhiều người. Nơi đây không chỉ cung cấp cho chúng ta một nguồn kho
            tàng tri thức quý giá mà còn bày bán rất nhiều món{" "}
            <span className="text-blue-500">quà lưu niệm</span> đáng yêu cùng vô
            vàn món <span className="text-blue-500">văn phòng phẩm</span> khác.
            Cùng Tiki tìm hiểu thêm những điều thú vị tại nhà sách qua bài viết
            dưới đây nhé.
          </div>
          <h1 className="text-2xl font-medium mb-3">
            Nhà sách - Thế giới tri thức và tinh hoa nhân loại
          </h1>
          <div>
            Người ta thường nói “sách là một kho tàng vô giá” vì nó chứa đựng
            nhiều kiến thức bổ ích của nhân loại. Chính vì thế mà nhà sách, nơi
            được trưng bày hàng nghìn cuốn sách có thể nói là một thế giới tri
            thức và hội tụ đủ muôn vàng tinh hoa của các nền văn hóa khác nhau.
            <br />
            <br />
            Một vài địa điểm bán sách nổi tiếng và đã xuất hiện từ lâu như nhà
            sách Fahasa, nhà sách Nhã Nam chắc hẳn là nơi đã lưu giữ kỷ niệm
            tuổi thơ của nhiều người. Những nhà sách này không chỉ bán mỗi sách
            mà còn “bán” cả niềm vui, sự hạnh phúc cho nhiều em nhỏ ở tuổi cắp
            sách đến trường.
            <br />
            <br />
            Nơi đây có nhiều loại sách khác nhau với đa dạng lĩnh vực từ{" "}
            <span className="text-blue-500">kinh tế</span> , văn hóa, nghệ
            thuật,...cho đến triết học hay{" "}
            <span className="text-blue-500">công nghệ</span>. Thêm vào đó, những
            loại sách bao gồm các kiến thức về ẩm thực,{" "}
            <span className="text-blue-500">gia đình</span> cũng có mặt tại đây.
            Do đó, nhà sách không chỉ đón tiếp mỗi học sinh, sinh viên mà còn là
            thiên đường dành cho những ai ham học hỏi và cần tìm đến kiến thức.
            <br />
            <br />
            Tham khảo thêm về:{" "}
            <span className="text-blue-500">
              sách, truyện One Piece, Truyện One Punch Man, Tokyo Revengers
              manga, Kính Vạn Hoa Chết Chóc
            </span>
          </div>
        </div>
      </Box>
      <div className="bg-white mt-5">
        <div className="w-9/12 mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ViewCategory;
