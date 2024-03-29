"use client";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProductCard({
  products,
  width,
  open_tiki_best,
  open_genuine,
  open_support,
  open_note,
}: {
  products: Array<object>;
  width: string;
  open_tiki_best?: boolean;
  open_genuine?: boolean;
  open_support?: boolean;
  open_note?: boolean
}) {
  const size = useWindowSize();
  const isMobile: boolean = size.width < 768;
  return (products || []).map((item: any, index: number) => {
    return (
      <div
        className={`${isMobile ? "w-[140px]" : "col-md-3"} h-full p-1 ${
          width ? width : "w-1/4"
        }`}
        key={index}
      >
        <div className="card relative cursor-pointer border rounded-lg">
          <Image
            src={item.avatar}
            alt=""
            className="mx-auto rounded-tl-lg rounded-tr-lg"
            width={isMobile ? 140 : 200}
            height={isMobile ? 140 : 200}
          />
          <div className="">
            {item.tiki_best && open_tiki_best && (
              <Image
                src="https://salt.tikicdn.com/ts/upload/0f/27/42/1fff0f8fe6125514354597d1c5f5260c.png"
                alt=""
                className="p-2 pt-3 pb-1"
                width={isMobile ? 80 : 85}
                height={isMobile ? 80 : 85}
              />
            )}
            <div className="flex items-center gap-2">
              {item.genuine && open_genuine && (
                <Image
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  className="px-2 pb-1"
                  alt=""
                  width={isMobile ? 90 : 100}
                  height={isMobile ? 90 : 100}
                />
              )}
              {item.support && open_support && (
                <div className="text-[10px] py-1 px-2 bg-gray-100 text-gray-500 rounded-full font-bold">
                  TÀI TRỢ
                </div>
              )}
            </div>
          </div>
          <div className="px-2 py-2">
            <div
              className={`text-gray-500 font-base text-xs w-full ${
                item.name.length > 80 && "h-8 overflow-hidden"
              }`}
            >
              {item.name.length > 80
                ? item.name.substring(0, isMobile ? 80 : 80) + "..."
                : item.name}
            </div>
            <div className="my-2">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read text-xs"
                  defaultValue={5}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Stack>
            </div>
            <div
              className={`mb-1 mt-2 ${
                isMobile ? "text-md" : "text-lg"
              }  font-medium`}
            >
              {item.price.toLocaleString("vi-VN")}
              <sup className="text-md underline text-ellipsis">đ</sup>
            </div>
            {open_note && <div className="border-t pt-2 text-[12px] text-gray-500">
              {item.note}
            </div>}
          </div>
        </div>
      </div>
    );
  });
}

export default ProductCard;
