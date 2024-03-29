"use client";
import { useCallback, useState } from "react";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { TbUsers } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { GiShoppingCart } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbBrandBlogger } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { logout_me } from "@/services/auth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState(false);
  const [issetting, setIssetting] = useState(false);
  const pathname = usePathname();
  const Router = useRouter();
  const user = Cookies.get("user")
    ? JSON.parse(Cookies.get("user") || "{}")
    : {};

  const token = Cookies.get("token")
    ? JSON.parse(Cookies.get("token") || "{}")
    : {};

  const handleLogout = async () => {
    const res = await logout_me(token);
    if (res.status) {
      Cookies.remove("token");
      Cookies.remove("user");
      Router.push("/login");
    } else {
      console.log("error in logout");
    }
  };
  return (
    <section className="bg-[#e6f0ffcf] h-screen w-full">
      <div className="flex gap-5">
        <div className="w-3/12 bg-white p-5 h-screen">
          <div className="mb-5">
            <Image
              className="mx-auto"
              src="/images/logo.png"
              width={65}
              height={65}
              alt="logo"
            />
          </div>
          <nav>
            <ul className="">
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <LiaTachometerAltSolid />
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <TbUsers />
                <Link href={"/dashboard/users"}>Users</Link>
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <RiServiceLine />
                <Link href={"/dashboard/client"}>APIs & Services</Link>
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <GrProjects />
                Products
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <GiShoppingCart />
                Orders
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <LiaPeopleCarrySolid />
                Transports
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <TbBrandBlogger />
                Blogs
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <CiImageOn />
                Images
              </li>
              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <CiDiscount1 />
                Discounts
              </li>

              <li
                className={`hover:bg-blue-500 hover:text-white flex items-center gap-5 cursor-pointer p-2 mb-2 rounded-lg`}
              >
                <IoChatboxEllipsesOutline />
                Chats
              </li>
            </ul>
          </nav>
        </div>
        <div className="container mx-auto p-5 pl-2">
          <div className="flex justify-between mb-9 mt-5">
            <div className="relative w-4/12">
              <input
                className="w-full pl-6 pr-10 py-2 rounded-lg placeholder:text-sm bg-[#F7F7F7] border border-black outline-none"
                type="text"
                placeholder="Search Product"
              />
              <IoIosSearch className="absolute top-[25%] right-[5%] text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-5">
              <div>
                <input
                  className="px-3 py-2 bg-[#F7F7F7] border border-black rounded-lg"
                  type="date"
                />
              </div>
              <div>
                <MdOutlineNotifications className="text-2xl" />
              </div>
              <div className="relative">
                <IoSettingsOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => {
                    setIssetting((prev) => !prev);
                  }}
                />
                {issetting && (
                  <ul className="absolute top-10 left-2 border border-black rounded-md bg-white leading-10">
                    <li className="cursor-pointer hover:bg-blue-500 hover:text-white px-10">
                      Profile
                    </li>
                    <li className="cursor-pointer hover:bg-blue-500 hover:text-white px-10">
                      Setting
                    </li>
                    <li
                      className="cursor-pointer hover:bg-blue-500 hover:text-white px-10"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex gap-3">
                <Image
                  className="rounded-full"
                  src="/Images/avater_default.jpg"
                  width={40}
                  height={40}
                  alt="Avater"
                />
                <div className="text-sm">
                  <p>{user.name}</p>
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
