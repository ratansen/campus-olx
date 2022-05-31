import React from "react";
import './AdCard.css';
import ad1 from '../images/ad1.png';
export default function AdCard({image, category, title, price, negotiable}){
    return (
        <div className="ad-card">
            <div className="ad-card-image" >
                {negotiable && <div className="negotiable">NEGOTIABLE</div>}
                <div className="blur-bg">            
                    <img src={image} alt=''/>
                </div>
                <img src={image} alt=''/>
            </div>

            <div className="ad-card-desc">
                <div className="desc1">
                    <span>{category}</span>
                    <span>Siang</span>
                </div>
                <div className="desc2">
                   {title}
                </div>
                <div className="desc3">
                    <span>&#x20B9; {price}</span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}