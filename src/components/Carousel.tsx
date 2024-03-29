import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { Box } from "@mui/material";

function Carousel({
  toshow,
  toScroll,
  dots,
  arrows,
  type,
  list,
  postion,
  pagingImage,
}: number | any) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <LuChevronRight
        className={`hover:bg-white bg-white  w-8 h-8 border rounded-full text-blue-500 hover:text-blue-500 ${className}`}
        style={{ ...style, display: "block", right: "18px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <LuChevronLeft
        className={`hover:bg-white bg-white w-8 h-8 border rounded-full text-blue-500 hover:text-blue-500 ${className}`}
        style={{ ...style, display: "block", left: "18px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const slider = [
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/58/43/17/43e07360e61def287066a924c6bb2ba6.jpeg",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/e0/88/c6/27a6eb16697912ca6ff7376f4f2a157f.png",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/50/af/83/47f90fd31d51314e44815be47203a66a.png",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/da/5a/d5/e98c5fa1e988ab1cf9736048f08e9ee1.jpeg",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/2f/43/0f/6264608b8c19910645aa13aa247137f3.png",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/9e/43/32/1f88b9ae90ad1a4cee024fa2a7142422.png",
  ];

  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slickGoTo: true,
    slidesToShow: toshow,
    slidesToScroll: toScroll,
    autoplay: type === "list" || type === "slider" ? false : true,
    arrows: arrows,

    dotsClass: `${
      type === "slider"
        ? "dots-paging_image justify-start h-10 w-full flex items-center"
        : "slick-dots"
    } `,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: string) => (
      <div
        style={{
          bottom: postion ? postion : "-8%",
        }}
      >
        <ul className="px-10"> {dots}</ul>
      </div>
    ),
    customPaging: (i: number) =>
      type === "slider" ? (
        <a className="cursor-pointer">
          <img src={`${list[i]}`} />
        </a>
      ) : (
        <div className="h-1 px-3 bg-gray-200 rounded-lg "></div>
      ),
  };

  return (
    <Slider {...settings}>
      {type === "list" ? (
        list
      ) : type === "products" ? (
        {list}
      ) : type === "slider" ? (
        list.map((item: any, index: number) => (
          <div key={index} className="p-2 outline-none lg:border rounded-lg mb-3">
            <img src={item} alt="carousel" className="w-full rounded-lg" />
          </div>
        ))
      ) : (
        slider.map((item, index) => (
          <div key={index} className="p-2 outline-none">
            <img src={item} alt="carousel" className="w-full rounded-lg" />
          </div>
        ))
      )}
    </Slider>
  );
}

export default Carousel;
