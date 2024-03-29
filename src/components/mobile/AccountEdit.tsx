"use client";
import React from "react";
import { useState } from "react";
import date from "../../../public/date.json";
import country from "../../../public/country.json";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import LayoutAccount from "../LayoutAccount";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { TbUserHeart } from "react-icons/tb";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsGenderAmbiguous } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // height: "100vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AccountEditMobile() {
  const [open, setOpen] = useState(false);
  const handleOpen = (index: number) => {
    setWhereChange(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [whereChange, setWhereChange] = useState<number>(0);

  const menu_account = [
    {
      title: "Họ & Tên ",
      name: "Hoàng Anh",
      type: "text",
      showType: "tabs",
      placeholder: "Nhập họ & tên",
      label: "Họ & tên gồm 2 từ trở lên",
      icon: <MdOutlinePerson className="text-2xl text-gray-400" />,
      link: "",
    },
    {
      title: "Nickname",
      name: "Hoàng Anh",
      type: "text",
      showType: "tabs",
      placeholder: "Thêm Nickname",
      label:
        '3-20 kí tự, chỉ bao gồm: chữ, số, "_" và ".". Bạn không thể thay đổi sau khi đã lưu.',
      icon: <TbUserHeart className="text-2xl text-gray-400" />,
      link: "",
    },
    {
      title: "Ngày sinh",
      name: "10/10/1999",
      type: "date",
      showType: "tabs",
      icon: <LiaBirthdayCakeSolid className="text-2xl text-gray-400" />,
      link: "",
    },
    {
      title: "Giới tính",
      name: "Nam",
      type: "radio",
      showType: "tabs",
      icon: <BsGenderAmbiguous className="text-2xl text-gray-400" />,
      link: "",
    },
    {
      title: "Quốc tịch",
      name: "Việt Nam",
      type: "select",
      showType: "tabs",
      icon: <IoEarthOutline className="text-2xl text-gray-400" />,
      link: "",
    },
    {
      title: "Số điện thoại",
      name: "0123456789",
      type: "text",
      showType: "link",
      icon: <FiPhone className="text-2xl text-gray-400" />,
      link: "/user/account/edit/phone",
    },
    {
      title: "Địa chỉ email",
      name: "uonghoanganh45@gmail.com",
      type: "text",
      showType: "link",
      icon: <MdOutlineEmail className="text-2xl text-gray-400" />,
      link: "/user/account/edit/email",
    },
    {
      title: "Đổi mật khẩu",
      name: "",
      type: "text",
      showType: "link",
      icon: <IoIosLock className="text-2xl text-gray-400" />,
      link: "/user/account/edit/pass",
    },
  ];
  return (
    <LayoutAccount className="relative pb-[19%]" linkBack="/user/account">
      <Box className="absolute top-[7%] left-[36%]">
        <div className="relative rounded-full border-4 border-white w-fit py-7 px-8 bg-[#EFF8FF]">
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
      </Box>
      <Box className="pt-[15%]">
        {menu_account.map((item, index) => (
          <Box
            key={index}
            className={`flex ${
              index === 7 && "items-center"
            } gap-4 bg-white my-3 py-4 px-6`}
          >
            <div>{item.icon}</div>
            <div className="w-10/12 text-sm">
              <p>{item.title}</p>
              <span className="font-light">{item.name}</span>
            </div>
            { item.showType === 'link' ? (
              <Link href={item?.link}>
                <FaAngleRight className="my-auto text-gray-400 text-xl" />
              </Link>
            ) : (
              <FaAngleRight
                onClick={() => handleOpen(index)}
                className="my-auto text-gray-400 text-xl"
              />
            )}
          </Box>
        ))}
      </Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="relative"
      >
        <Box sx={style} className="outline-none">
          <Box
            onClick={handleClose}
            className={`absolute ${
              whereChange === 4 ? "top-[-3%]" : "top-[-8%]"
            } right-[-4%] p-2 rounded-full bg-gray-400 text-xl text-white`}
          >
            <IoMdClose />
          </Box>
          <div className="">{menu_account[whereChange].title}</div>
          {menu_account[whereChange].type === "text" &&
            menu_account[whereChange].showType === "tabs" && (
              <Box>
                <div>
                  <input
                    className="w-full py-2 px-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-md"
                    type="text"
                    placeholder={menu_account[whereChange].placeholder}
                  />
                  <label className="text-xs" htmlFor="name">
                    {menu_account[whereChange].label}
                  </label>
                </div>
              </Box>
            )}
          {menu_account[whereChange].type === "date" &&
            menu_account[whereChange].showType === "tabs" && (
              <Box>
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
              </Box>
            )}
          {menu_account[whereChange].type === "radio" &&
            menu_account[whereChange].showType === "tabs" && (
              <Box>
                <div className="mt-2">
                  <label className="flex items-center mr-5 mb-3 cursor-pointer">
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
                  <label className="flex items-center mr-5 mb-3 cursor-pointer">
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
                  <label className="flex items-center mr-5 mb-3 cursor-pointer">
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
                </div>
              </Box>
            )}
          {menu_account[whereChange].type === "select" && (
            <Box>
              <div className="relative mt-2">
                <input
                  className="w-full py-1 ps-8 pe-3 border rounded-md outline-blue-300 placeholder:text-gray-400 placeholder:text-xs"
                  type="text"
                  placeholder="Tìm kiếm nhanh"
                />
                <div className="absolute top-2 left-2">
                  <img
                    className=""
                    src="https://frontend.tikicdn.com/_mobile-next/static/img/search.svg"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="overflow-scroll h-96 my-2">
                {(Object.keys(country) || []).map((item, index) => {
                  return (
                    <Box key={index}>
                      <h4 className="text-gray-400 text-md font-medium mt-5">
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
                              <span className="label text-xs font-light leading-5 flex items-center">
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
          )}
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

export default AccountEditMobile;
