"use client";
import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Layout from "@/components/Layout";
import { get_all_clients } from "@/services/clients";
import { delete_client } from "@/services/clients";
import { update_client } from "@/services/clients";
import { IoLockOpen } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";

const Client = function () {
  const [data, setData] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(false);
  // const [formData, setFormData] = useState({id:0,personal_access_client: ""});
  // const [activelock, setActiveLock] = useState(true);

  async function fetchData() {
    const res_clients = await get_all_clients();
    setData(res_clients.data);
  }

  const handleDelete = async (id: any) => {
    const res = await delete_client(id);
    if (res.status) {
      toast.success(res.message);
      setDeleteFlag(!deleteFlag);
    }
  };

  const handleEdit = async (id:Number,personal_access_client:String) => {
    // e.preventDefault();
    const res = await update_client({idClient:id,personal_access_client:personal_access_client});
    if(res.status){
      toast.success(res.message);
      setDeleteFlag(!deleteFlag);
    }
  };

  useEffect(() => {
    // Dùng để gọi API khi component được render
    fetchData();
  }, [deleteFlag]); // Khi deleteFlag thay đổi thì useEffect sẽ chạy lại

  return (
    <Layout>
      <div className="w-full">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  OAuth Client IDs
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href={"/dashboard/client/add-oauthclient"}>
                    Create credentials
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Id
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Type
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Secret
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Creation date
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {(data || []).map((client: any) => {
                  return (
                    <tr key={client.id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {client.id}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {client.name}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {client.type}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {client.secret}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {client.created_at}
                      </td>
                      <td className="flex gap-2 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Link
                          href={`/dashboard/client/edit-oauthclient/${client.id}`}
                        >
                          <MdEdit className="text-2xl p-1 border hover:border-black cursor-pointer" />
                        </Link>
                        <MdDelete
                          className="text-2xl p-1 border hover:border-black cursor-pointer"
                          onClick={() => handleDelete(client.id)}
                        />
                        {client.personal_access_client === 1 ? (
                          <IoLockOpen onClick={()=>handleEdit(client.id,"1")} className="text-2xl p-1 border hover:border-black cursor-pointer" />
                        ) : (
                          <IoLockClosedSharp onClick={()=>handleEdit(client.id,"0")} className="text-2xl p-1 border hover:border-black cursor-pointer" />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Client;
