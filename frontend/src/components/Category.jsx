import React from "react";
import './Category.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/bundle'

import { Navigation, Pagination } from "swiper";
import 'swiper/css/pagination';

function Box() {
    return (
        <div className="category-box">
            <i className="fa-solid fa-charging-station"></i>
            <span className="cat-name">Electronics</span>
            <span className="cat-numofad">5 ads posted</span>
        </div>
    )
}

export default function Category() {
    // musical instru, stationary, notes, vehicle, electronics, sports
    return (
        <div className="category-wrapper">
            <Swiper
                className="swiper-wrapper"

                modules={[Navigation]}
                slidesPerView={5}
                prevEl="#prevcat"
                nextEl="#nextcat"
            >
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
                <SwiperSlide><Box /></SwiperSlide>
            </Swiper>
            <i className='fa-light fa-angle-left' id = "prevcat" >  </i>
            <i className='fa-light fa-angle-right' id = "nextcat" >  </i>
        </div>
    )
}