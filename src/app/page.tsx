"use client";
import { useState, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import { LuStore } from "react-icons/lu";
import { HiOutlineArrowRight } from "react-icons/hi";
import ProductPriceNice from "@/components/product/ProductPriceNice";
import { RiHome2Line } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import useScrollY from "@/hooks/useScrollY";
import Carousel from "@/components/Carousel";
import ProductYourCare from "@/components/product/ProductYourCare";
import useWindowSize from "@/hooks/useWindowSize";
import ProductTikiBest from "@/components/product/ProductTikiBest";
import ProductGenuine from "@/components/product/ProductGenuine";
import ProductCanYouLike from "@/components/product/ProductCanYouLike";
import Link from "next/link";
import Loading from "./loading";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel1 from "@/components/Carousel1";
import ProductList from "@/components/product/ProductList";

const category_bar = [
  {
    category_id: 12,
    title: "Nhà Sách Tiki",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png",
  },
  {
    category_id: 93,
    title: "Nhà Cửa - Đời Sống",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png",
  },
  {
    category_id: 248,
    title: "Điện Thoại - Máy Tính Bảng",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png",
  },
  {
    category_id: 146,
    title: "Đồ Chơi - Mẹ & Bé",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png",
  },
  {
    title: "Thiết Bị Số - Phụ Kiện Số",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png",
  },
  {
    category_id: 208,
    title: "Điện Gia Dụng",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png",
  },
  {
    category_id: 254,
    title: "Làm Đẹp - Sức Khỏe",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png",
  },
  {
    title: "Ô Tô - Xe Máy - Xe Đạp",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png",
  },
  {
    title: "Thời trang nữ",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png",
  },
  {
    category_id: 1,
    title: "Bách Hóa Online",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png",
  },
  {
    title: "Thời trang nam",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png",
  },
  {
    title: "Cross Border - Hàng Quốc Tế",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png",
  },
  {
    title: "Laptop - Máy Vi Tính - Linh kiện",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png",
  },
  {
    title: "Giày - Dép nam",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png",
  },
  {
    title: "Điện Tử - Điện Lạnh",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png",
  },
  {
    title: "Giày - Dép nữ",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png",
  },
  {
    title: "Máy Ảnh - Máy Quay Phim",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png",
  },
  {
    title: "Phụ kiện thời trang",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png",
  },
  {
    title: "NGON",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png",
  },
  {
    title: "Đồng hồ và Trang sức",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png",
  },
  {
    title: "Balo và Vali",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png",
  },
  {
    title: "Voucher - Dịch vụ",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png",
  },
  {
    title: "Túi thời trang nữ",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png",
  },
  {
    title: "Túi thời trang nam",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png",
  },
];

const category_hot = [
  {
    title: "Tiki Exchange",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png",
  },
  {
    title: "Tốt & Nhanh",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/7e/00/fe/a9798708549255148735ce9406fa7b4d.png",
  },
  {
    title: "Giá Rẻ Mỗi Ngày",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png",
  },
  {
    title: "Xả kho",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png",
  },
  {
    title: "Mã giảm giá",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png",
  },
  {
    title: "Ưu đãi thẻ, ví",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png",
  },
  {
    title: "Đóng tiền, nạp thẻ",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png",
  },
  {
    title: "Mua trước trả sau",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png",
  },
  {
    title: "Bảo hiểm Tiki360",
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png",
  },
];

const nav_bar = [
  {
    title: "Tiki Best",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/e0/4f/a4/2f79e4d3e8b4a71941fa7da279c994db.png",
  },
  {
    title: `
    Nhập khẩu
    chính hãng`,
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/18/ec/0b/7f09f2ec4d8d5ceb81b8c043dbc747d0.png",
  },
  {
    title: "Khuyến mãi",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/84/e5/5a/ef4abf5ef55fe5db81ac7a900de40368.png",
  },
  {
    title: "Sản phẩm mới",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/b1/5f/5e/501a9b0ed0c1735d3e3872bad6e587df.png",
  },
  {
    title: "Nhà sách Tiki",
    imageUrl:
      "https://salt.tikicdn.com/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png",
  },
  {
    title: "Làm Đẹp - Sức Khỏe",
    imageUrl:
      "https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png",
  },
  {
    title: "Nhà Cửa - Đời Sống",
    imageUrl:
      "https://salt.tikicdn.com/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png",
  },
];

const question = [
  {
    title: "Mua sắm",
    icon: "https://salt.tikicdn.com/ts/ta/47/82/39/0d215e2d5f6c4a26c827fc3b5ad38111.png",
    desc: "Manga, truyện tranh phổ biến với giới trẻ là gì?",
  },
  {
    title: "Khuyến mãi",
    icon: "https://salt.tikicdn.com/ts/ta/28/b3/0f/db583788cf5d448143f23d219661813f.png",
    desc: "Có mã freeship không?",
  },
  {
    title: "Mua sắm",
    icon: "https://salt.tikicdn.com/ts/ta/47/82/39/0d215e2d5f6c4a26c827fc3b5ad38111.png",
    desc: "Truyện ngắn và tản văn nào phải đọc năm nay?",
  },
  {
    title: "Mua sắm",
    icon: "https://salt.tikicdn.com/ts/ta/47/82/39/0d215e2d5f6c4a26c827fc3b5ad38111.png",
    desc: "Sửa rửa mặt simple giá rẻ nhất ở đâu?",
  },
  {
    title: "Kiến thức",
    icon: "https://salt.tikicdn.com/ts/ta/44/22/6d/0da39b6025d822064205970b3e4b6a67.png",
    desc: "Thức ăn cho chó Lab ở độ tuổi trưởng thành?",
  },
  {
    title: "Khuyến mãi",
    icon: "https://salt.tikicdn.com/ts/ta/28/b3/0f/db583788cf5d448143f23d219661813f.png",
    desc: "Lấy mã giảm giá Tiki ở đâu?",
  },
];

export default function Home() {
  const scroll = useScrollY();
  const [isReady, setIsReady] = useState(false);
  const [tikiBest, setTikiBest] = useState(207);
  const [genuine, setGenuine] = useState(340);
  const [canyoulike, setCanYouLike] = useState(213);
  const size = useWindowSize();
  const isMoblie: boolean = size.width < 768;

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (size.width !== undefined) {
      setIsReady(true);
    }
  }, [size]);

  // Thương hiệu chính hãng
  const trademark = useCallback(() => {
    return [
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/08/e9/a7/0f947e8af807b7a921a072ed28391118.png",
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/08/e9/a7/0f947e8af807b7a921a072ed28391118.png",
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/76/a9/46/e976d33619187d9c5906599cd86b11f7.png",
      "	https://salt.tikicdn.com/cache/w750/ts/tikimsp/15/37/5b/8f80f5702ff4d3a592cf1734dff41845.png",
      "	https://salt.tikicdn.com/cache/w750/ts/tikimsp/24/18/69/86cc7cf9fb378a978d51e05061517f8a.png",
      "	https://salt.tikicdn.com/cache/w750/ts/tikimsp/53/d0/8b/3513542c2ed2ed28329028b1f9b90373.png",
      "	https://salt.tikicdn.com/cache/w750/ts/tikimsp/53/d0/8b/3513542c2ed2ed28329028b1f9b90373.png",
    ].map((item, index) => (
      <div className="p-1" key={index}>
        <img
          className={`border rounded-lg outline-none w-full  sm:w-[136px] sm:h-[204px]`}
          src={item}
        />
      </div>
    ));
  }, []);

  // other
  const otherImage = () => {
    return [
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/21/34/1d/b600b9c1bbf41fd7d84f70556a181939.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/e5/2e/6d/84ee0f28ccbcf3885fa580ee8d0bae8d.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/eb/8d/ac/56dbb1ff3738d38911fc307a3d09b68a.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/41/dd/7a/fa6a997054479cca54f2b01dce8b4a07.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/50/71/9b/90124ff4742448ca7752230a8d786904.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/68/1b/8c/eb948f7051f89e194e24884799921be3.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/c7/89/ce/edd95f21d68d1f69f9db277623bf055c.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/46/22/82/41543602b3c3e666ba863abc44934652.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/3a/2d/ab/cfa3eda568b0e919eaf7fa58ebb24ea6.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/fd/77/94/543e396d31d8c2cdefbacc7a3e74bdf1.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/be/fb/a1/fec4694577e269b4021989ec8944b2d3.png",
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/e0/ea/69/4b4c5116bacde0fdf6e8eef36c905191.png",
    ].map((item, index) => (
      <div className="p-2 lg:w-2/12" key={index}>
        <img
          className={`border rounded-lg outline-none ${
            isMoblie ? "w-[169px] h-[253px]" : "w-full "
          }`}
          src={item}
        />
      </div>
    ));
  };

  if (!isReady) {
    return <Loading />; // Nếu chưa sẵn sàng, hiển thị component Loading
  }

  

  return (
    <>
      <div>
        <Navbar />
        <div className="bg-[#F5F5FA] ">
          <Box className="container mx-auto py-5 flex">
            <Box className="w-2/12 sm:hidden">
              <Box className="bg-white  py-5 px-3 mb-5 ">
                <h1 className="font-bold mb-3 pl-2">Danh mục</h1>
                <ul>
                  {category_bar.map((item, index) => {
                    const settings = {}; // Declare the 'settings' variable
                    return (
                      <li key={index}>
                        <Link
                          href={`/category/${item?.category_id}`}
                          className="flex items-center hover:bg-gray-200 py-2 px-3 rounded-lg cursor-pointer"
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-10 h-9 mr-2"
                          />
                          <span className="text-[15px]">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Box>
              <Box className="bg-white rounded-lg py-5 px-3 mb-5 ">
                <h1 className="font-bold mb-3 pl-2">Nổ bật</h1>
                <ul>
                  {category_hot.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center hover:bg-gray-200 py-2 px-3 rounded-lg cursor-pointer"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-10 h-9 mr-2"
                      />
                      <span className="text-[15px]">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box className="bg-white rounded-lg p-2 mb-5">
                <div className="hover:bg-gray-200 p-2 flex gap-3 cursor-pointer items-center text-md rounded-lg text-[15px]">
                  <LuStore className="text-gray-400 text-3xl" />
                  Bán hàng cùng Tiki
                </div>
              </Box>
            </Box>
            <Box className="w-10/12 sm:w-full lg:px-8 mb-5">
              <Box className="bg-white rounded-lg p-5 mb-5 sm:hidden">
                <Carousel1
                  toshow={2}
                  toScroll={2}
                  dots={true}
                  arrows={true}
                  autoplay={true}
                  postion_dots={"-7%"}
                  paging_type={"dots"}
                  list={[
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/58/43/17/43e07360e61def287066a924c6bb2ba6.jpeg",
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/e0/88/c6/27a6eb16697912ca6ff7376f4f2a157f.png",
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/50/af/83/47f90fd31d51314e44815be47203a66a.png",
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/da/5a/d5/e98c5fa1e988ab1cf9736048f08e9ee1.jpeg",
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/2f/43/0f/6264608b8c19910645aa13aa247137f3.png",
                    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/9e/43/32/1f88b9ae90ad1a4cee024fa2a7142422.png",
                  ].map((item, index) => (
                    <div key={index} className="p-2 outline-none">
                      <img src={item} alt="carousel" className="rounded-lg" />
                    </div>
                  ))}
                />
              </Box>
              <Box className="bg-white rounded-lg px-5 py-2 mb-5 w-full sm:overflow-scroll">
                <ul className="flex justify-between sm:w-max">
                  {nav_bar.map((item, index) => (
                    <li
                      key={index}
                      className=" hover:bg-gray-200 py-2 px-3 rounded-lg cursor-pointer"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-20 sm:w-16 h-20 sm:h-16 mx-auto border p-1 rounded-full"
                      />
                      <div className="sm:text-[12px] text-[15px] mt-2 text-gray-500">
                        <>{item.title}</>
                      </div>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box className="bg-white rounded-lg p-5 pb-0 mb-5">
                <Box className="flex justify-between items-center mb-5">
                  <div className="flex gap-4 sm:gap-2 items-center ">
                    <h1 className="font-medium">Giá tốt hôm nay</h1>
                    <div className="text-xs lg:text-sm">
                      <span className="inline-block py-1 px-2 bg-rose-500 text-white rounded-md">
                        00
                      </span>
                      <span className="inline-block mx-1">:</span>
                      <span className="inline-block py-1 px-2 bg-rose-500 text-white rounded-md">
                        00
                      </span>
                      <span className="inline-block mx-1">:</span>
                      <span className="inline-block py-1 px-2 bg-rose-500 text-white rounded-md">
                        00
                      </span>
                    </div>
                  </div>
                  <div className="text-blue-500 text-md font-medium sm:text-sm">
                    Xem tất cả
                  </div>
                </Box>
                <Box className="w-full">
                  <ProductPriceNice />
                </Box>
              </Box>
              <Box
                className={`bg-white p-5 rounded-lg ${isMoblie && "pb-0"} mb-5`}
              >
                <h1 className="font-medium mb-3">Sản phẩm bạn quan tâm</h1>
                <Box className="w-full">
                  <ProductYourCare />
                </Box>
              </Box>
              <Box
                className="p-5 mb-5 rounded-lg"
                sx={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, 0) 22.49%, rgb(255, 255, 255) 73.49%), linear-gradient(264.03deg, rgb(220, 229, 251) -10.27%, rgb(234, 236, 255) 35.65%, rgb(213, 236, 253) 110.66%)",
                }}
              >
                <h1 className="font-medium mb-3">Thương hiệu chính hãng</h1>
                <Box className="w-full overflow-scroll pb-0">
                  {isMoblie ? (
                    <Box className="flex w-max">{trademark()}</Box>
                  ) : (
                    <Carousel1
                      toshow={6}
                      toScroll={6}
                      postion_dots={"-7%"}
                      paging_type={"dots"}
                      list={trademark()}
                    />
                  )}
                </Box>
              </Box>
              <Box className="bg-white p-5 sm:pb-0 mb-5">
                <h1 className="font-medium mb-3">Câu hỏi thường gặp</h1>
                <Box className="w-full overflow-scroll">
                  <ul className="flex gap-2 justify-between sm:w-max">
                    {question.map((item, index) => (
                      <li
                        key={index}
                        className=" hover:bg-gray-200 py-3 px-3 pb-8 w-2/12 border-2 rounded-lg cursor-pointer relative"
                      >
                        <div className="flex items-center">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-4 h-4 mr-2"
                          />
                          <span className="text-[13px]">{item.title}</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-md font-medium">{item.desc}</p>
                        </div>
                        <button className="a absolute bottom-3 right-3">
                          <HiOutlineArrowRight className="text-gray-500 text-xl" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
              <Box className="bg-white p-5 sm:pb-0 mb-5">
                <h1 className="font-medium mb-3">Tiki Best</h1>
                <Box className="w-full">
                  <Box className="w-full overflow-scroll">
                    <Box className="flex gap-2 w-max mb-2">
                      <div
                        className={`cursor-pointer border rounded-full ${
                          tikiBest === 207
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setTikiBest(207)}
                      >
                        Thế Thao - Dã Ngoại
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          tikiBest === 208
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setTikiBest(208)}
                      >
                        Điện Gia Dụng
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          tikiBest === 146
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setTikiBest(146)}
                      >
                        Đồ chơi - Mẹ & Bé
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          tikiBest === 248
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setTikiBest(248)}
                      >
                        Điện Thoại - Máy Tính Bảng
                      </div>
                    </Box>
                  </Box>
                  <ProductTikiBest
                    category_id={tikiBest}
                    tiki_best={1}
                    genuine={1}
                  />
                </Box>
              </Box>
              <Box className="bg-white p-5 sm:pb-0 mb-5">
                <h1 className="font-medium mb-3">Nhập khẩu chính hãng</h1>
                <Box className="w-full">
                  <Box className="w-full overflow-scroll">
                    <Box className="flex gap-2 w-max mb-2">
                      <div
                        className={`cursor-pointer border rounded-full ${
                          genuine === 340
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setGenuine(340)}
                      >
                        Nhân Sâm, Hồng Sâm
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          genuine === 273
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setGenuine(273)}
                      >
                        Phấn nước
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          genuine === 264
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setGenuine(264)}
                      >
                        Serum
                      </div>
                      <div
                        className={`cursor-pointer border rounded-full ${
                          genuine === 105
                            ? "border-2 border-blue-500 text-blue-500"
                            : "border-gray-300 text-gray-400"
                        }  px-3 py-1 sm:text-xs text-sm`}
                        onClick={() => setGenuine(105)}
                      >
                        Bình đựng nước
                      </div>
                    </Box>
                  </Box>
                  <ProductGenuine
                    category_id={genuine}
                    tiki_best={0}
                    genuine={1}
                  />
                </Box>
              </Box>
              <Box className="bg-white p-5 sm:pb-0 mb-5">
                {isMoblie ? (
                  <Box className="slider-container">
                    <Carousel
                      toshow={2}
                      toScroll={2}
                      dots={true}
                      // arrows={true}
                      list={otherImage()}
                      type={"list"}
                    />
                  </Box>
                ) : (
                  <Box className="flex flex-wrap">{otherImage()}</Box>
                )}
              </Box>
              <Box className="bg-white p-5 mb-5">
                <h1 className="font-medium mb-3">Bạn có thể thích</h1>
                <Box className="w-full overflow-scroll">
                  <Box className="flex gap-2 w-max mb-2">
                    <div
                      className={`cursor-pointer border rounded-full ${
                        canyoulike === 213
                          ? "border-2 border-blue-500 text-blue-500"
                          : "border-gray-300 text-gray-400"
                      }  px-3 py-1 sm:text-xs text-sm`}
                      onClick={() => setCanYouLike(213)}
                    >
                      Lò vi sóng
                    </div>
                    <div
                      className={`cursor-pointer border rounded-full ${
                        canyoulike === 234
                          ? "border-2 border-blue-500 text-blue-500"
                          : "border-gray-300 text-gray-400"
                      }  px-3 py-1 sm:text-xs text-sm`}
                      onClick={() => setCanYouLike(234)}
                    >
                      Bàn ủi, bàn là
                    </div>
                    <div
                      className={`cursor-pointer border rounded-full ${
                        canyoulike === 169
                          ? "border-2 border-blue-500 text-blue-500"
                          : "border-gray-300 text-gray-400"
                      }  px-3 py-1 sm:text-xs text-sm`}
                      onClick={() => setCanYouLike(169)}
                    >
                      Dinh dưỡng cho người lớn
                    </div>
                    <div
                      className={`cursor-pointer border rounded-full ${
                        canyoulike === 250
                          ? "border-2 border-blue-500 text-blue-500"
                          : "border-gray-300 text-gray-400"
                      }  px-3 py-1 sm:text-xs text-sm`}
                      onClick={() => setCanYouLike(250)}
                    >
                      Máy tính bảng
                    </div>
                  </Box>
                </Box>
                <ProductCanYouLike
                  category_id={canyoulike}
                  tiki_best={0}
                  genuine={1}
                />
              </Box>
              <Box>
                <Box className="bg-white px-5 mb-5">
                  <h1 className="font-medium mb-3 pt-3">Gợi ý hôm nay</h1>
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
                          src="https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png"
                        />
                      }
                      label="Dành cho bạn"
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
                          src="	https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg"
                        />
                      }
                      label="Sách Xả Kho -60%"
                    />
                    <Tab
                      icon={
                        <img
                          className="w-10 h-10"
                          src="	https://salt.tikicdn.com/cache/w100/ts/ta/68/ee/84/317fe86a991b86cbb4ae956b46d04c60.jpg"
                        />
                      }
                      label="SamSung"
                    />
                  </Tabs>
                </Box>
                <ProductList />
              </Box>
              <Box className="bg-white px-5 rounded-lg">
                <Footer />
              </Box>
            </Box>
          </Box>
        </div>
        <Box className="fixed bottom-0 w-full lg:hidden">
          <ul className=" flex justify-between p-3 border-t border-b bg-white">
            <li className="text-sm">
              <RiHome2Line
                className={`"mb-1" mx-auto text-gray-500 text-3xl`}
              />
              <div>Trang Chủ</div>
            </li>
            <li className="text-sm">
              <TbCategory2
                className={`"mb-1" mx-auto text-gray-500 text-3xl`}
              />

              <div>Danh Mục</div>
            </li>
            <li className="text-sm">
              <HiOutlineChatBubbleOvalLeft
                className={`"mb-1" mx-auto text-gray-500 text-3xl`}
              />
              <div>Chat</div>
            </li>
            <li className="text-sm">
              <HiOutlineUser
                className={`"mb-1" mx-auto text-gray-500 text-3xl`}
              />
              <Link href="/user/account">Cá Nhân</Link>
            </li>
          </ul>
        </Box>
      </div>
    </>
  );
}
