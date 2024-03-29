"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import parse from "html-react-parser";
import ProductCard from "@/components/product/ProductCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import products from "../../../../public/products.json";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { IoIosAdd } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuStore } from "react-icons/lu";
import Link from "next/link";
import Loading from "@/app/loading";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaCheckCircle } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ProductTikiBest from "@/components/product/ProductTikiBest";
import ProductCanYouLike from "@/components/product/ProductCanYouLike";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSuggest from "@/components/product/ProductSuggest";

const infor_detail = [
  { name: "Thương hiệu", value: "NESCAFÉ" },
  { name: "Xuất xứ thương hiệu", value: "Thụy Sỹ" },
  { name: "Kích thước", value: "35 x 25.5 x 29 cm" },
  { name: "Hạn sử dụng", value: "15 tháng kể từ ngày sản xuất" },
  {
    name: "Hướng dẫn bảo quản",
    value: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp",
  },
  { name: "Sản phẩm có được bảo hành không?", value: "Không" },
  {
    name: "Lưu ý",
    value:
      "Chương trình quà tặng diễn ra đến 31.1.2024 Số lượng quà tặng có giới hạn. Chương trình có thể kết thúc sớm hơn dự kiến",
  },
  { name: "Xuất xứ (Made in)", value: "Việt Nam" },
  { name: "Trọng lượng sản phẩm", value: "0.876kg" },
  {
    name: "Thành phần",
    value:
      "Đường, bột kem pha cà phê có chứa sữa - contain milk, cà phê hòa tan Robusta và Arabica (11,7%), maltodextrin, hương liệu tổng hợp, muối i-ốt, chất điều chỉnh độ acid 500(ii). (*) Chỉ tiêu chất lượng chủ yếu: Hàm lượng cafein tối thiểu 0,28%",
  },
];

const product_des = `
    <h2 className="font-medium">BỘ SẢN PHẨM BAO GỒM</h2>

    <li>02 Cà phê hòa tan Nescafé 3in1 vị nguyên bản - công thức cải tiến (Bịch 46 gói x 16g)</li>

    <h2 className="font-medium">THÔNG TIN CHI TIẾT</h2>

    Giới thiệu Nescafé 3in1 công thức cải tiến mới - Thơm hơn, đậm đà hơn từ Robusta và Arabica. Cà phê sữa hòa tan thế hệ mới với công thức vàng kết hợp giữa hạt cà phê Robusta vị đậm đà và hạt Arabica thơm tinh tế, hòa cùng vị sữa thơm béo cho bạn trải nghiệm cà phê ngon trọn vẹn.

    <h2 className="font-medium">ĐẶC ĐIỂM NỔI BẬT</h2>

    - Nescafé 3in1 vị nguyên bản - Vị cà phê quốc dân quen thuộc, hài hòa, cân bằng giữa vị sữa và vị cà phê.
    - Nay thêm hương thơm nồng đặc trưng đến từ hạt Arabica, cho ly cà phê thêm đậm hương, trọn vị, cho khoảnh khắc tận hưởng thêm đong đầy

    <h2 className="font-medium">THÀNH PHẦN</h2>

    Đường, bột kem pha cà phê có chứa sữa - contain milk, cà phê hòa tan Robusta và Arabica (11,7%), maltodextrin, hương liệu tổng hợp, muối i-ốt, chất điều chỉnh độ acid 500(ii).

    (*) Chỉ tiêu chất lượng chủ yếu: Hàm lượng cafein tối thiểu 0,28%

    <h2 className="font-medium">LƯU Ý</h2>

    - Không dùng cho người dị ứng với các thành phần của sản phẩm.

    HƯỚNG DẪN SỬ DỤNG

    - Khi uống nóng, hòa một gói Nescafé 3in1 với 70ml nước nóng và khuấy đều.
    - Khi uống lạnh, chỉ cần pha hai gói với 70ml nước nóng và thêm vào 100g đá, từ từ khuấy đá với cà phê để đá tan đều

    <h2 className="font-medium">CÁCH BẢO QUẢN</h2>

    - Bảo quản sản phẩm nơi khô ráo và thoáng mát, tránh ánh nắng trực tiếp.

    Xuất xứ: Thụy Sĩ
    Nơi sản xuất: Việt Nam
    Ngày sản xuất: In trên bao bì sản phẩm
    Hạn sử dụng: 15 tháng kể từ ngày sản xuất

    <h2 className="font-medium">THÔNG TIN THƯƠNG HIỆU</h2>

    Nescafé là một trong những thương hiệu cà phê hàng đầu trên toàn thế giới với lịch sử phát triên lâu đời. Nescafé luôn nhận được sự tín nhiệm và tin yêu của người tiêu dùng trên toàn thế giới nhờ không ngừng sáng tạo và mang đến những ly cà phê thơm ngon đa hương vị. Các sản phẩm của Nescafé được đóng hộp và đóng gói lẻ theo dây, đảm bảo cung cấp những ly cà phê chất lượng và hợp túi tiền cho mỗi gia đình người Việt.

    Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
  `;

const ProductCharacter = () => {
  return (
    <div className="flex justify-between items-center p-3 sm:px-0 sm:mt-3 border-t">
      <div className="flex items-center gap-2">
        <Image
          src={
            "	https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
          }
          alt=""
          width={25}
          height={25}
        />
        <span className="text-sm font-base">
          <span className="text-gray-500 ">Xem thêm</span> Ưu điểm & lưu ý của
          sản phẩm
        </span>
      </div>
      <FaAngleRight className="text-right text-gray-400" />
    </div>
  );
};

const ProductSafe = () => {
  return [
    {
      image:
        "https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png",
      name: "Được mở hộp kiểm tra khi nhận hàng",
    },
    {
      image:
        "https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png",
      name: "Được hoàn tiền 111% nếu là hàng giả.",
    },
    {
      image:
        "https://salt.tikicdn.com/ts/upload/85/4c/e0/22f9cc1095dc1d7d7fa4f2f767bb6620.png",
      name: "Đổi trả miễn phí tại nhà trong 30 ngày nếu sản phẩm lỗi.",
    },
  ].map((item, index) => (
    <div>
      <div
        className={`flex items-center gap-2 ${
          index !== 2 && "border-b pb-2 mb-3"
        }`}
        key={index}
      >
        <Image src={item.image} alt="" width={20} height={20} />
        <div className="text-md sm:text-sm font-medium">{item.name}</div>
      </div>
    </div>
  ));
};

function ProductDetail() {
  const size = useWindowSize();
  const isMoblie: boolean = size.width < 768;
  const parse = require("html-react-parser").default;
  const [isopen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  useEffect(() => {
    setLoading(true);
  }, [isMoblie]);

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      {!isMoblie && <Navbar />}
      <Box sx={{ flexGrow: 1 }} className="py-5 bg-[#F5F5FA] ">
        <Box className="container mx-auto">
          <Grid container spacing={3}>
            <Grid item xs={isMoblie ? 12 : 9}>
              {/* Thông tin sản phẩm */}
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={isMoblie ? 12 : 4}
                  style={{ paddingTop: isMoblie ? "0px" : "24px" }}
                >
                  <Item className=" bg-white rounded-md relative sm:pt-0">
                    <Box className="lg:hidden flex justify-between px-5 pt-5">
                      <FaAngleLeft className="text-white bg-gray-400 rounded-full text-lg w-9 h-9 p-1" />
                      <div className="flex gap-3">
                        <FiShoppingCart className="text-white bg-gray-400 rounded-full text-lg w-9 h-9 p-1" />
                        <HiOutlineDotsHorizontal className="text-white bg-gray-400 rounded-full text-lg w-9 h-9 p-1" />
                      </div>
                    </Box>
                    <div className="slider-container lg:p-5 lg:pb-4">
                      <Carousel
                        type={"slider"}
                        dots={isMoblie ? false : true}
                        toshow={1}
                        toScroll={1}
                        pagingImage={true}
                        list={[
                          "https://salt.tikicdn.com/cache/750x750/ts/product/1f/aa/13/c1c9134a703a904a05d176723b2e7d11.jpg",
                          "https://salt.tikicdn.com/cache/750x750/ts/product/23/de/2f/1fad9fc466db7b6a9161e9b86bd6cc64.jpg",
                          "https://salt.tikicdn.com/cache/750x750/ts/product/d8/fe/c8/d0d2ee9c2f084652aa3dd63e2945930c.jpg",
                          "https://salt.tikicdn.com/cache/750x750/ts/product/38/38/89/162988f482a4bb42a8610eb8517a1d10.jpg",
                        ]}
                      />
                    </div>
                    {!isMoblie && ProductCharacter()}
                    {isMoblie && <Box className="a absolute bottom-5 left-5 bg-gray-400 py-1 px-3 text-white rounded-xl">1/4</Box>}
                  </Item>
                </Grid>
                <Grid item xs={isMoblie ? 12 : 8}>
                  <Item className="bg-white p-5 sm:pb-0 mb-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src={
                          "https://salt.tikicdn.com/ts/upload/e3/83/25/63d59067aaee1d5b22d86fb528208151.png"
                        }
                        alt=""
                        className="sm:hidden"
                        width={80}
                        height={80}
                      />
                      <Image
                        src={
                          "https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                        }
                        alt=""
                        width={isMoblie ? 100 : 80}
                        height={isMoblie ? 100 : 80}
                      />
                      <div className="flex">
                        Thương hiệu:{" "}
                        <span className="text-blue-500 inline-block ms-2 cursor-pointer">
                          NESCAFÉ
                        </span>
                      </div>
                    </div>
                    <h1 className="lg:text-2xl lg:font-medium">
                      [Tặng bình giữ nhiệt 1.5L]Combo 2 bịch cà phê hòa tan
                      Nescafé 3in1 vị nguyên bản - công thức cải tiến (Bịch 46
                      gói x 16g)
                    </h1>
                    <div className="flex items-center my-1 text-md sm:text-sm">
                      <span>5.0</span>
                      <div className="flex items-center ms-1 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-gray-500 mr-3">(34)</span>
                      <span className="inline-block text-gray-500 border-l pl-3">
                        Đã bán 4336
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="text-3xl sm:text-2xl font-medium">
                        246.000<sup className="underline">đ</sup>{" "}
                      </div>
                      <span className="inline-block bg-gray-200 font-light p-1 rounded-lg ml-2 sm:ml-1 text-xs sm:text-[10px]">
                        -20%
                      </span>
                    </div>
                    {isMoblie && ProductCharacter()}
                  </Item>
                  <Item className="bg-white p-5 lg:hidden mb-4 rounded-lg">
                    <div className="flex gap-1 flex-wrap justify-between items-center">
                      <button className="w-[49%] py-2 text-center border rounded-lg border-blue-400 text-blue-400 my-3">
                        Thêm vào giỏ
                      </button>
                      <button className="w-[49%] py-2 text-center border rounded-lg bg-rose-500 text-white">
                        Mua ngay
                      </button>
                      <button className="w-full py-2 text-center border rounded-lg border-blue-400 text-blue-400">
                        Mua trước trả sau
                      </button>
                    </div>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg sm:text-md">
                      Thông tin vận chuyển
                    </h1>
                    <Box className="w-full text-md sm:text-sm">
                      <div className="flex justify-between items-center my-2 lg:mb-5">
                        <p className="">
                          Giao đến H. Thường Tín, TT. Thường Tín, Hà Nội
                        </p>
                        <button
                          type="button"
                          className="text-blue-500 font-medium"
                        >
                          Đổi
                        </button>
                      </div>
                      <div className="sm:border-t  sm:pt-3">
                        <div className="flex gap-2 items-center">
                          <Image
                            alt={""}
                            width={35}
                            height={35}
                            src="https://salt.tikicdn.com/ts/upload/14/11/46/13b71dceb805fb57ce37d57585bc3762.png"
                          />
                          <span className="font-medium">Giao Thứ Hai</span>
                        </div>
                        <div className="sm:text-[14px] text-[15.5px] font-light">
                          Trước 19h, 01/04: 13.000
                          <sup className="underline">đ</sup>{" "}
                          <span className="line-through text-sm text-gray-500">
                            23.000 <sup className="underline">đ</sup>
                          </span>
                        </div>
                      </div>
                    </Box>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg lg:hidden mb-5`}>
                    <Box className="flex items-center justify-between">
                      <h1 className="font-medium text-md">An tâm mua sắm</h1>
                      <FaAngleRight className="text-gray-500 text-lg" />
                    </Box>
                    <Box className="w-full mt-5">{ProductSafe()}</Box>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg sm:text-md">
                      Dịch vụ bổ sung
                    </h1>
                    <Box className="w-full mt-3">
                      {[
                        {
                          name: "Ưu đãi đến 600k với thẻ TikiCard",
                          image:
                            "https://salt.tikicdn.com/ts/upload/73/4d/f7/f86e767bffc14aa3d6abed348630100b.png",
                        },
                        {
                          name: "Mua trước trả sau",
                          image:
                            "	https://salt.tikicdn.com/ts/upload/2a/27/6a/7bbba1f6c93a1a42a3c314e7b5825f4c.png",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between ${
                            index === 0 && "border-b mb-3 pb-3"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={item.image}
                              className="rounded-lg"
                              alt=""
                              width={40}
                              height={40}
                            />
                            <div className="text-sm font-medium">
                              {item.name}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="text-blue-500 text-md"
                          >
                            Đăng ký
                          </button>
                        </div>
                      ))}
                    </Box>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg">Sản phẩm tương tự</h1>
                    <Box className="w-full mt-3">
                      <ProductCanYouLike toshow={4}/>
                    </Box>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg">Tiki best</h1>
                    <Box className="w-full mt-2">
                      <ProductTikiBest toshow={4} />
                    </Box>
                  </Item>

                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg sm:hidden">
                      Thông tin nhà bán
                    </h1>
                    <Box className="flex items-center gap-2 lg:gap-5 lg:my-3">
                      <div className="">
                        <Image
                          src={
                            "	https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg"
                          }
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <div className="lg:flex items-center gap-2">
                          <h3 className="font-medium sm:text-md">
                            Tiki Trading
                          </h3>
                          <Image
                            src={
                              "https://salt.tikicdn.com/cache/w100/ts/upload/6b/25/fb/c288b5bcee51f35f2df0a5f5f03de2e1.png"
                            }
                            alt=""
                            width={70}
                            height={70}
                          />
                          <div className="sm:hidden flex gap-1 items-center border rounded-md py-1 px-2 text-[12px] cursor-pointer">
                            <IoIosAdd className="text-xl" />
                            Theo Dõi
                          </div>
                          <div className="sm:hidden flex gap-1 items-center border rounded-md py-1 px-4 text-[12px] cursor-pointer">
                            <IoChatbubbleOutline className="text-[16px]" />
                            Chat
                          </div>
                        </div>
                        <div className="sm:hidden flex items-center gap-1 text-sm mt-2">
                          4.7 <FaStar className="text-yellow-300" />{" "}
                          <span className="">(5.4tr+ đánh giá)</span>
                          <div className="border-l pl-2 ml-2">
                            <b className="font-medium">500.1k+</b> Theo dõi
                          </div>
                        </div>
                      </div>
                    </Box>
                    {isMoblie && (
                      <>
                        <Box className="mb-3">
                          <div className=" flex items-center justify-center bg-gray-100 gap-16 text-md mt-2 rounded-lg">
                            <div className="p-2 pr-12">
                              <div className="flex justify-center items-center">
                                <FaStar className="text-yellow-400 mr-2 text-md mb-1" />{" "}
                                <b>4.7</b>/5
                              </div>
                              <span className="text-sm text-gray-500">
                                (5.4tr+ đánh giá)
                              </span>
                            </div>
                            <div className="">
                              <div className="flex items-center gap-1">
                                <AiOutlineUserAdd />
                                <b className="font-medium">500.1k+</b>{" "}
                              </div>
                              <span className="text-sm text-gray-500">
                                Theo dõi
                              </span>
                            </div>
                          </div>
                        </Box>
                        <Box className="flex gap-2">
                          <button className="flex items-center gap-2 justify-center text-sm border border-gray-900 rounded-md py-2 w-6/12">
                            <LuStore className="text-xl" />
                            Xem cửa hàng
                          </button>
                          <button className="flex items-center gap-2 justify-center text-sm border border-gray-900 rounded-md py-2 w-6/12">
                            <IoChatbubbleOutline className="text-xl" />
                            Chat
                          </button>
                        </Box>
                      </>
                    )}
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <Box className="flex items-center justify-between">
                      <h1 className="font-medium text-lg lg:text-md">
                        Thông tin bảo hàng
                      </h1>
                      <FaAngleRight className="lg:hidden text-gray-400 text-xl" />
                    </Box>
                    <div className="mt-2 text-md sm:hidden">
                      Hướng dẫn bảo hành:{" "}
                      <Link href={""} className="text-blue-500 font-medium">
                        Xem chi tiết
                      </Link>
                    </div>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg sm:hidden mb-5`}>
                    <Box className="flex items-center justify-between">
                      <h1 className="font-medium text-lg">An tâm mua sắm</h1>
                      <FaAngleRight className="text-gray-500 text-xl" />
                    </Box>
                    <Box className="w-full mt-2">
                      {!isMoblie && ProductSafe()}
                    </Box>
                  </Item>
                  <Item className={`bg-white p-5 rounded-lg mb-5`}>
                    <h1 className="font-medium text-lg sm:text-md">
                      Thông tin chi tiết
                    </h1>
                    <Box className="w-full mt-3 sm:h-32 sm:overflow-hidden">
                      {infor_detail.map((item, index) => (
                        <div
                          className={`flex items-center pb-3 ${
                            index !== 9 && "border-b mb-3"
                          }`}
                          key={index}
                        >
                          <div className="w-7/12 text-gray-500">
                            {item.name}
                          </div>
                          <div className="w-5/12">{item.value}</div>
                        </div>
                      ))}
                    </Box>
                  </Item>
                  <Item
                    className={` bg-white p-5 rounded-lg ${
                      isMoblie && "pb-0"
                    } mb-5`}
                  >
                    <h1 className="font-medium text-lg sm:text:md">
                      Mô tả sản phẩm
                    </h1>
                    <Box
                      className={`relative w-full lg:mt-5 ${
                        !isopen && "max-h-60 overflow-hidden"
                      }`}
                    >
                      {product_des.split("\n").map((item, index) => (
                        <p key={index} className="my-3 text-[14px]">
                          {parse(item)}
                        </p>
                      ))}
                      {!isopen && (
                        <div
                          className="absolute bottom-0 left-0 w-full h-[15rem]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))",
                          }}
                        ></div>
                      )}
                    </Box>
                    <Box className="w-full text-center">
                      <button
                        className="p-2 mx-auto text-blue-500 text-sm"
                        onClick={() => setIsOpen(!isopen)}
                      >
                        {isopen ? "Thu gọn" : "Xem thêm"}
                      </button>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
              {/* Đánh giá */}
              <Box className="bg-white p-5">
                <Box className="flex gap-5 rounded-lg lg:mb-5 border-b pb-5 sm:pb-3">
                  <Box className="w-4/12 sm:w-full">
                    <Box className="sm:flex sm:justify-between sm:items-center">
                      <h1 className="text-md font-medium sm:mb-3">
                        Khách hàng đánh giá
                      </h1>
                      {isMoblie && <FaAngleRight className="text-gray-600" />}
                    </Box>
                    <p className="my-3 text-sm sm:hidden">Tổng quan</p>
                    <div className="sm:flex gap-2 sm:items-center">
                      <div className="flex items-center">
                        <h1 className="text-3xl mr-2 font-medium">4.9</h1>
                        <div className="flex gap-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-400 text-xl"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-500 font-light text-sm">
                        (34 đánh giá)
                      </div>
                    </div>
                    <Box className="text-sm sm:hidden">
                      {["32", "2", "0", "0", "0"].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 mt-4"
                        >
                          <div className="flex gap-1">
                            <Rating
                              name="text-feedback"
                              value={
                                index === 0
                                  ? 5
                                  : index === 1
                                  ? 4
                                  : index === 2
                                  ? 3
                                  : index === 3
                                  ? 2
                                  : 1
                              }
                              readOnly
                              precision={0.5}
                              size="small"
                              icon={
                                <FaStar
                                  fontSize="inherit"
                                  className="text-yellow-400 text-sm "
                                />
                              }
                              emptyIcon={
                                <FaStar
                                  style={{ opacity: 0.55 }}
                                  className="text-sm"
                                  fontSize="inherit"
                                />
                              }
                            />
                          </div>
                          <div className="w-5/12">
                            <BorderLinearProgress
                              variant="determinate"
                              value={Number(item)}
                              sx={{ with: "100%" }}
                            />
                          </div>
                          <div>{item}</div>
                        </div>
                      ))}
                    </Box>
                  </Box>
                  <Box className="w-8/12 border-l px-5 sm:hidden">
                    <h2 className="font-medium">Tất cả hình ảnh (8)</h2>
                    <Box className="flex gap-4 mt-4">
                      {[
                        "https://salt.tikicdn.com/cache/w200/ts/review/13/54/93/92f5093c7ddcdec11536c7355648025d.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/d6/fc/fa/040c5da89c9f3ae53166f0e2c2f670f7.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/9f/2f/e3/8eaa79a1c330d129ba114c7de5b5103e.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/31/57/68/7fe5559ae980e6a449e5d768f466cbe5.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/dd/5e/8b/537102d896812984ae44316ca4e12e40.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/c2/ee/e7/1250f850fc4e573211112e9346e6ae13.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/a2/27/bf/555f89fa70ecca24c0ed1c426e9f099a.jpg",
                        "https://salt.tikicdn.com/cache/w200/ts/review/6d/89/0b/abeeab3ea03ee009f3e31488de32c1ab.jpg",
                      ].map((item, index) => {
                        return (
                          <img
                            src={item}
                            alt=""
                            key={index}
                            className="rounded-lg w-20 h-20"
                          />
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
                <Box className="pb-5 border-b sm:hidden">
                  <h1 className="font-medium mb-1">Lọc theo</h1>
                  <Box className="flex gap-2">
                    {[
                      "Mới nhất",
                      "Có hình ảnh",
                      "Đã mua hàng",
                      "5 sao",
                      "4 sao",
                      "3 sao",
                      "2 sao",
                      "1 sao",
                    ].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border rounded-full py-1 px-3 font-light text-md"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </Box>
                </Box>
                {[...Array(5)].map((_, index) => (
                  <Box
                    key={index}
                    className={`py-5 sm:py-3 flex justify-between ${
                      index !== 4 && "border-b"
                    }`}
                  >
                    <div className="w-3/12 sm:hidden">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#C2E1FF] p-3 rounded-full">AT</div>
                        <div>
                          <h3 className="mb-2 font-medium">Huỳnh Anh Tân</h3>
                          <p className="text-gray-400 text-sm">
                            Đã tham gia 4 năm
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4 mb-3 border-b pb-3 text-sm">
                        <div className="flex gap-2 text-gray-500">
                          <Image
                            src={
                              "https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                            }
                            alt=""
                            width={20}
                            height={20}
                          />
                          Đã viết
                        </div>
                        <div>325 Đánh giá</div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex gap-2 text-gray-500">
                          <Image
                            src={
                              "https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                            }
                            alt=""
                            width={20}
                            height={20}
                          />
                          Đã nhận
                        </div>
                        <div>28 Lượt cảm ơn</div>
                      </div>
                    </div>
                    <div className="w-9/12 lg:pl-5 sm:w-full">
                      <div className="flex gap-4 sm:gap-2 items-center">
                        <Rating
                          name="text-feedback"
                          value={5}
                          readOnly
                          precision={0.5}
                          size="small"
                          icon={
                            <FaStar
                              fontSize="inherit"
                              className="text-yellow-400 text-md"
                            />
                          }
                        />
                        <div className="font-medium text-md sm:text:sm lg:mb-1">
                          Cực kì hài lòng
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-[15px] mt-1 mb-4 sm:hidden">
                        <FaCheckCircle className="text-lg" />
                        <div>Đã mua hàng</div>
                      </div>
                      <div className="sm:mt-1">
                        <div className="text-md sm:text-sm">
                          Đáng mua và giá cả hợp lý
                        </div>
                        <Box className="flex gap-4 mt-2">
                          {[
                            "https://salt.tikicdn.com/cache/w200/ts/review/13/54/93/92f5093c7ddcdec11536c7355648025d.jpg",
                            "https://salt.tikicdn.com/cache/w200/ts/review/d6/fc/fa/040c5da89c9f3ae53166f0e2c2f670f7.jpg",
                            "https://salt.tikicdn.com/cache/w200/ts/review/9f/2f/e3/8eaa79a1c330d129ba114c7de5b5103e.jpg",
                          ].map((item, index) => {
                            return (
                              <img
                                src={item}
                                alt=""
                                key={index}
                                className="rounded-lg w-20 sm:w-10 h-20 sm:h-10"
                              />
                            );
                          })}
                        </Box>
                        {isMoblie ? (
                          <Box className="mt-2 flex items-center gap-2">
                            <span className="text-[13px] font-light">
                              Huỳnh Anh Tân
                            </span>
                            <div className="flex items-center gap-1 text-[11px] bg-gray-100 p-1 w-max rounded-full">
                              <FaCheckCircle className="text-sm text-green-600" />
                              <div>Đã mua hàng</div>
                            </div>
                          </Box>
                        ) : (
                          <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm sm:hidden">
                            Đánh giá vào 9 tháng trước <b className="mb-2">.</b>{" "}
                            Đã dùng 3 ngày
                          </div>
                        )}
                      </div>
                      <div className="w-full flex gap-4 justify-between items-center mt-4 sm:mt-2">
                        <Box className="flex justify-between gap-4 items-center">
                          <div className="flex gap-2 text-gray-500 sm:text-sm">
                            <Image
                              src={
                                "https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                              }
                              alt=""
                              width={isMoblie ? 20 : 25}
                              height={isMoblie ? 20 : 25}
                            />
                            Hữu Ích
                          </div>
                          <div className="flex gap-2 text-gray-500 sm:text-sm">
                            <Image
                              src={
                                "https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                              }
                              alt=""
                              width={isMoblie ? 20 : 25}
                              height={isMoblie ? 20 : 25}
                            />
                            Bình luận
                          </div>
                        </Box>
                        <Box>
                          <div className="flex gap-2 text-gray-500 sm:text-sm">
                            <Image
                              src={
                                "https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                              }
                              alt=""
                              width={isMoblie ? 20 : 25}
                              height={isMoblie ? 20 : 25}
                            />
                            Chia sẻ
                          </div>
                        </Box>
                      </div>
                    </div>
                  </Box>
                ))}
                <Box className="flex justify-end sm:justify-center lg:m-6  border-t pt-5">
                  {isMoblie ? (
                    <div className="text-sm text-blue-400">
                      Xem tất cả 34 đánh giá
                    </div>
                  ) : (
                    <Stack spacing={2} className="">
                      <Pagination count={5} color="primary" className="" />
                    </Stack>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={isMoblie ? 12 : 3} className="sm:hidden">
              <Item className="bg-white rounded-lg p-5">
                <div className="flex items-center gap-3 border-b pb-2 ">
                  <div className="">
                    <Image
                      src={
                        "	https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg"
                      }
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Tiki Trading</h3>
                      <Image
                        src={
                          "https://salt.tikicdn.com/cache/w100/ts/upload/6b/25/fb/c288b5bcee51f35f2df0a5f5f03de2e1.png"
                        }
                        alt=""
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-sm mt-2">
                      4.7 <FaStar className="text-yellow-300" />{" "}
                      <span className="text-gray-500">(5.4tr+ đánh giá)</span>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <h2 className="mb-1 text-md font-medium">Số lượng</h2>
                  <div className="flex items-center gap-1">
                    <div className="border rounded-lg py-1 px-4 opacity-40">
                      -
                    </div>
                    <div className="border rounded-lg py-1 px-4">1</div>
                    <div className="border rounded-lg py-1 px-4">+</div>
                  </div>
                </div>
                <div className="mb-3">
                  <h2 className="mb-1 text-md font-medium">Tạm tính</h2>
                  <div className="text-2xl mt-2 font-medium">
                    246.000<sup className="underline">đ</sup>
                  </div>
                </div>
                <div>
                  <button className="w-full py-2 text-center border rounded-lg bg-rose-500 text-white">
                    Mua ngay
                  </button>
                  <button className="w-full py-2 text-center border rounded-lg border-blue-400 text-blue-400 my-3">
                    Thêm vào giỏ
                  </button>
                  <button className="w-full py-2 text-center border rounded-lg border-blue-400 text-blue-400">
                    Mua trước trả sau
                  </button>
                </div>
              </Item>
              <div className="slider-container  p-0">
                {
                  <Carousel
                    toshow={1}
                    toScroll={1}
                    dots={true}
                    type={"list"}
                    postion={"-35%"}
                    list={[
                      "https://salt.tikicdn.com/cache/w720/ts/tka/e4/90/eb/00305160f2e9a0edae26eb81d90751ff.jpg",
                      "https://salt.tikicdn.com/cache/w720/ts/tka/1b/67/1d/fe1a8e19f782bf24d71725c99ec6d729.png",
                    ].map((item, index) => {
                      return (
                        <Image
                          src={item}
                          alt=""
                          width={500}
                          height={500}
                          key={index}
                          className="rounded-lg"
                        />
                      );
                    })}
                  />
                }
              </div>
            </Grid>
          </Grid>
          <Item className={`rounded-lg mt-5`}>
            <Box className="bg-white p-5 ">
              <h1 className="font-medium text-lg sm:text-md mb-2">
                Khám phá thêm
              </h1>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                className="mb-3"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab
                  icon={
                    <img
                      className="w-10 h-10"
                      src="	https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png"
                    />
                  }
                  label="Dành cho bạn"
                />
                <Tab
                  icon={
                    <img
                      className="w-10 h-10"
                      src="	https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg"
                    />
                  }
                  label="Sách Xả Kho -60%"
                />
                <Tab
                  icon={
                    <img
                      className="w-10 h-10"
                      src="https://salt.tikicdn.com/cache/w100/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png"
                    />
                  }
                  label="Top Deal Bán Chạy"
                />
                <Tab
                  icon={
                    <img
                      className="w-10 h-10"
                      src="https://salt.tikicdn.com/cache/w100/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg"
                    />
                  }
                  label="Trending"
                />
              </Tabs>
            </Box>
            <Box className="w-full mt-3 ">
              <ProductSuggest />
            </Box>
          </Item>
          <Item
            className={`flex items-center w-full justify-center gap-5 sm:hidden my-5 `}
          >
            <div className="w-6/12">
              <img
                src={
                  "https://salt.tikicdn.com/ts/tka/eb/c8/b9/e3b0e36abf3ae10409ec990b4ef41341.png"
                }
                alt=""
                className="rounded-lg w-full h-fit"
              />
            </div>
            <div className="w-6/12 bg-gray-100 h-60 flex items-center gap-5 p-5 shadow-lg">
              <img
                src={
                  "https://salt.tikicdn.com/ts/tka/c2/f1/44/5eb14c0f174320882519848b2657d4ab.png"
                }
                alt=""
                className="rounded-lg w-44 h-44"
              />
              <div className="h-full relative py-5 w-full">
                <div className="font-medium text-lg">
                  <h4>NHẬP MÃ ELM20T1223 GIẢM 20%</h4>
                  <span className="text-gray-400 text-sm">
                    Tài trợ bởi Elmich Offcial Store 5/5
                  </span>
                </div>
                <div className="flex gap-2 absolute bottom-4">
                  {[
                    "https://salt.tikicdn.com/cache/100x100/ts/product/1b/bb/aa/75cf82e6e4e4a8f9b1be0840fe21d689.jpg",
                    "https://salt.tikicdn.com/cache/100x100/ts/product/fa/35/70/1937eef84afbc3d6585c4b6038f4c0a9.png",
                    "https://salt.tikicdn.com/cache/100x100/ts/product/7e/00/2f/e5fa9f840e3ef6fe9df101a2d9b34d25.png",
                  ].map((item, index) => {
                    return (
                      <div className="relative">
                        <img
                          src={item}
                          alt=""
                          key={index}
                          className="rounded-lg w-16 h-16"
                        />
                        <div className="absolute bottom-0 right-0 text-white bg-rose-500 p-1 text-[11px] rounded-lg">
                          -24%
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-4 right-3 text-sm text-center">
                  <div className="text-blue-500">Giảm 5%</div>
                  <div className="text-white bg-blue-500 py-1 px-3">
                    Xem thêm
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </Box>
      </Box>
      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
