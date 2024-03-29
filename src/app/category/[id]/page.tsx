"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { FaAngleRight } from "react-icons/fa6";
import Grid from "@mui/material/Grid";
import useWindowSize from "@/hooks/useWindowSize";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaChevronDown } from "react-icons/fa";
import Fade from "@mui/material/Fade";
import CategoryLayout from "@/components/category/CategoryLayout";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import Drawer from "@mui/material/Drawer";
import { FaChevronRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import Footer from "@/components/Footer";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function CategoryChildren() {
  // Dùng để mở rộng hoặc thu gọn danh mục
  const [expanded, setExpanded] = useState(false);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return [
    {
      parent: "English Books",
      children: [
        "Business & Economics",
        "Children's Books",
        "Computers & Technology",
        "Cookbooks, Food & Wine",
        "Crafts, Hobbies & Home",
        "Education & Teaching",
        "Engineering & Transportation",
        "Health, Fitness & Dieting",
        "History",
        "Humor & Entertainment",
        "Law",
        "Literature & Fiction",
        "Medical Books",
        "Mystery, Thriller & Suspense",
        "Parenting & Relationships",
        "Politics & Social Sciences",
        "Reference",
        "Religion & Spirituality",
        "Romance",
        "Science & Math",
        "Science Fiction & Fantasy",
        "Self-Help",
        "Sports & Outdoors",
        "Teen & Young Adult",
        "Test Preparation",
        "Travel",
      ],
    },
    {
      parent: "Sách tiếng Viết",
      children: [
        "Sách văn học",
        "Sách kinh tế",
        "Sách thiếu nhi",
        "Sách ngoại ngữ",
        "Sách giáo trình",
        "Sách chuyên ngành",
        "Sách tham khảo",
        "Sách tự nhiên",
        "Sách kỹ năng sống",
        "Sách tâm lý",
        "Sách học ngoại ngữ",
        "Sách học nghề",
        "Sách học trung học",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
        "Sách học phổ thông",
        "Sách học trung học cơ sở",
        "Sách học trung học phổ thông",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
        "Sách học phổ thông",
        "Sách học trung học cơ sở",
        "Sách học trung học phổ thông",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
        "Sách học phổ thông",
        "Sách học trung học cơ sở",
        "Sách học trung học phổ thông",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
        "Sách học phổ thông",
        "Sách học trung học cơ sở",
        "Sách học trung học phổ thông",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
        "Sách học phổ thông",
        "Sách học trung học cơ sở",
        "Sách học trung học phổ thông",
        "Sách học đại học",
        "Sách học cao đẳng",
        "Sách học tiểu học",
        "Sách học mầm non",
      ],
    },
    {
      parent: "Văn phòng phẩm",
      children: [
        "Dụng Cụ Văn Phòng",
        "Giấy In",
        "Bút Viết",
        "Bìa và Bìa Cứng",
        "Sổ Tay",
        "Sổ Lịch",
        "Sổ Học Sinh",
        "Sổ Tài Khoản",
        "Sổ Hội Nghị",
      ],
    },
    {
      parent: "Quà lưu niệm",
      children: [
        "Thú Nhồi Bông",
        "Gấu Bông",
        "Búp Bê",
        "Móc Khóa",
        "Túi Xách",
        "Balo",
        "Ví",
        "Bình Giữ Nhiệt",
        "Ly Sứ",
        "Đồng Hồ",
        "Trang Sức",
        "Quà Tặng",
      ],
    },
  ].map((item, index) => (
    <Box key={index}>
      {index === 0 && (
        <Accordion
          expanded={true}
          onChange={handleExpansion}
          // slots={{ transition: Fade as AccordionSlots["transition"] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls={`id="panel${index}-content"`}
            id={`id="panel${index}-header"`}
          >
            <Typography>{item.parent}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.children.map((child, index) => (
              <Box
                key={index}
                className="p-2 text-md hover:underline hover:text-blue-500 cursor-pointer"
              >
                {child}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
      {index > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls={`id="panel${index}-content"`}
            id={`id="panel${index}-header"`}
          >
            <Typography>{item.parent}</Typography>
          </AccordionSummary>
          <AccordionDetails className="">
            {item.children.map((child, index) => (
              <Box
                key={index}
                className="p-2 text-md hover:underline hover:text-blue-500 cursor-pointer"
              >
                {child}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  ));
}

function ViewCategory() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Trang chủ
    </Link>,
    <Typography key="3" color="text.primary">
      Nhà sách Tiki
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
          <Stack spacing={2} className="ps-2 sm:hidden">
            <Breadcrumbs separator={<FaAngleRight />} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Grid container spacing={2} className="mt-3">
            <Grid
              item
              xs={2}
              className="sm:hidden"
              style={{ paddingTop: "0px" }}
            >
              <h1 className="py-3 px-4 rounded-tl-lg rounded-tr-lg shadow-lg w-full bg-white font-bold">
                Khám phá theo danh mục
              </h1>
              <CategoryChildren />
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
              xs={isMobile ? 12 : 10}
              className="sss pt-0"
              style={{ paddingTop: "0px" }}
            >
              <CategoryLayout
                title=""
                product_price={[]}
                product_new={[]}
                product_tikibest={[]}
                product_genuine={[]}
                product_list={[]}
              />
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
            tàng tri thức quý giá mà còn bày bán rất nhiều món <span className="text-blue-500">quà lưu niệm</span> đáng
            yêu cùng vô vàn món <span className="text-blue-500">văn phòng phẩm</span> khác. Cùng Tiki tìm hiểu thêm
            những điều thú vị tại nhà sách qua bài viết dưới đây nhé.
          </div>
          <h1 className="text-2xl font-medium mb-3">Nhà sách - Thế giới tri thức và tinh hoa nhân loại</h1>
          <div>
            Người ta thường nói “sách là một kho tàng vô giá” vì nó chứa đựng
            nhiều kiến thức bổ ích của nhân loại. Chính vì thế mà nhà sách, nơi
            được trưng bày hàng nghìn cuốn sách có thể nói là một thế giới tri
            thức và hội tụ đủ muôn vàng tinh hoa của các nền văn hóa khác nhau.
            <br /><br />
            Một vài địa điểm bán sách nổi tiếng và đã xuất hiện từ lâu như nhà
            sách Fahasa, nhà sách Nhã Nam chắc hẳn là nơi đã lưu giữ kỷ niệm
            tuổi thơ của nhiều người. Những nhà sách này không chỉ bán mỗi sách
            mà còn “bán” cả niềm vui, sự hạnh phúc cho nhiều em nhỏ ở tuổi cắp
            sách đến trường.
            <br /><br />
            Nơi đây có nhiều loại sách khác nhau với đa dạng lĩnh vực từ <span className="text-blue-500">kinh tế</span> , văn hóa, nghệ thuật,...cho đến triết học hay <span className="text-blue-500">công nghệ</span>. Thêm vào
            đó, những loại sách bao gồm các kiến thức về ẩm thực, <span className="text-blue-500">gia đình</span> cũng
            có mặt tại đây. Do đó, nhà sách không chỉ đón tiếp mỗi học sinh,
            sinh viên mà còn là thiên đường dành cho những ai ham học hỏi và cần
            tìm đến kiến thức. 
            <br /><br />
            Tham khảo thêm về: <span className="text-blue-500">sách, truyện One Piece, Truyện
            One Punch Man, Tokyo Revengers manga, Kính Vạn Hoa Chết Chóc</span>
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
