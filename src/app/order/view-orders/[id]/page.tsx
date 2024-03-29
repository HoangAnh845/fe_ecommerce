"use client";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaAnglesLeft } from "react-icons/fa6";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import ViewOrdersMobile from "@/components/mobile/ViewOrders";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

function ViewOrders() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  return (
    <LayoutAccount className="" linkBack="/order/history-orders">
      {isMobile ? (
        <ViewOrdersMobile />
      ) : (
        <>
          <Box className="py-5 ">
            <h1 className="text-[22px] font-light ">
              Chi tiết đơn hàng #0C5CB6 -{" "}
              <span className="font-normal">Status</span>
            </h1>
          </Box>
          <Box className="flex gap-3">
            {[
              {
                title: "ĐỊA CHỈ NGƯỜI NHẬN",
                box: {
                  name: (
                    <>
                      <span className="font-medium">Nguyễn Văn A</span>
                    </>
                  ),
                  des: "Địa chỉ: Ha Noi, Viet Nam 123 Yen Xa, Thị trấn Thường Tín, Huyện Thường Tín, Hà Nội, Việt Nam",
                  sub: "Điện thoại: 0963868645",
                },
              },
              {
                title: "HÌNH THỨC GIAO HÀNG",
                box: {
                  name: (
                    <>
                      <span className="text-[#FFB700] font-medium text-sm">
                        FAST
                      </span>{" "}
                      Giao Tiết Kiệm
                    </>
                  ),
                  des: (
                    <>
                      Giao thứ 2, trước 19h, 18/03
                      <br></br>Được giao bởi TikiNOW Smart Logistics (giao từ Hà
                      Nội)
                    </>
                  ),
                  sub: "Phí vận chuyển: 4.000đ",
                },
              },
              {
                title: "HÌNH THỨC THANH TOÁN",
                box: {
                  name: "Thanh toán qua ứng dụng ngân hàng",
                  des: (
                    <>
                      <i className="text-[#FFB700]">
                        Thanh toán thất bại. Vui lòng thanh toán lại hoặc chọn
                        phương thức thanh toán khác
                      </i>
                    </>
                  ),
                  sub: "",
                },
              },
            ].map((item, index) => {
              return (
                <Box key={index} className="w-4/12">
                  <h6 className="text-sm mb-3">{item.title}</h6>
                  <Box className="bg-white p-3 rounded-md min-h-[143px]">
                    <div className="font-light text-[15px]">
                      {item.box["name"]}
                    </div>
                    <div className="font-light text-sm mt-2">
                      {item.box["des"]}
                    </div>
                    <div className="font-light text-sm mt-2">
                      {item.box["sub"]}
                    </div>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box className="mt-5">
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-[16px] text-gray-400 font-light w-6/12">
                      Sản phẩm
                    </TableCell>
                    <TableCell
                      className="text-[16px] text-gray-400 font-light"
                      align="right"
                    >
                      Giá
                    </TableCell>
                    <TableCell
                      className="text-[16px] text-gray-400 font-light"
                      align="right"
                    >
                      Số lượng
                    </TableCell>
                    <TableCell
                      className="text-[16px] text-gray-400 font-light"
                      align="right"
                    >
                      Giảm giá
                    </TableCell>
                    <TableCell
                      className="text-[16px] text-gray-400 font-light"
                      align="right"
                    >
                      Tạm tính
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="hover:bg-[#F6FCFF]">
                  <TableRow key={1}>
                    <TableCell component="th" scope="row">
                      <Box className="flex gap-3">
                        <div>
                          <Image
                            src="https://salt.tikicdn.com/cache/750x750/ts/product/b1/6a/16/345eddc667e025f3c34ef4283b3c0d8b.jpg"
                            width={120}
                            height={120}
                            alt=""
                          />
                        </div>
                        <div>
                          <span className="text-[16px]">
                            Tẩu sạc nhanh hoco 20w trên ô tô Z42, 1 cổng USB 1
                            cổng type-C có màn hình led PD20W QC3.0
                          </span>
                          <div className="my-2">
                            Cung cấp bởi{" "}
                            <span className="text-[#3382E8]">Tiki</span>
                          </div>
                          <p className="text-[15px]">Sku: 1931431965955</p>
                          <Box className="mt-3">
                            <button className="border-[1.5px] border-[#3382E8] py-2 px-3 mr-2 text-[13px] text-[#3382E8] rounded-md bg-transparent">
                              Chat với nhà bán
                            </button>
                            <button className="border-[1.5px] border-[#3382E8] py-2 px-3 mr-2 text-[13px] text-[#3382E8] rounded-md bg-transparent">
                              Mua lại
                            </button>
                          </Box>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell
                      className="text-[16px] relative w-2/12"
                      align="right"
                    >
                      <div className="absolute pt-4 pe-4 top-0 right-0">
                        169.000 ₫
                      </div>
                    </TableCell>
                    <TableCell className="text-[16px] relative" align="right">
                      <div className="absolute pt-4 pe-4 top-0 right-0">1</div>
                    </TableCell>
                    <TableCell className="text-[16px] relative" align="right">
                      <div className="absolute pt-4 pe-4 top-0 right-0">
                        0 ₫
                      </div>
                    </TableCell>
                    <TableCell className="text-[16px] relative" align="right">
                      <div className="absolute pt-4 pe-4 top-0 right-0">
                        169.000 ₫
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box className="flex justify-end bg-white py-6 px-2">
              <Box className="w-5/12">
                <div className="mb-2">
                  <span className="inline-block text-right font-normal text-gray-500 w-7/12 mr-12">
                    Tạm tính
                  </span>
                  <span className="inline-block w-3/12 font-normal text-[#333] text-[14.5px] text-right">
                    169.000 ₫
                  </span>
                </div>
                <div className="mb-2">
                  <span className="inline-block text-right font-normal text-gray-500 w-7/12 mr-12">
                    Phí vận chuyển
                  </span>
                  <span className="inline-block w-3/12 font-normal text-[#333] text-[14.5px] text-right">
                    0 ₫
                  </span>
                </div>
                <div className="mb-2">
                  <span className="inline-block text-right font-normal text-gray-500 w-7/12 mr-12">
                    Khuyến mãi vận chuyển
                  </span>
                  <span className="inline-block w-3/12 font-normal text-[#333] text-[14.5px] text-right">
                    0 ₫
                  </span>
                </div>
                <div className="mb-2">
                  <span className="inline-block text-right font-normal text-gray-500 w-7/12 mr-12">
                    Tổng cộng
                  </span>
                  <span className="inline-block w-3/12 font-normal text-rose-500 text-[18px] text-right">
                    169.000 ₫
                  </span>
                </div>
              </Box>
            </Box>
            <Box className="py-2 px-3">
              <Link
                className="text-[#3382E8] text-sm flex gap-2 items-center"
                href={"/order/history-orders"}
              >
                <FaAnglesLeft /> Quay lại đơn hàng của tôi
              </Link>
            </Box>
          </Box>
        </>
      )}
    </LayoutAccount>
  );
}

export default ViewOrders;
