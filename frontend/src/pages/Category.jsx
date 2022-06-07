import React, { useState, useEffect } from "react";
import './Category.css';
import { axios } from "../api";
import AdCard from "../components/AdCard";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Category(){
    const location = useLocation()
    const {cat} = location.state
    
    const [category, setCategory] = useState(cat)
    const [ads , setAds] = useState([]) ;

    useEffect(()=>{

        axios.get('products/?category=' + category).then((response) => {
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

    console.log(cat)
    return(
        <div className="category-wrapper">
            <div className="category-leftdiv">
                <span>Filter Ads</span>
                <div>
                    <span className="filter-type">Keyword</span>
                    <input className="filter-input-field"  id="keyword" placeholder="Search for..."></input>
                </div>
                <div>
                    <span className="filter-type">Category</span>
                    <div className="category-checkboxes">
                    <div className="checkbox">

                        <input type="checkbox" id="electronics">
                        </input>
                        <label for="electronics">
                            Electronics
                        </label>
                    </div>
                    <div className="checkbox">

                        <input type="checkbox" id="electronics">
                        </input>
                        <label for="electronics">
                            Electronics
                        </label>
                    </div>
                    <div className="checkbox">

                        <input type="checkbox" id="electronics">
                        </input>
                        <label for="electronics">
                            Electronics
                        </label>
                    </div>

                    </div>
                </div>
                <div>
                    <span className="filter-type">Price</span>
                    <div className="price-fields">
                        <input className="filter-input-field" id="min" placeholder="min"></input>
                        <input className="filter-input-field" id="max" placeholder="max"></input>

                    </div>
                </div>
                <button className="apply-filter">
                    APPLY FILTER
                </button>

            </div>
            <div className="category-rightdiv">
                <div className="category-right-top">
                <span>Showing 1 - 12 of 20 ads found</span>
                </div>
                <div className="category-right-body">

                {ads.map((item , index) => {
                        return(
                            <Link to = {`/product/${item.id}`}>
                                <AdCard image = {'http://127.0.0.1:8000' + item.images} category = {item.category} title = {item.title} price = {item.price} />
                            </Link>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}