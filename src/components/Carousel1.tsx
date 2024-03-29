"use client";
import React from "react";
import Slider from "react-slick";
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel1({
  toshow,
  toScroll,
  dots,
  arrows,
  autoplay,
  type,
  paging_type,
  list,
  postion_dots,
}: {
  toshow?: number;
  toScroll?: number;
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  type?: string;
  paging_type?: string;
  list?: any;
  postion_dots?: string;
}) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ ...style, display: "block", right: "18px" }}
      >
        <LuChevronRight
          className={`hover:bg-white bg-rose-500  w-8 h-8 border rounded-full text-blue-500 hover:text-blue-500 ${className}`}
        />
      </div>
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
  const settings = {
    dots: dots ? dots : false,
    infinite: true,
    speed: 500,
    slidesToShow: toshow ? toshow : 1,
    slidesToScroll: toScroll ? toScroll : 1,
    autoplay: autoplay ? autoplay : false,
    arrows: arrows ? arrows : false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots: string) => (
      <div style={{ bottom: postion_dots ? postion_dots : "-8%" }}>
        <ul className="px-10"> {dots}</ul>
      </div>
    ),
    customPaging: (i: number) =>
      paging_type === "dots" ? (
        <div className="h-1 px-3 bg-gray-200 rounded-lg "></div>
      ) : (
        <div></div>
      ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{list}</Slider>
    </div>
  );
}

export default Carousel1;
