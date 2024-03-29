"use client";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";
import AccountEditMobile from "@/components/mobile/AccountEdit";

function AccountEdit() {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  return (
    isMobile && <AccountEditMobile />
  );
}

export default AccountEdit;
