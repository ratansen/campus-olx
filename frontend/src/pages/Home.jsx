import React from "react";
import './Home.css';
import Category from "../components/Category";
import AdCard from "../components/AdCard";

export default function Home(){
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
                <Category/>
                <div className="home-ads">
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />

                </div>
            </div>
        </>
    )
}