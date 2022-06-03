import React from "react";
import { useEffect, useState } from "react";
import './Home.css';
import CategorySlider from "../components/CategorySlider";
import AdCard from "../components/AdCard";
import {axios} from "../api.js";

export default function Home(){
    const [ads , setAds] = useState([]) ;
    
    useEffect(()=>{
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
    },[])

    return (
        <>
            <div className="home-wrapper">
                <div className="home-hero">
                    <span>All You Need Is Here & Classified</span>
                    <span>Browse from more than <b>15,000,000</b> adverts while new ones come on daily bassis</span>
                    <div className="search">

                    <input className="search-box" placeholder="Search for"/>
                    <select className="category-search">
                    <option selected disabled><span>in Category</span></option>
                    </select>
                    <button className="hero-btn-search">
                        Search
                    </button>
                    </div>

                </div>
                <CategorySlider/>
                <div className="home-ads">
                    {ads.map((item , index) => {
                        return(
                            <AdCard image = {'http://127.0.0.1:8000' + item.images} category = {item.category} title = {item.title} price = {item.price} />
                        )
                    })}
                    {/* {console.log(ads)} */}

                </div>
            </div>
        </>
    )
}