import React, { use, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import { login_me } from "@/services/auth";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#fff",
  boxShadow: 24,
  borderRadius: "10px",
};

export default function LoginModal({ isopen }: { isopen: boolean }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isactive, setIsactive] = useState(false);
  const [error, setError] = useState<{
    email: string[];
    password: string[];
    login: string;
  }>({
    email: [],
    password: [],
    login: "",
  });
  const [open, setOpen] = useState(isopen);

  const [showPassword, setShowPassword] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // useEffect(() => {
  //   setOpen(isopen);
  // }, [isopen]);
  console.log("--- open ---", open, "log____", isopen);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await login_me(formData);

    if (response.status === 200) {
      console.log(response);
    } else {
      // Trường hợp có lỗi xác thực
      if (typeof response.message !== "string") {
        [response.message].map((item: any) => {
          setError({
            email: item.email || [],
            password: item.password || [],
            login: "",
          });
        });
      } else {
        setError({ email: [], password: [], login: response.message });
      }
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="">
        <Box sx={style} className="flex">
          <button
            className="absolute right-[-2.5%] top-[-5%] bg-white p-2.5 rounded-full"
            onClick={handleClose}
          >
            <IoMdClose className="text-3xl text-[#999999] font-bold" />
          </button>
          <Grid container columns={10}>
            <Grid item xs={6} px={5} pt={4} pb={8} className="">
              {isactive && <button className="text-[#787878] my-5 ml-[-10px]"><FaChevronLeft className="text-[25px]" /></button>}
              <Box
                id="modal-modal-title"
                component="div"
                mb={0.5}
                className="text-[1.6rem] font-medium"
              >
                {!isactive ? "Đăng nhập bằng email" : "Quên mật khẩu ?"}
              </Box>
              <p>
                {!isactive
                  ? "Nhập email và mật khẩu tài khoản Tiki"
                  : "Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu"}
              </p>
              <Box component="form">
                <TextField
                  id="email-basic"
                  variant="standard"
                  placeholder="abc@email.com"
                  type="email"
                  error={error.email.length > 0}
                  fullWidth
                  sx={{ mt: 3 }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {error.email.length > 0 && (
                  <div className="text-[15px] mt-3 text-red-500">
                    {error.email}
                  </div>
                )}
                { !isactive && <FormControl variant="standard" sx={{ mt: 2 }} fullWidth>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    error={error.password.length > 0}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <span className="text-[18px] text-[#0C5CB6]">
                              Ẩn
                            </span>
                          ) : (
                            <span className="text-[18px] text-[#0C5CB6]">
                              Hiện
                            </span>
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>}
                {error.password.length > 0 && (
                  <div className="text-[15px] mt-3 text-red-500">
                    {error.password}
                  </div>
                )}
                {error.login.length > 0 && (
                  <div className="text-[15px] mt-3 text-red-500">
                    {error.login}
                  </div>
                )}
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    py: 1.5,
                    // bgcolor: "#FF424E",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                  fullWidth
                  className="bg-[#FF424E] hover:bg-[#FF424E]"
                >
                  {!isactive ? "Đăng nhập" : "Lấy lại mật khẩu"}
                </Button>
              </Box>
              <Box mt={3}>
                <Typography fontSize={"0.9rem"} className="text-[#0D74E4] mt-5">
                  <button onClick={() => setIsactive(true)}>
                    {!isactive
                      ? "Quên mật khẩu?"
                      : "Đổi số điện thoại? Liên hệ Hotline 1900-6035"}
                  </button>
                </Typography>
                {!isactive && (
                  <Box fontSize={"0.9rem"}>
                    <span>Chưa có tài khoản?</span>{" "}
                    <Link href={"/register"} className="text-[#0D74E4]">
                      Tạo tài khoản
                    </Link>
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid item xs={4} className="">
              <Box
                className="bg-[#ECF6FF] rounded-r-xl flex flex-col items-center justify-center"
                p={5}
                height={"100%"}
                textAlign={"center"}
              >
                <Image
                  src="/images/banner-left_login.png"
                  width={250}
                  height={250}
                  alt="Picture of the loading"
                />
                <Typography
                  className="text-[#0D74E4]"
                  mt={3}
                  variant="h6"
                  component="h6"
                >
                  Mua sắm tại Tiki
                </Typography>
                <span className="text-[#0D74E4] font-medium text-sm">
                  Siêu ưu đãi mỗi ngày
                </span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
