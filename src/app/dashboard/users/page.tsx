"use client";
import React, { use, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { get_all_users } from "@/services/user";
import { get_signature } from "@/services/signature";
import toast, { Toaster } from "react-hot-toast";
import { clear } from "console";

function User() {
  const [data, setData] = React.useState([]);
  async function fetchData() {
    // Tạo chữ ký
    const signature = await get_signature({ 
      idClient: 7, 
      secretClient: "fzy3sonvDOITixsxoE9erP8BzdfBdCliCkZifCua"
    });    
    // Sử dụng chữ ký để truy cập người dùng
    const res = await get_all_users(signature['clientId'], signature['signature'],signature['timestamp']);    
    if(res){
      const jsonRes = JSON.parse(res);
      if(jsonRes.status) {
        setData(jsonRes.data);
      }else{
        toast.error(jsonRes.message);
      }
    }else{
      toast.error("Khóa bí mật của bạn bị vô hiệu");
    }
    
  }
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    // <Layout>
      <div className="w-10/12 mx-auto my-10">
      <Toaster position="top-right" reverseOrder={true} />
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  id
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Name
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Email
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {(data || []).map((item) => {
                return (
                  <tr key={item?.['id']}>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item?.['id']}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">
                    {item?.['name']}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                    {item?.['email']}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                        Edit
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    // </Layout>
  );
}

export default User;
