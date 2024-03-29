import FormAddress from "@/components/FormAddress";
import LayoutAccount from "@/components/LayoutAccount";
import React from "react";

function UpdateAddress() {
  return (
    <LayoutAccount className="" linkBack="/user/address">
      <FormAddress />
    </LayoutAccount>
  );
}

export default UpdateAddress;
