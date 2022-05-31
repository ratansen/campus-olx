import React from "react";
import './Category.css';
import AdCard from "../components/AdCard";

export default function Category(){
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

                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </div>

            </div>

        </div>
    )
}