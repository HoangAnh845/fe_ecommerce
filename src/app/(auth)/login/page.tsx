"use client";
import { useState } from "react";
import { login_me } from "@/services/auth";
import { user_profile } from "@/services/user";
import { GoPersonFill } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const Router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login_me(formData);
    
    if (response.status === 200) {
      console.log(response);
      
    } else {
      // Trường hợp có lỗi xác thực
      [response.message].map((item: any) => {
        const message = typeof item === "string" ? item : Object.values(item);
        toast.error(`${message}`);
      });
    }
    // if (response.status) {
    //   if (typeof window !== "undefined" && window.localStorage) {
    //     // Kiểm tra xem có phải môi trường window không
    //     localStorage.setItem("login", JSON.stringify(response));
    //     Cookies.set("token", JSON.stringify(response.access_token));
    //   }
    //   toast.success("Login Thành Công !");
    //   const getUser: any = await user_profile(response.access_token);
    //   const user = JSON.parse(getUser);
    //   // Cookies.set("user", JSON.stringify(getUser));

    //   // Điều hướng trang
    //   user.role === "admin"
    //     ? Router.push("/dashboard")
    //     : Router.push("/user/profile");
    // } else {
    //   if (typeof response.message === "string") {
    //     toast.error(response.message);
    //   } else {
    //     for (const [key, value] of Object.entries(response.message)) {
    //       // Object.entries dùng để lấy ra các cặp key-value của object
    //       toast.error(`${value}`);
    //     }
    //   }
    // }
  };
  return (
    <section className="relative w-full h-screen">
      <Toaster position="top-right" reverseOrder={true} />
      <div className="absolute top-0 z-[-1] w-full h-screen">
        <img
          src="/images/auth_background.png"
          width={"100%"}
          style={{ height: "100%" }}
        />
      </div>
      <div className="flex items-center flex-col justify-center container mx-auto w-5/12 h-full">
        <div className="bg-[#84BAF4] w-full text-center p-5 rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full"
                src="/images/logo.png"
                width={50}
                height={50}
                alt="logo"
              />
              <span className=" text-white text-2xl">LOGO</span>
            </div>
            <Link
              className="border rounded-md bg-white text-blue-500 px-5 py-2 text-sm"
              href="/register"
            >
              Create Account
            </Link>
          </div>
          <div className="mt-8">
            <Image
              className="mx-auto"
              src="/images/auth_avater.png"
              width={250}
              height={250}
              alt="auth"
            />
            <div className="text-white px-10 h-[76px] overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              aliquam. Animi enim, mollitia sunt praesentium neque eaque!
            </div>
          </div>
        </div>
        <div className="bg-white w-full text-center p-5 rounded-bl-lg rounded-br-lg">
          <div className="mb-5">
            <h1 className="text-3xl text-blue-950">USER LOGIN</h1>
            <p className="text-sm text-yellow-400">Welcome back!</p>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-4">
              <GoPersonFill className="text-[22px]" />
              <input
                className="w-10/12 border px-2 py-2 bg-[#AAC2E0] placeholder:text-white placeholder:text-sm outline-none text-white "
                id="email"
                type="text"
                name="email"
                placeholder="Email or Username"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <RiLockPasswordFill className="text-[22px]" />
              <input
                className="my-3 w-10/12 border px-2 py-2 bg-[#AAC2E0] placeholder:text-white placeholder:text-sm outline-none text-white"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="w-11/12 mx-auto flex justify-between items-center gap-5">
              <div className="text-sm pl-9 flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                <div>Remember me</div>
              </div>
              <div>
                <Link className="text-sm" href="">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              className="mt-7 bg-yellow-500 text-white px-10 py-2 rounded-lg"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
