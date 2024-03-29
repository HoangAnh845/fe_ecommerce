import Layout from "@/components/Layout";
import LayoutAccount from "@/components/LayoutAccount";
import Link from "next/link";
import { Box } from "@mui/material";
import { TiLockClosed } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";

function securitySettings() {
  return (
    <LayoutAccount className="" linkBack="/user/account">
      <Link
        href="/user/account/security-settings/pin-code"
        className="flex items-center justify-between bg-white px-4 py-3"
      >
        <div>
          <TiLockClosed className="inline-block text-2xl text-gray-400 mb-1 mr-2" />
          <span className="inline-block text-sm font-base">Thiết lập mã PIN</span>
        </div>
        <FaAngleRight className="text-gray-600"/>
      </Link>
    </LayoutAccount>
  );
}

export default securitySettings;
