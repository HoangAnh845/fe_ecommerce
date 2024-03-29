"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import { get_client } from "@/services/clients";
import { get_signature } from "@/services/signature";
import { update_client } from "@/services/clients";
import { IoLockOpen } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
import moment from "moment";

function editOauthClient() {
  const { id } = useParams(); // là hook của nextjs để lấy params từ url
  const Router = useRouter();
  const [formData, setFormData] = React.useState({
    id: id,
    name: "",
    redirect: "",
    personal_access_client: "",
  });
  const [data, setData] = React.useState({
    name: "",
    redirect: "",
    personal_access_client: "",
  });
  const [signature, setSignature] = React.useState({
    client_id: "",
    signature: "",
    timestamp: "",
  });
  const [activelock, setActiveLock] = useState(true);
  

  async function fetchData() {
    const res = await get_client(id);
    const personal_lock = await res.data[0]["personal_access_client"];
    setActiveLock(Number(personal_lock) === 1 ? true : false);
    setData(res.data[0]);
  }

  async function signatureData() {
    const res = await get_signature(id);
    setSignature(res.data[0]);
  }

  
  useEffect(() => {
    fetchData();
    signatureData();
  }, []);

  

  const timestamp = Number(signature?.["timestamp"]);
  const date = moment.unix(timestamp).format("h:mm, DD/MM/YYYY");
  
  
  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await update_client(formData);
    if(res.status){
      toast.success(res.message);
      Router.push("/dashboard/client");
    }
  };

  const handleLock = (personal_lock: number) => {
    setActiveLock(!activelock);
    setFormData({
      ...formData,
      personal_access_client: !activelock ? "1" : "0",
    });
  };
  

  return (
    <Layout>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
        <div className="mb-10">
          Home {">"} <b className="text-blue-500">Edit ID</b>
        </div>
        <div className="flex">
          <form className="w-5/12" action="#" onSubmit={handleEdit}>
            <div className="my-4">
              <input
                className="px-5 pl-2 py-2 rounded-lg w-10/12 border border-gray-300"
                type="text"
                placeholder="Name..."
                value={"Web Application"}
                disabled
              />
            </div>
            <div className="my-4">
              <input
                className="px-5 pl-2 py-2 rounded-lg w-10/12"
                type="text"
                name="name"
                placeholder="Name..."
                value={data["name"]}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="">
              <input
                className="px-5 pl-2 py-2 rounded-lg w-10/12"
                type="url"
                placeholder="https://www.example.com"
                value={data?.["redirect"]}
                onChange={(e) =>
                  setFormData({ ...formData, redirect: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-md mt-5 cursor-pointer"
            >
              Edit
            </button>
          </form>
          <div className="w-5/12 border bg-white p-4 rounded-lg leading-10 overflow-auto">
            <div>
              <b className="mr-2">Created_at: </b>
              {date}
            </div>
            <div>
              <b className="mr-2">clientId: </b>
              {signature?.["client_id"]}
            </div>
            <div className="flex gap-2">
              <b>signature: </b>
              {signature?.["signature"]}
            </div>
            <div className="flex gap-2">
              <b>Action: </b>
              {activelock === true ? (
                <IoLockOpen
                  onClick={() =>
                    handleLock(Number(data?.["personal_access_client"]))
                  }
                  className="mt-2 text-lg cursor-pointer"
                />
              ) : (
                <IoLockClosedSharp
                  onClick={() =>
                    handleLock(Number(data?.["personal_access_client"]))
                  }
                  className="mt-2 text-lg cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default editOauthClient;
