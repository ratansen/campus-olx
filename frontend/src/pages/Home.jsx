import React from "react";
import { useEffect, useState } from "react";
import './Home.css';
import CategorySlider from "../components/CategorySlider";
import AdCard from "../components/AdCard";
import { axios } from "../api.js";
import { Link } from 'react-router-dom';
import { CategoryData } from "../CategoryData";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function Home() {
    const [ads, setAds] = useState([]);
    const [category, setCategory] = useState("")
    const [keyWord, setKeyword] = useState("")

    useEffect(() => {
        axios.get('products/').then((response) => {
            setAds(response.data.data);
            console.log(ads);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    }, [])


    return (
        <>
            <div className="home-wrapper">
                <div className="home-hero">
                    <span>All You Need Is Here & Classified</span>
                    <span>Browse from more than <b>15,000,000</b> adverts while new ones come on daily bassis</span>
                    <div className="search">

                        <input className="search-box" placeholder="Search for" value={keyWord} onChange={(e) => setKeyword(e.target.value)} />
                        <select className="category-search" onChange={(e) => setCategory(e.target.value)}>
                            <option selected disabled><span>in Category</span></option>
                            {CategoryData.map((item) => {
                                return (
                                    <option value={item.title}>{item.title}</option>
                                )
                            })}
                        </select>
                        <Link to={'category'} state={{ cat: category, kw: keyWord }} style={{ textDecoration: "none" }}>
                            <button className="hero-btn-search">
                                Search
                            </button>
                        </Link>
                    </div>

                </div>
                <CategorySlider />
                <div className="home-ads">
                    {ads.map((item, index) => {
                        return (
                            <Link to={`/product/${item.id}`}>
                                <AdCard image={'http://127.0.0.1:8000' + (item.product_images.length > 0 ? item.product_images[0].image :
                                    "")} category={item.category} title={item.title} price={item.price} />
                            </Link>
                        )
                    })}
                    {/* {console.log(ads)} */}

                </div>
            </div>
        </>
    )
}