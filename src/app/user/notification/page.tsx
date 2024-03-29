"use client";
import LayoutAccount from "@/components/LayoutAccount";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { RxDotsVertical } from "react-icons/rx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  NoticeAllIcon,
  NoticeDiscountIcon,
  NoticeOrderIcon,
  NoticeSystemIcon,
} from "../../../../public/icons";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    <Box className="w-fit mx-auto h-100 py-20 text-center">
      <Image
        src="/supmer.svg"
        alt=""
        width={170}
        height={170}
        className="mx-auto"
      />
      <Box>
        <p className="my-3 text-[16px] text-gray-500">Bạn chưa có thông báo</p>
        <button className="bg-[#FDDA43] py-2 px-12 rounded-md">
          Tiếp tục mua sắm
        </button>
      </Box>
    </Box>
  );
}

function Notification() {
  const [value, setValue] = useState(0);
  const [response, setResponse] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Box className="lgpy-5 ">
        <h1 className="text-[22px] font-light mb-3 sm:hidden">Thông báo của tôi</h1>
        <Box sx={{ width: "100%", bgcolor: "#fff" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="flex justify-between items-center pr-3"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab
                icon={<NoticeAllIcon width="1.7rem" height="1.7rem" />}
                {...a11yProps(0)}
              />
              <Tab
                icon={<NoticeDiscountIcon width="1.7rem" height="1.7rem" />}
                {...a11yProps(1)}
              />
              <Tab
                icon={<NoticeOrderIcon width="1.7rem" height="1.7rem" />}
                {...a11yProps(2)}
              />
              <Tab
                icon={<NoticeSystemIcon width="1.7rem" height="1.7rem" />}
                {...a11yProps(3)}
              />
            </Tabs>
            <Box
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <RxDotsVertical className="text-2xl text-gray-600 cursor-pointer" />
            </Box>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className="lg:mt-4 lg:ms-[-130px]"
            >
              {["Đánh dấu đọc tất cả", "Xóa tất cả thông báo"].map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {!response ? <NotFound /> : "Item One"}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {!response ? <NotFound /> : "Item Two"}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {!response ? <NotFound /> : "Item Three"}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {!response ? <NotFound /> : "Item Foure"}
          </CustomTabPanel>
        </Box>
      </Box>
    </LayoutAccount>
  );
}

export default Notification;
