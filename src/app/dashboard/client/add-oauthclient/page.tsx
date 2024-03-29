"use client";
import React from "react";
import Layout from "@/components/Layout";
import { add_client } from "@/services/clients";
import { add_signature } from "@/services/signature";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function addOauthClient() {
  const [formData, setFormData] = React.useState({
    type: "web",
    name: "",
    redirect: "",
  });
  const Router = useRouter();
  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tạo client ID
    const resClientID = await add_client(formData);
    
    if (resClientID.status) {
      toast.success("Tạo client-ID Thành Công!");
      // Tạo chữ ký cho client ID
      const resSignature = await add_signature(resClientID.data.id);
      if (resSignature.status) {
        console.log("Tạo chữ ký Thành Công!");
        Router.push("/dashboard/client");
      }
      setFormData({...formData, type: "web", redirect: "", name: "" });
    }
  };
  return (
    <Layout>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
        <div className="mb-10">
          Home {">"} <b className="text-blue-500">Client ID</b>
        </div>
        <div className="flex">
          <form className="w-5/12" action="#" onSubmit={handleCreate}>
            <select className="w-10/12 pl-2 py-2 cursor-pointer">
              <option value="application">Application type</option>
              <option value="web">Web Application</option>
              <option value="android">Android</option>
              <option value="extension">Chrome Extension</option>
              <option value="ios">IOS</option>
              <option value="devices">TVs and Limited Input devices</option>
              <option value="desktop">Desktop app</option>
              <option value="uwp">Universal Windows Platform (UWP)</option>
            </select>
            <div className="my-4">
              <input
                className="px-5 pl-2 py-2 rounded-lg w-10/12"
                type="text"
                placeholder="Name..."
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
                onChange={(e) =>
                  setFormData({ ...formData, redirect: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-md mt-5 cursor-pointer"
            >
              Create
            </button>
          </form>
          <div className="w-5/12"></div>
        </div>
      </div>
    </Layout>
  );
}

export default addOauthClient;
