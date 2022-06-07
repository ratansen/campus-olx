import React from "react";
import './CategorySlider.css';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/bundle'

import { Navigation, Pagination } from "swiper";
import 'swiper/css/pagination';

import { CategoryData } from "../CategoryData";

import * as FaIcons from 'react-icons/fa'

function Box({icon, title, number, path}) {
    return (
        <div className="category-box">
            {icon}
            <span className="cat-name">{title}</span>
            <span className="cat-numofad">{number} ads posted</span>
        </div>
    )
}

export default function CategorySlider() {
    // musical instru, stationary, notes, vehicle, electronics, sports
    return (
        <div className="category-slider-wrapper">
            <Swiper
                className="swiper-wrapper"

                modules={[Navigation]}
                slidesPerView={5}
                navigation={{
                    clickable: true,
                    prevEl: '#prevcat',
                    nextEl: '#nextcat',}
                }
            >
                {CategoryData.map((item, index)=>{
                    return (
                            <SwiperSlide>
                        <Link to = 'category/' state={{cat: item.title}} >
                                <Box icon = {item.icon} title = {item.title} number = {item.number} path = {item.path} />
                        </Link>
                            </SwiperSlide>

                    )
                })}
                
            </Swiper>
            <span className="arrow">
                <FaIcons.FaAngleLeft className='fa-angle-left arrow' id = "prevcat" />
            </span>
            <span className="arrow">
                <FaIcons.FaAngleRight className="fa-angle-right arrow" id = "nextcat" />
            </span>
        </div>
    )
}