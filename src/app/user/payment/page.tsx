"use client";
import LayoutAccount from "@/components/LayoutAccount";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { FaCreditCard } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

function createData(
  order_id: string,
  payment_date: string,
  payment_type: string,
  amount: number,
  total: number
) {
  return {
    order_id,
    payment_date,
    payment_type,
    amount,
    total,
    history: [
      {
        name: "Găng Tay Cụt Ngón, Bao Tay Tập Gym Thể Thao Đa Năng Dành Cho Phượt Thủ Phong Cách",
        shipp: "Được giao bởi TikiNOW Smart Logistics ",
        amount: 3,
        total: 800,
      },
      {
        name: "Xe Máy Honda Vario 125 Phiên Bản Thể Thao 2024",
        shipp: "Được giao bởi TikiNOW Smart Logistics ",
        amount: 1,
        total: 2000,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.order_id}
        </TableCell>
        <TableCell align="right">{row.payment_date}</TableCell>
        <TableCell align="right">{row.payment_type}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Giao dịch chi tiết
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="f font-bold">Tên sản phẩm</TableCell>
                    <TableCell className="f font-bold">
                      Hình thực vận chuyển
                    </TableCell>
                    <TableCell className="f font-bold" align="left">
                      Số lượng
                    </TableCell>
                    <TableCell className="f font-bold" align="left">
                      Thanh toán ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" className="w-5/12">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="left">{historyRow.shipp}</TableCell>
                      <TableCell align="left">{historyRow.amount}</TableCell>
                      <TableCell align="left">{historyRow.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("3050DHZ", "2024-04-22", "Tiền mặt", 4, 2800),
  createData("3050DHZ", "2024-04-22", "Tiền mặt", 4, 2800),
  createData("3050DHZ", "2024-04-22", "Tiền mặt", 4, 2800),
  createData("3050DHZ", "2024-04-22", "Tiền mặt", 4, 2800),
  createData("3050DHZ", "2024-04-22", "Tiền mặt", 4, 2800),
];

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
      className="sm:w-11/12 sm:mx-auto sm:overflow-scroll"
      {...other}
    >
      {value === index && (
        <Box className="sm:w-max">
          <TableContainer component={Paper} className="">
            <Table aria-label="collapsible table" className="">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell className="text-[16px] text-gray-600 font-medium">
                    Mã đơn hàng
                  </TableCell>
                  <TableCell
                    className="text-[16px] text-gray-600 font-medium"
                    align="right"
                  >
                    Thời gian giao dịch
                  </TableCell>
                  <TableCell
                    className="text-[16px] text-gray-600 font-medium"
                    align="right"
                  >
                    Loại giao dịch
                  </TableCell>
                  <TableCell
                    className="text-[16px] text-gray-600 font-medium"
                    align="right"
                  >
                    Số lượng
                  </TableCell>
                  <TableCell
                    className="text-[16px] text-gray-600 font-medium"
                    align="right"
                  >
                    Tổng thanh toán
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,index) => (
                  <Row key={index} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
    <Box className="flex flex-col justify-center items-center h-[70vh] px-6 text-center lg:bg-white lg:rounded-lg">
      <div>
        <Image
          className="mx-auto"
          src="https://frontend.tikicdn.com/_mobile-next/static/img/mascot_fail.svg"
          width={150}
          height={150}
          alt=""
        />
      </div>
      <div className="text-gray-500 text-sm font-base">
        Lưu lại thông tin thanh toán giúp bạn đặt hàng nhanh chóng và dễ dàng
        hơn
      </div>
      <Link className="sm:hidden bg-yellow-300 py-2 px-8 rounded-lg mt-5 text-sm" href="/">Tiếp tục mua sắm</Link>
    </Box>
  );
}

function Payment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Box>
        <Box className="py-5 sm:hidden ">
          <h1 className="text-[22px] font-light ">Lịch sử giao dịch</h1>
        </Box>
        {rows.length === 0 ? (
          <NotFound />
        ) : (
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
              className="bg-white border-b-2 mb-5"
            >
              <Tab
                icon={<LiaMoneyBillAlt className="text-2xl sm:text-xl" />}
                label="Tiền mặt"
                {...a11yProps(0)}
              />
              <Tab
                icon={<FaCreditCard className="text-2xl sm:text-xl" />}
                label="Chuyển khoản"
                {...a11yProps(1)}
              />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
          </Box>
        )}
        {rows.length !== 0 && <Pagination count={5} className="mt-5 flex justify-center" />}
      </Box>
    </LayoutAccount>
  );
}

export default Payment;
