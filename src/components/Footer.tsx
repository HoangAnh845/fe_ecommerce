import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

function Footer() {
  const data = [
    {
      title: "Đồ Chơi - Mẹ & Bé",
      keyword:
        "Thời Trang Cho Mẹ Và Bé / Đồ chơi / Đồ dùng cho bé / Chăm sóc nhà cửa / Chăm sóc mẹ mang thai, sau sinh / Dinh dưỡng cho bé / Tã, Bỉm / Dinh dưỡng cho người lớn / Dinh dưỡng cho mẹ / Thực phẩm ăn dặm / Chuẩn bị mang thai",
    },
    {
      title: "Thực Phẩm Tươi Sống",
      keyword:
        "Trái Cây / Thịt, Trứng / Cá, thuỷ hải sản / Rau củ quả / Thực phẩm Việt / Sữa, bơ, phô mai / Đông lạnh, mát / Dầu ăn, gia vị / Gạo, mì, nông sản / Đồ hộp, đóng gói / Bia, đồ uống / Thực phẩm chay / Dành cho trẻ em / Bánh kẹo, giỏ quà / Thức ăn, đồ thú cưng / Chăm sóc cá nhân / Chăm sóc nhà cửa",
    },
    {
      title: "Điện Thoại - Máy Tính Bảng",
      keyword:
        "Điện thoại Smartphone / Điện thoại bàn / Điện thoại phổ thông / Máy đọc sách / Máy tính bảng",
    },
    {
      title: "Làm Đẹp - Sức Khỏe",
      keyword:
        "Chăm sóc da mặt / Dụng cụ làm đẹp / Thực phẩm chức năng / Trang điểm / Chăm sóc cơ thể / Máy Massage & Thiết bị chăm sóc sức khỏe / Sản phẩm thiên nhiên & Khác / Chăm sóc tóc và da đầu / Chăm sóc cá nhân / Nước hoa / Hỗ trợ tình dục / Bộ sản phẩm làm đẹp / Dược mỹ phẩm",
    },
    {
      title: "Điện Gia Dụng",
      keyword: "Đồ dùng nhà bếp / Thiết bị gia đình",
    },
    {
      title: "Thời trang nữ",
      keyword:
        "Áo nữ / Đầm nữ / Quần nữ / Áo liền quần - Bộ trang phục / Áo khoác nữ / Đồ ngủ - Đồ mặc nhà nữ / Chân váy / Trang phục bơi nữ / Thời trang bầu và sau sinh / Thời trang trung niên",
    },
    {
      title: "Thời trang nam",
      keyword:
        "Áo thun nam / Quần nam / Áo vest - Áo khoác nam / Áo sơ mi nam / Đồ lót nam / Áo hoodie nam / Đồ ngủ, đồ mặc nhà nam / Đồ đôi - Đồ gia đình nam / Áo nỉ - Áo len nam / Đồ bơi - Đồ đi biển nam / Quần áo nam trung niên / Quần áo nam kích cỡ lớn",
    },
    {
      title: "Giày - Dép nữ",
      keyword:
        "Giày cao gót / Dép - Guốc nữ / Giày thể thao nữ / Giày sandals nữ / Giày búp bê / Giày boots nữ / Giày lười nữ / Phụ kiện giày / Giày Đế xuồng nữ",
    },
    {
      title: "Giày - Dép nam",
      keyword:
        "Giày lười nam / Giày tây nam / Giày thể thao nam / Dép nam / Giày sandals nam / Phụ kiện giày nam / Giày boots nam",
    },
    {
      title: "Túi thời trang nữ",
      keyword:
        "Túi đeo chéo, túi đeo vai nữ / Ví nữ / Túi xách tay nữ / Túi tote nữ / Phụ kiện túi",
    },
    {
      title: "Túi thời trang nam",
      keyword:
        "Ví nam / Túi đeo chéo nam / Túi xách công sở nam / Túi bao tử, túi đeo bụng",
    },
    {
      title: "Balo và Vali",
      keyword:
        "Balo / Túi du lịch và phụ kiện / Balo, cặp, túi chống sốc laptop / Vali, phụ kiện vali",
    },
    {
      title: "Phụ kiện thời trang",
      keyword: "Phụ kiện thời trang nữ / Mắt kính / Phụ kiện thời trang nam",
    },
    {
      title: "Đồng hồ và Trang sức",
      keyword:
        "Trang sức / Đồng hồ nữ / Đồng hồ nam / Phụ kiện đồng hồ / Đồng hồ trẻ em",
    },
    {
      title: "Laptop - Máy Vi Tính - Linh kiện",
      keyword:
        "Linh Kiện Máy Tính - Phụ Kiện Máy Tính / Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi / Thiết Bị Mạng / Thiết Bị Lưu Trữ / PC - Máy Tính Bộ / Laptop",
    },
    {
      title: "Bách Hóa Online",
      keyword:
        "Chăm sóc thú cưng / Đồ uống - Pha chế dạng bột / Thực phẩm Đóng hộp và Khô / Gia Vị và Chế Biến / Đậu & Hạt Các Loại / Đồ Ăn Vặt / Sữa và các Sản phẩm từ sữa / Đồ Uống Không Cồn / Đồ uống có cồn / Bộ quà tặng",
    },
    {
      title: "Hàng Quốc Tế",
      keyword:
        "Nhà Cửa - Đời Sống / Thời Trang / Ô tô, xe máy, xe đạp / Thiết Bị Số - Phụ Kiện Số / Thể thao - Dã ngoại / Làm Đẹp - Sức Khỏe / Sách, Văn phòng phẩm & Quà lưu niệm / Mẹ & Bé / Điện gia dụng / Bách hóa online / Máy Ảnh - Máy Quay Phim / Laptop & Máy Vi Tính / Sản phẩm - thiết bị công nghiệp / Tivi & Thiết Bị Nghe Nhìn / Điện Thoại - Máy Tính Bảng",
    },
    {
      title: "Thiết Bị Số - Phụ Kiện Số",
      keyword:
        "Phụ Kiện Điện Thoại và Máy Tính Bảng / Phụ kiện máy tính và Laptop / Thiết Bị Âm Thanh và Phụ Kiện / Thiết Bị Thông Minh và Linh Kiện Điện Tử / Thiết Bị Đeo Thông Minh và Phụ Kiện / Thiết Bị Chơi Game và Phụ Kiện",
    },
    {
      title: "Voucher - Dịch vụ",
      keyword:
        "Thanh toán hóa đơn / Khóa học / Du lịch - Khách sạn / Spa & Làm đẹp / Dịch vụ khác / Nhà hàng - Ăn uống / Sự kiện - Giải trí / Nha khoa - Sức khỏe / Phiếu quà tặng / Sim số - Thẻ cào - Thẻ game",
    },
    {
      title: "Ô Tô - Xe Máy - Xe Đạp",
      keyword:
        "Phụ kiện - Chăm sóc xe / Xe điện / Xe đạp / Xe máy / Ô tô / Xe Scooter / Dịch vụ, lắp đặt",
    },
    {
      title: "Nhà Sách Tiki",
      keyword:
        "Sách tiếng Việt / Văn phòng phẩm / Quà lưu niệm / English Books",
    },
    {
      title: "Điện Tử - Điện Lạnh",
      keyword:
        "Âm thanh & Phụ kiện Tivi / Phụ kiện điện lạnh / Tủ lạnh / Máy lạnh - Máy điều hòa / Máy giặt / Tủ đông - Tủ mát / Tivi / Máy nước nóng / Máy rửa chén / Máy sấy quần áo / Tủ ướp rượu",
    },
    {
      title: "Thể Thao - Dã Ngoại",
      keyword:
        "Trang phục thể thao nữ / Trang phục thể thao nam / Đồ dùng dã ngoại / Giày thể thao nam / Phụ kiện thể thao / Dụng cụ - thiết bị tập thể thao / Các môn thể thao khác / Dụng cụ câu cá / Thể thao dưới nước / Các môn thể thao đồng đội / Các môn thể thao chơi vợt / Các môn thể thao đối kháng  / Giày thể thao nữ / Thực phẩm bổ sung năng lượng / Dụng cụ leo núi",
    },
    {
      title: "Máy Ảnh - Máy Quay Phim",
      keyword:
        "Phụ Kiện Máy Ảnh, Máy Quay / Camera Giám Sát / Thiết Bị Ánh Sáng / Camera Hành Trình - Action Camera và Phụ Kiện / Balo - Túi Đựng - Bao Da / Ống Kính - Ống Ngắm / Ống Kính (Lens) / Thiết Bị Quay Phim / Máy Bay Camera và Phụ Kiện / Máy Ảnh",
    },
    {
      title: "Từ Khóa Được Quan Tâm",
      keyword:
        "máy sưởi / đèn sưởi / quạt tích điện sunhouse / máy sấy tóc philips / bàn ủi hơi nước đứng / bàn là hơi nước philip / may sưởi xiaomi / bình nươc nóng ariston / máy sưởi xiaomi / máy hút bụi giường nệm / cây nước nóng lạnh toshiba / robot hút bụi lau nhà của nhật / đèn sưởi âm trần / nồi cơm điện tefal",
    },
  ];
  return (
    <Box className="my-5 sm:hidden">
      <Box className="py-5">
        <Grid container className="justify-between">
          <Grid item xs={3} className="w-1/12">
            <h1 className="font-medium text-md mb-2">Hỗ trợ khách hàng</h1>
            <ul className="text-[14px] leading-8 text-[#9B9BA1] font-base">
              <li>
                Hotline: <b className="text-black font-normal">1900-6035</b>
              </li>
              <li className="hover:underline cursor-pointer ">
                (1000 đ/phút, 8-21h kể cả T7, CN)
              </li>
              <li className="hover:underline cursor-pointer ">
                Các câu hỏi thường gặp
              </li>
              <li className="hover:underline cursor-pointer ">
                Gửi yêu cầu hỗ trợ
              </li>
              <li className="hover:underline cursor-pointer ">
                Hướng dẫn đặt hàng
              </li>
              <li className="hover:underline cursor-pointer ">
                Phương thức vận chuyển
              </li>
              <li className="hover:underline cursor-pointer ">
                Chính sách đổi trả
              </li>
              <li className="hover:underline cursor-pointer ">
                Hướng dẫn trả góp
              </li>
              <li className="hover:underline cursor-pointer ">
                Chính sách hàng nhập khẩu
              </li>
              <li className="hover:underline cursor-pointer ">
                Hỗ trợ khách hàng: hotro@tiki.vn
              </li>
              <li className="hover:underline cursor-pointer ">
                Báo lỗi bảo mật: security@tiki.vn
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <h1 className="font-medium text-md mb-2">Về Tiki</h1>
            <ul className="text-[14px] leading-8 text-[#9B9BA1] font-base">
              <li className="hover:underline cursor-pointer ">
                Giới thiệu Tiki
              </li>
              <li className="hover:underline cursor-pointer ">Tiki Blog</li>
              <li className="hover:underline cursor-pointer ">Tuyển dụng</li>
              <li className="hover:underline cursor-pointer ">
                Chính sách bảo mật thanh toán
              </li>
              <li className="hover:underline cursor-pointer ">
                Chính sách bảo mật thông tin cá nhân
              </li>
              <li className="hover:underline cursor-pointer ">
                Chính sách giải quyết khiếu nại
              </li>
              <li className="hover:underline cursor-pointer ">
                Điều khoản sử dụng
              </li>
              <li className="hover:underline cursor-pointer ">
                Giới thiệu Tiki Xu
              </li>
              <li className="hover:underline cursor-pointer ">
                Tiếp thị liên kết cùng Tiki
              </li>
              <li className="hover:underline cursor-pointer ">
                Bán hàng doanh nghiệp
              </li>
              <li className="hover:underline cursor-pointer ">
                Điều kiện vận chuyển
              </li>
            </ul>
          </Grid>
          <Grid item xs={2} className="ml-[-70px]">
            <h1 className="font-medium text-md mb-2">Hợp tác và liên kết</h1>
            <ul className="text-[14px] leading-8 text-[#9B9BA1] font-base">
              <li className="hover:underline cursor-pointer ">
                Quy chế hoạt động Sàn GDTMĐT
              </li>
              <li className="hover:underline cursor-pointer ">
                Bán hàng cùng Tiki
              </li>
            </ul>
            <h1 className="font-medium text-md my-2">Chứng nhận bởi</h1>
            <ul className="text-[14px] leading-8 text-[#9B9BA1] font-base flex items-center">
              <li className="hover:underline cursor-pointer ">
                <img
                  src="/images/footer/bo-cong-thuong-2.png"
                  alt=""
                  className="w-7"
                />
              </li>
              <li className="hover:underline cursor-pointer mr-2 ml-1">
                <img
                  src="/images/footer/bo-cong-thuong.svg"
                  alt=""
                  className="w-[5rem]"
                />
              </li>
              <li className="hover:underline cursor-pointer ">
                <img
                  src="/images/footer/dmca_protected.png"
                  alt=""
                  className="w-[2.3rem]"
                />
              </li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h1 className="font-medium text-md mb-2">Phương thức thanh toán</h1>
            <div>
              <Image
                src={"/images/footer/payment.png"}
                alt=""
                width={200}
                height={50}
              />
            </div>
            <h1 className="font-normal text-md mt-2 mb-1">Dịch vụ giao hàng</h1>
            <div className="ml-[-9px]">
              <Image
                src={"/images/footer/tiki_now.png"}
                alt=""
                width={110}
                height={50}
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <h1 className="font-medium text-md mb-2">Kết nối với chúng tôi</h1>
            <ul className="flex gap-3">
              <li className="hover:underline cursor-pointer ">
                <img src="/images/footer/facebook.svg" alt="" className="w-8" />
              </li>
              <li className="hover:underline cursor-pointer ">
                <img src="/images/footer/youtube.svg" alt="" className="w-8" />
              </li>
              <li className="hover:underline cursor-pointer ">
                <img src="/images/footer/zalo.svg" alt="" className="w-8" />
              </li>
            </ul>
            <h1 className="font-normal text-md mt-7 mb-2">
              Tải ứng dụng trên điện thoại
            </h1>
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/images/footer/qrcode.png"}
                  alt=""
                  width={80}
                  height={40}
                />
              </div>
              <div className="">
                <Image
                  className="mb-2"
                  src={"/images/footer/appstore.png"}
                  alt=""
                  width={120}
                  height={40}
                />
                <Image
                  src={"/images/footer/playstore.png"}
                  alt=""
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="border-t-2 border-b-2 py-5">
        <h1 className="font-medium text-md mb-2">Công ty TNHH TIKI</h1>
        <ul className="text-[14px] leading-8 text-[#9B9BA1] font-base">
          <li className="">
            Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ
            Chí Minh
          </li>
          <li className="">
            Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và
            Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
          </li>
          <li>
            Hotline:{" "}
            <b className="hover:underline cursor-pointer text-blue-400 font-normal">
              1900 6035
            </b>
          </li>
        </ul>
      </Box>
      <Box className="pt-5">
        <h1 className="font-medium text-md">Danh mục Sản phẩm</h1>
        <Box className="flex gap-3">
          <Box className="w-3/12">
            {data.map(
              (item, index) =>
                index < 5 && (
                  <Box key={index} className="">
                    <Box className="">
                      <h1 className=" font-medium text-[15px] mt-2 text-gray-500">
                        {item.title}
                      </h1>
                      <p className="text-[14px] text-[#9B9BA1] font-base">
                        {item.keyword}
                      </p>
                    </Box>
                  </Box>
                )
            )}
          </Box>
          <Box className="w-2/12">
            {data.map(
              (item, index) =>
                index > 5 &&
                index <= 10 && (
                  <Box key={index} className="">
                    <Box className="">
                      <h1 className=" font-medium text-[15px] mt-2 text-gray-500">
                        {item.title}
                      </h1>
                      <p className="text-[14px] text-[#9B9BA1] font-base">
                        {item.keyword}
                      </p>
                    </Box>
                  </Box>
                )
            )}
          </Box>
          <Box className="w-3/12">
            {data.map(
              (item, index) =>
                index > 10 &&
                index <= 16 && (
                  <Box key={index} className="">
                    <Box className="">
                      <h1 className=" font-medium text-[15px] mt-2 text-gray-500">
                        {item.title}
                      </h1>
                      <p className="text-[14px] text-[#9B9BA1] font-base">
                        {item.keyword}
                      </p>
                    </Box>
                  </Box>
                )
            )}
          </Box>
          <Box className="w-2/12">
            {data.map(
              (item, index) =>
                index > 16 &&
                index <= 21 && (
                  <Box key={index} className="">
                    <Box className="">
                      <h1 className=" font-medium text-[15px] mt-2 text-gray-500">
                        {item.title}
                      </h1>
                      <p className="text-[14px] text-[#9B9BA1] font-base">
                        {item.keyword}
                      </p>
                    </Box>
                  </Box>
                )
            )}
          </Box>
          <Box className="w-2/12">
            {data.map(
              (item, index) =>
                index > 21 && (
                  <Box key={index} className="">
                    <Box className="">
                      <h1 className=" font-medium text-[15px] mt-2 text-gray-500">
                        {item.title}
                      </h1>
                      <p className="text-[14px] text-[#9B9BA1] font-base">
                        {item.keyword}
                      </p>
                    </Box>
                  </Box>
                )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
