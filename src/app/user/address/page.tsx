"use client";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useWindowSize from "@/hooks/useWindowSize";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  bottom: "-5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  // p: 4,
};

function Address() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="outline-none">
          <Box className="bg-white w-full rounded-lg py-3 text-center text-blue-500 mb-3"><Link href={"/user/address/edit"}>Chỉnh sửa
          </Link></Box>
          <Box className="bg-white w-full rounded-lg py-3 text-center text-rose-500" onClick={handleClose}>Hủy</Box>
        </Box>
      </Modal>
      <Box className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Sổ địa chỉ</h1>
      </Box>
      <div className={`${isMobile && "flex flex-col-reverse"}`}>
        <Box className="flex w-full items-center lg:justify-center lg:gap-5 sm:gap-3 bg-white py-5 px-4 lg:border-dashed lg:border-2 border-gray-300 cursor-pointer">
          {isMobile ? (
              <IoMdAdd className="text-xl text-[#227BE5] mt-[-3px] w-6 h-6 p-1 border border-[#227BE5] rounded-full" />
          ) : (
            <IoMdAdd className="text-3xl text-gray-500 mt-[-3px]" />
          )}
          <span className="text-[1.1rem] sm:text-[0.9rem] text-[#227BE5]">
            <Link href={"/user/address/create"}>Thêm địa chỉ mới</Link>
          </span>
        </Box>
        <Box className="w-full py-5 px-4 bg-white rounded-lg lg:mt-5 sm:mb-5 text-[14.5px] relative">
          <div className="flex gap-5 ">
            <span className="font-normal">HOANG ANH</span>
            <span className="flex items-center gap-1 text-green-500 font-medium mt-[-3px]">
              <IoIosCheckmarkCircleOutline className="text-lg" />{" "}
              <p className="text-[13px]">Địa chỉ mặc định</p>
            </span>
          </div>
          <div className="mt-3 mb-1">
            <span className="text-gray-500">Địa chỉ: </span> Ha Noi, Viet Nam
            123 Yen Xa, Thị trấn Thường Tín, Huyện Thường Tín, Hà Nội
          </div>
          <div>
            <span className="text-gray-500">Điện thoại:</span> 0963868645
          </div>
          <Box className="absolute top-0 right-0 p-5 text-[#227BE5] cursor-pointer">
            {isMobile ? (
              <BsThreeDotsVertical className="text-lg" onClick={handleOpen}/>
            ) : (
              <Link href="">Chỉnh sửa </Link>
            )}
          </Box>
        </Box>
      </div>
    </LayoutAccount>
  );
}

export default Address;
