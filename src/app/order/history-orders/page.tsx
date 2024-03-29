"use client";
import { useState } from "react";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Pagination from "@mui/material/Pagination";
import { BiStore } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { AiOutlineStop } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { PiMoneyLight } from "react-icons/pi";
import Tab from "@mui/material/Tab";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  checkData: boolean;
  data: any;
}

const responsive = [
  {
    id: 145,
    product_id: 1,
    status: "WAITTOPAY",
    avatar:
      "https://salt.tikicdn.com/cache/750x750/ts/product/df/12/9d/1fa00fa2473e17471a881e73a8d6fbe4.jpg",
    name: "Cà phê hòa tan G7 3in1 - Bịch 50 sachets 16gr",
    quantity: 5,
    price_total: 750000,
  },
  {
    id: 146,
    product_id: 2,
    status: "WAITTOPAY",
    avatar:
      "https://salt.tikicdn.com/cache/750x750/ts/product/e4/de/2a/7ce4f1f36b30c4129dbd1f12d528926a.jpg",
    name: "Cà phê hòa tan Nescafé 3in1 Cà Phê Sữa Đá 600G ( Bịch 25 Gói x 24g )",
    quantity: 2,
    price_total: 224000,
  },
  {
    id: 147,
    product_id: 3,
    status: "PROCESSING",
    avatar:
      "https://salt.tikicdn.com/cache/750x750/ts/product/b1/6a/16/345eddc667e025f3c34ef4283b3c0d8b.jpg",
    name: "Tẩu sạc nhanh hoco 20w trên ô tô Z42, 1 cổng USB 1 cổng type-C có màn hình led PD20W QC3.0",
    quantity: 1,
    price_total: 169000,
  },
];

function handleTypeOrder(status: string) {
  return responsive.map((item) => {
    switch (status) {
      case "WAITTOPAY":
        return item.status === "WAITTOPAY" ? item : {};
      case "PROCESSING":
        return item.status === "PROCESSING" ? item : {};
      case "SHIPPING":
        return item.status === "SHIPPING" ? item : {};
      case "DELIVERED":
        return item.status === "DELIVERED" ? item : {};
      case "CANCEL":
        return item.status === "CANCEL" ? item : {};
      default:
        return item;
    }
  });
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, checkData, data, index, ...other } = props;
  const size = useWindowSize();
  const isMobile = size.width < 768;
  // Loại bỏ phẩn tử rỗng
  const filterData = data.filter((item: any) => Object.keys(item).length !== 0);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {filterData.length > 0 ? (
            (filterData || []).map(function (item: any) {
              return (
                <Box key={item?.id} className="mb-5 bg-white p-5">
                  <div className="flex items-center gap-2 text-gray-400 font-medium text-md border-b-2 pb-3">
                    {value === 1 ? (
                      <MdOutlinePending className="text-xl" />
                    ) : value === 2 ? (
                      <IoMdTime className="text-xl" />
                    ) : value === 3 ? (
                      <MdOutlineLocalShipping className="text-xl" />
                    ) : value === 4 ? (
                      <IoCheckmarkDoneCircleOutline className="text-xl" />
                    ) : value === 5 ? (
                      <AiOutlineStop className="text-xl" />
                    ) : (
                      <PiMoneyLight className="text-xl" />
                    )}
                    {value === 1
                      ? "Chờ thanh toán"
                      : value === 2
                      ? "Đang xử lý"
                      : value === 3
                      ? "Đang giao hàng"
                      : value === 4
                      ? "Đã giao hàng"
                      : value === 5
                      ? "Đã hoàn thành"
                      : "Đã hủy"}
                  </div>
                  <Box className="flex justify-between gap-2 lg:my-5 sm:mt-5 lg:border-b-2 lg:pb-5">
                    <Box className="flex">
                      <div className="lg:border rounded-md p-1 relative">
                        <Image
                          src={item?.avatar}
                          alt=""
                          width={isMobile ? 150 : 100}
                          height={isMobile ? 150 : 100}
                        />
                        <span className="absolute bottom-0 right-0 p-2.5 bg-gray-200 text-gray-500 text-xs rounded-tl-lg rounded-br-md sm:hidden">
                          x{item?.quantity}
                        </span>
                      </div>
                      <div className="ml-4 w-full">
                        <h4 className="text-md sm:text-sm font-normal mb-1">
                          {item?.name}
                        </h4>
                        <div className="flex items-center gap-1 text-gray-500 sm:text-xs">
                          {isMobile ? (
                            <>
                              <span>{item?.quantity} sản phẩm | </span>
                              {item?.price_total.toLocaleString("vi-VN")}{" "}
                              <span className="underline decoration-solid">
                                đ
                              </span>
                            </>
                          ) : (
                            <>
                              <BiStore />
                              <span className="text-md">Tiki</span>
                            </>
                          )}
                        </div>
                      </div>
                    </Box>
                    <div className="sm:hidden">
                      {item?.price_total.toLocaleString("vi-VN")}{" "}
                      <span className="underline decoration-solid">đ</span>
                    </div>
                  </Box>
                  <Box className="">
                    <div className="flex items-center justify-end gap-3 text-lg sm:hidden">
                      <h4 className="text-md font-normal mb-1 text-gray-500">
                        Tổng tiền:
                      </h4>
                      <span className="text-md font-normal">
                        {item.price_total.toLocaleString("vi-VN")}{" "}
                        <span className="underline decoration-solid">đ</span>
                      </span>
                    </div>
                    <div className="flex sm:flex-row-reverse justify-end gap-3 mt-2 text-sm">
                      <button className="text-[#2A74E5] border-2 border-[#2A74E5] rounded-md py-1 px-4 sm:w-6/12">
                        Mua lại
                      </button>
                      <button className="text-[#2A74E5] border-2 border-[#2A74E5] rounded-md py-1 px-4 sm:w-6/12">
                        <Link href={`/order/view-orders/${item?.id}`}>
                          Xem chi tiết
                        </Link>
                      </button>
                    </div>
                  </Box>
                </Box>
              );
            })
          ) : (
            <NotFound />
          )}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
      <h4 className="text-md font-light mt-2">Chưa có đơn hàng</h4>
    </Box>
  );
}

function HistoryOrders() {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const [value, setValue] = useState(0);
  const [checkData, setCheckData] = useState<boolean>(true);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Box className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Đơn hàng của tôi</h1>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "#fff",
          }}
          className="sm:mb-5"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="justify-around"
            variant={isMobile ? "scrollable" : "fullWidth"}
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Tất cả các đơn" {...a11yProps(0)} />
            <Tab label="Chờ thanh toán" {...a11yProps(1)} />
            <Tab label="Đang xử lý" {...a11yProps(2)} />
            <Tab label="Đã giao hàng" {...a11yProps(3)} />
            <Tab label="Đã hoàn thành" {...a11yProps(4)} />
            <Tab label="Đã Hủy" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <Box className="my-4 relative sm:hidden" component={"form"}>
          <IoMdSearch className="absolute top-3 left-3 text-[#808089] text-2xl" />
          <input
            type="text"
            placeholder="Tìm kiếm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
            className="border-2 border-gray-300 rounded-md p-2 w-full pl-10 outline-[#2B76E6]"
          />
          <button className="absolute right-4 top-2 text-[#2B76E6] text-md border-l-2 pl-4">
            Tìm đơn hàng
          </button>
        </Box>
        <CustomTabPanel
          value={value}
          index={0}
          checkData={checkData}
          data={handleTypeOrder("Tất cả các đơn")}
        >
          <CustomTabPanel
            value={value}
            index={0}
            checkData={checkData}
            data={handleTypeOrder("WAITTOPAY")}
          ></CustomTabPanel>
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          checkData={checkData}
          data={handleTypeOrder("WAITTOPAY")}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={2}
          checkData={checkData}
          data={handleTypeOrder("PROCESSING")}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={3}
          checkData={checkData}
          data={handleTypeOrder("SHIPPING")}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={4}
          checkData={checkData}
          data={handleTypeOrder("DELIVERED")}
        ></CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={5}
          checkData={checkData}
          data={handleTypeOrder("CANCEL")}
        ></CustomTabPanel>
      </Box>
      {/* <Box>
        <Pagination count={responsive.length} color="primary" />
      </Box> */}
    </LayoutAccount>
  );
}

export default HistoryOrders;
