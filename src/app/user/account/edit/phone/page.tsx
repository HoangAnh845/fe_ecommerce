import LayoutAccount from "@/components/LayoutAccount";
import { LiaPhoneSolid } from "react-icons/lia";
import React from "react";

function UpdatePhone() {
  return (
    <LayoutAccount className="" linkBack="/user/account/edit">
      <div className="py-5 sm:hidden">
        <h1 className="text-[22px] font-light ">Cập nhật số điện thoại</h1>
      </div>
      <div className="bg-white lg:py-7 w-full rounded-lg">
        <div className="w-6/12 sm:w-full mx-auto lg:border-2 rounded-lg p-5">
          <label>Số điện thoại</label>
          <div className="relative mt-1 mb-8">
            <LiaPhoneSolid className="absolute top-3 left-2 text-xl text-gray-400" />
            <input
              className="border-2 rounded-lg py-2 ps-8 pe-1 w-full outline-none"
              type="number"
              placeholder="Nhập số điện thoại"
            />
              <div className="text-xs mt-1 lg:hidden">
                Mã xác thực (OTP) sẽ được gửi đến số điện thoại này để xác
                minh số điện thoại là của bạn.
              </div>
          </div>
          <button className="bg-blue-500 w-full rounded-lg text-white py-2">Lưu thay đổi</button>
        </div>
      </div>
    </LayoutAccount>
  );
}

export default UpdatePhone;
