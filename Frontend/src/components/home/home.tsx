"use client";
import { Banner } from "../banner/banner";
import { Header } from "../header";
import { SideBar } from "../sidebar/sidebar";
import Frame from "../../../public/assets/frame";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/index.js";
import { CountDown } from "../common/countDownTimer";
import { mapLocaleToMeaningfulFormat } from "../utils/i18n";
import LeftArrow from "../../../public/assets/FillWithLeftArrow";
import RightArrow from "../../../public/assets/FillwithRightArrow";
import Search from "../header/SearchBox";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/category`);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <section className="w-full">
        <Banner />
      </section>
      <section>
        <Header />
      </section>
      <hr className="mt-6 mx-32" />
      <section className="md:mx-32">
        <section >
          <section className="flex mt-14 justify-between ">
            <section className="border-r-2 w-full">
              <SideBar />
            </section>

            <section>
              <section>
                <Frame></Frame>
              </section>
            </section>
          </section>
        </section>

        <section className="mt-28">
          <p>{mapLocaleToMeaningfulFormat().todays}</p>
          <div>
            <section className="flex text-3xl gap-x-20">
              <h1 className="">{mapLocaleToMeaningfulFormat().flashSales}</h1>
              <CountDown></CountDown>
            </section>
            <div className="flex gap-x-7 mt-10 ">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                pagination={{
                  clickable: true
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {products.map((product: any) => (
                  <SwiperSlide key={product?._id} className="w-full">
                    <section className="flex flex-col justify-between">
                      <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="max-h-72 h-72"
                      />
                      <section className="my-6">
                        <p className="text-base font-semibold tracking-normal mb-2">
                          {product?.name}
                        </p>
                        <p>${product?.price}</p>
                      </section>
                    </section>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <button>{mapLocaleToMeaningfulFormat().viewAllProducts}</button>
          <hr className="mt-14" />
        </section>

        <section className="mt-20">
          <section>
            <section className="flex justify-between mb-14">
              <h1 className="text-3xl">Browser By Category</h1>
              <section className="flex gap-x-2">
                <LeftArrow width="36px" height="36px" />
                <RightArrow width="36px" height="36px" />
              </section>
            </section>
            <section className="flex gap-x-12 mb-16">
              {categories.map((category: any) => (
                <section className="">
                  <section className="border-2 border-black rounded-full p-10">
                    <img
                      src={category?.imageUrl}
                      width="64px"
                      height="64px"
                    ></img>
                  </section>
                  <h1 className="text-center mt-2">{category?.name}</h1>
                </section>
              ))}
            </section>
            <hr />
          </section>
        </section>
      </section>
    </>
  );
};
