"use client";
import React from "react";
import LayoutAccount from "@/components/LayoutAccount";
import useWindowSize from "@/hooks/useWindowSize";
import { Box } from "@mui/material";
import FormAddress from "@/components/FormAddress";

function AddAddress() {
  return (
    <LayoutAccount className="" linkBack="/user/address">
      <Box className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Tạo sổ địa chỉ</h1>
      </Box>
      <FormAddress />
    </LayoutAccount>
  );
}

export default AddAddress;
