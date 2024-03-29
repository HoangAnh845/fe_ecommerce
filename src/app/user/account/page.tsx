"use client";
import LayoutAccount from "@/components/LayoutAccount";
import React, { useRef, useState } from "react";
import date from "../../../../public/date.json";
import country from "../../../../public/country.json";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import Image from "next/image";
import { Modal } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { DownIcon } from "../../../../public/icons";
import useWindowSize from "@/hooks/useWindowSize";
import AccountMobile from "@/components/mobile/Account";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

function Accoutn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;

  return (
    <LayoutAccount className="" linkBack="/user/account">
      {isMobile ? (
        <AccountMobile />
      ) : (
        <Box className="py-5">
          <h1 className="text-[22px] font-light mb-7">Thông tin tài khoản</h1>
          <Box className="bg-white w-full rounded-lg">
            <Grid container spacing={2} className="p-4">
              <Grid className="pt-2 p-4" item xs={7}>
                <h3 className="text-[18px] font-normal text-[#64646D] mb-4">
                  Thông tin cá nhân
                </h3>
                <Box className="info flex">
                  <div className="relative rounded-full border-4 border-[#C2E1FF] w-fit py-7 px-8 bg-[#EFF8FF]">
                    <Image
                      src={"/images/avater_account_default.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="absolute right-0 bottom-[7%] border-2 rounded-full bg-[#64646D] p-0.5 cursor-pointer">
                      <MdOutlineEdit className="text-white text-xs" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full ps-10">
                    <div className="flex items-center justify-between">
                      <label className="w-28 min-w-28 text-[16px] text-gray-700">
                        Họ & tên
                      </label>
                      <div className="w-11/12 relative">
                        <input
                          type="text"
                          className="transition focus:border-[#65AFE9] duration-150 ease-in-out flex-1 w-full h-9 rounded-md px-3 py-3 border outline-none border-gray-300"
                          placeholder="Thêm họ và tên"
                          onFocus={() => setFocus(!focus)}
                          onBlur={() => setFocus(false)}
                          required
                        />
                        {focus && (
                          <div className="absolute text-xs bottom-[-60%] left-[1%]">
                            Họ & tên gồm 2 từ trở lên
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="w-28 min-w-28 text-[16px] text-gray-700">
                        Nickname
                      </label>
                      <div className="w-11/12 relative">
                        <input
                          type="text"
                          className="transition focus:border-[#65AFE9] duration-150 ease-in-out flex-1 w-full h-9 rounded-md px-3 py-3 border outline-none border-gray-300"
                          placeholder="Thêm Nickname"
                          onFocus={() => setFocus2(!focus2)}
                          onBlur={() => setFocus2(false)}
                          required
                        />
                        {focus2 && (
                          <div className="absolute text-xs bottom-[-100%] left-[1%]">
                            3-20 kí tự, chỉ bao gồm: chữ, số, "_" và ".".Bạn
                            không thể thay đổi sau khi lưu.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Box>
                <Box className="birthday my-10">
                  <div className="flex items-center justify-between">
                    <label className="w-28 min-w-28 text-[16px] text-gray-700">
                      Ngày sinh
                    </label>
                    <div className="w-11/12 flex mt-2">
                      <select
                        name="day"
                        className="w-28 border border-gray-300 h-9 px-3 py-1 leading-8 outline-none rounded-md mr-3 bg-center bg-no-repeat shadow-none"
                      >
                        {(date.days || []).map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <select
                        name="month"
                        className="w-28 border border-gray-300 h-9 px-3 py-1 leading-8 outline-none rounded-md mr-3 bg-center bg-no-repeat shadow-none"
                      >
                        {(date.months || []).map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <select
                        name="year"
                        className="w-28 border border-gray-300 h-9 px-3 py-1 leading-8 outline-none rounded-md mr-3 bg-center bg-no-repeat shadow-none"
                      >
                        {(date.years || []).map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Box>
                <Box className="gender flex items-center">
                  <label className="w-28 min-w-28 text-[16px] text-gray-700">
                    Giới tính
                  </label>
                  <label className="flex items-center mr-5 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="cursor-pointer w-[20px] h-[20px] mr-2 accent-[#0C5CB6]"
                    />
                    <span className="label text-[14px] leading-5 flex items-center">
                      Nam
                    </span>
                  </label>
                  <label className="flex items-center mr-5 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="woman"
                      className="cursor-pointer w-[20px] h-[20px] mr-3 accent-[#0C5CB6]"
                    />
                    <span className="label text-[14px] leading-5 flex items-center">
                      Nữ
                    </span>
                  </label>
                  <label className="flex items-center mr-5 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      className="cursor-pointer w-[20px] h-[20px] mr-3 accent-[#0C5CB6]"
                    />
                    <span className="label text-[14px] leading-5 flex items-center">
                      Khác
                    </span>
                  </label>
                </Box>
                <Box className="country flex items-center my-10">
                  <label className="w-28 min-w-28 text-[16px] text-gray-700">
                    Quốc tịch
                  </label>
                  <div className="w-full relative ">
                    <input
                      type="text"
                      placeholder="Chọn quốc tịch"
                      className="transition focus:border-[#65AFE9] duration-150 ease-in-out h-9 w-full rounded-md px-3 outline-none flex-1 border border-gray-300"
                      onClick={handleOpen}
                    />
                    <DownIcon
                      className="absolute right-0 top-[20%]"
                      width="1.7rem"
                      height="1.7rem"
                    />
                  </div>
                </Box>
                <Box className="w-6/12 text-right ms-4">
                  <button
                    type="button"
                    className=" text-white bg-[#0D74E4] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-md text-md px-12 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Lưu thay đổi
                  </button>
                </Box>
              </Grid>
              <Grid item xs={5} className="pt-2 p-4 border-l-2">
                <Box>
                  <h3 className="text-[18px] font-normal text-[#64646D] mb-4">
                    Số điện thoại và email
                  </h3>
                  <Box className="flex items-center justify-between border-b-2 pb-4 border-gray-100">
                    <div className="flex">
                      <div>
                        <Image
                          src={"/images/icon_phone.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        <div>Số điện thoại</div>
                        <div>0963868645</div>
                      </div>
                    </div>
                    <Link href={"/user/account/edit/phone"} className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-3 text-[15px] rounded-lg">
                      Cập nhật
                    </Link>
                  </Box>
                  <Box className="flex items-center justify-between mt-4 ">
                    <div className="flex">
                      <div>
                        <Image
                          src={"/images/icon_email.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        <div>Địa chỉ email</div>
                        <div>uonghoanganh45@gmail.com</div>
                      </div>
                    </div>
                    <Link href={"/user/account/edit/email"} className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-3 text-[15px] rounded-lg">
                      Cập nhật
                    </Link>
                  </Box>
                </Box>
                <Box className="my-7">
                  <h3 className="text-[17px] font-normal text-[#64646D] mb-4">
                    Bảo mật
                  </h3>
                  <Box className="flex items-center justify-between border-b-2 pb-4 border-gray-100">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={"/images/icon_change_password.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        Đổi mật khẩu
                      </div>
                    </div>
                    <Link href={"/user/account/edit/pass"} className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-3 text-[15px] rounded-lg">
                      Cập nhật
                    </Link>
                  </Box>
                  <Box className="flex items-center justify-between mt-4 ">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={"/images/icon_pin.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        Thiết lập mã PIN
                      </div>
                    </div>
                    <Link href={"/user/account/security-settings/pin-code"} className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-3 text-[15px] rounded-lg">
                      Cập nhật
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <h3 className="text-[17px] font-normal text-[#64646D] mb-4">
                    Liên kết mạng xã hội
                  </h3>
                  <Box className="flex items-center justify-between border-b-2 pb-4 border-gray-100">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={"/images/icon_facebook.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        Facebook
                      </div>
                    </div>
                    <button className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-4 text-[15px] rounded-lg">
                      Liên kết
                    </button>
                  </Box>
                  <Box className="flex items-center justify-between mt-4 ">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={"/images/icon_google.png"}
                          alt=""
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="ms-3 text-base leading-6 text-gray-700">
                        Google
                      </div>
                    </div>
                    <button className="border-2 border-[#0D74E4] text-[#0D74E4] py-1.5 px-4 text-[15px] rounded-lg">
                      Liên kết
                    </button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg outline-none">
          <Box>
            <div className="border-b-[1.5px] mb-4">
              <h3 className="text-[18px] font-normal mb-4">
                Chọn quốc tịch
              </h3>
              <IoMdClose
                className="text-[28px] text-gray-400 absolute top-4 right-5 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div className="relative mt-2">
              <input
                className="w-full py-2 ps-9 pe-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-md"
                type="text"
                placeholder="Tìm kiếm nhanh"
              />
              <div className="absolute top-2 left-2">
                <img
                  className=""
                  src="https://frontend.tikicdn.com/_mobile-next/static/img/search.svg"
                ></img>
              </div>
            </div>
            <div className="overflow-y-auto h-96 my-2">
              {(Object.keys(country) || []).map((item, index) => {
                return (
                  <Box key={index}>
                    <h4 className="text-gray-400 text-lg font-medium mt-5">
                      {item}
                    </h4>
                    <div>
                      {(country[item] || []).map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 border-b-[1.3px] py-2 "
                          >
                            <input
                              type="radio"
                              name="country"
                              value={item}
                              className="cursor-pointer w-[15px] h-[15px] mr-1 accent-[#0C5CB6]"
                            />
                            <span className="label text-md font-light leading-5 flex items-center">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </Box>
                );
              })}
            </div>
          </Box>
          <Box>
            <button
              className="w-full mt-4 py-2 rounded-md bg-blue-600 text-white "
              type="submit"
            >
              Lưu thay đổi
            </button>
          </Box>
        </Box>
      </Modal>
    </LayoutAccount>
  );
}

export default Accoutn;
