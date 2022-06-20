import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Product.css';
import { axios } from "../api";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import ad1 from '../images/ad1.png'
import { FaUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa";
import Loading from "../components/Loader";

export default function Product() {

    const [ad, setAd] = useState([]);
    var [loaderState, setLoaderState] = useState(true);
    const [slider, setSlider] = useState()
    const [thumbs, setThumbs] = useState()
    const { id } = useParams()

    const fetchData = async () => axios.get(`products/${id}`).then((response) => {
        setAd(response.data.data, () => console.log(ad));
        const images = response.data.data.product_images;

        setSlider(() => images.map((item, key) => {
            console.log(images)
            return (
                <SwiperSlide>
                    <div className="slider-image">
                        <div className="blurred">
                            <img src={'http://127.0.0.1:8000' + item["image"]} alt=""></img>

                        </div>
                        <img src={'http://127.0.0.1:8000' + item["image"]} alt=""></img>
                    </div>



                </SwiperSlide>
            )
        }), setLoaderState(false));

    }).catch((error) => {
        if (error.response) {
            console.log(error.response);
        }
    });






    useEffect(() => {
        fetchData();
    }, [])


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const to_render = function () {

        return (

            <div className="product-wrapper">
                <div className="product-header">
                    {ad.title}
                </div>

                <div className="product-body">
                    <div className="carausal">

                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={
                                {
                                    clickable: true,
                                    prevEl: '#prevcat',
                                    nextEl: '#nextcat',
                                }
                            }
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"

                        >


                            {slider}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}

                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"


                        >
                            {slider}

                        </Swiper>
                        <div className="product-bottom">
                            <div className="product-desc">
                                <h2>Description</h2>
                                <p>
                                    {ad.description}
                                </p>
                            </div>
                            <div className="ad-action">

                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="price"> &#x20B9; {ad.price}</div>
                        <div className="owner-info">
                            <span>Ad Owner</span>
                            <div className="owner-name">
                                <FaUserCircle className="user-icon" />
                                <span style={{verticalAlign:"sub"}}>Ratan Sen</span><br />
                                <span style={{ fontSize: "0.7rem", verticalAlign: "top" }}>B.Tech</span>
                            </div>
                            <div className="contact">
                                <a href="tel:902609">

                                    <div className="owner-contact">
                                        <FiPhoneCall className="call" /> Call
                                    </div>
                                </a>
                                <a href="https://wa.me/9026902690">

                                    <div className="owner-contact" >
                                        <FaWhatsapp className="call" /> Message
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <>
            {loaderState ? <Loading /> : to_render()}
        </>

    )
}