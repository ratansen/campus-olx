import React from "react";
import './AdCard.css';
import ad1 from '../images/ad1.png';
export default function AdCard(){
    return (
        <div className="ad-card">
            <div className="ad-card-image" >
                <div className="negotiable">NEGOTIABLE</div>
                <img src={ad1} />
            </div>

            <div className="ad-card-desc">
                <div className="desc1">
                    <span>Vehicle</span>
                    <span>Siang</span>
                </div>
                <div className="desc2">
                    Router of TP Link
                </div>
                <div className="desc3">
                    <span>&#x20B9; 1500</span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}