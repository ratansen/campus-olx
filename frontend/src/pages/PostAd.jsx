import React, {useEffect, useState, useRef} from "react";
import './PostAd.css';
import { axios } from "../api";
import { CategoryData } from "../CategoryData";

export default function PostAd() {

    const data = {
        "title": "Chhavi",
        "category": "Fashion",
        "price": 1000000,
        "description": "Chhavi is smartboy",
        "negotiable": true
    }


    const [inputs, setInputs] = useState({
        title: "",
        category: "",
        price: "",
        price_type: "",
        description: "",
        images: undefined
    })
    const header = {
        "Content-Type": "multipart/form-data"
    }

    function post(){
        var formData = new FormData()
        formData.append("title", inputs.title)
        formData.append("category", inputs.category)
        formData.append("price", inputs.price)
        formData.append("negotiable", inputs.price_type === "negotiable")
        formData.append("description", inputs.description)
        formData.append("images", inputs.images)

        axios.post('products/', formData, header).then((response) => {
            console.log("done");
          })
        console.log("working");
        console.log(inputs)
    }

    function handleChange(event){
        const val = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: val
        })

    }

    function handleFile(event){
        const val = event.target.files[0]
        setInputs({
            ...inputs,
            [event.target.name]: val
        })
    }


    return (
        <div className="postad-wrapper">
            <div className="ad-info-input">
                <div className="input-header">
                    Select Category
                </div>
                <div className="input-body">
                    <div className="label">
                        Category
                    </div>
                    <div className="input-input">

                        <select name='category' value={inputs.category} onChange={handleChange}>
                        <option selected>Select category</option>
                            {CategoryData.map((item, index) => {
                                return(
                                    <option value = {item.title}>{item.title}</option>
                                )
                            })}
 
                        </select>
                    </div>
                </div>
            </div>
            <div className="ad-info-input">
                <div className="input-header">
                    Product Information
                </div>
                <div className="input-body">
                    <div className="label">
                        Title
                    </div>

                    <div className="input-input">

                        <input name="title" value={inputs.title} onChange={handleChange}></input>

                    </div>
                </div>
                <div className="input-body">
                    <div className="label">
                        Price
                    </div>
                    <div className="input-input">

                        <input name="price" type="number" value={inputs.price} onChange={handleChange}></input>

                    </div>
                </div>
                <div className="input-body">
                    <div className="label">
                        Price Type
                    </div>
                    <div className="input-input">

                        <select name="price_type" value={inputs.price_type} onChange={handleChange}>
                        <option selected>Select price type</option>
                        <option value='fixed' selected>Fixed</option>
                        <option value='negotiable'>Negotiable</option>

                        </select>

                    </div>
                </div>
                <div className="input-body">
                    <div className="label">
                        Description
                    </div>
                    <div className="input-input">

                        <textarea name="description" rows={10} style={{ resize: 'vertical' }} value={inputs.description} onChange={handleChange}></textarea>

                    </div>
                </div>
            </div>
            <div className="ad-info-input">
                <div className="input-header">
                    Images
                </div>
                <div className="input-body">
                    <div className="label">
                        Upload Images
                    </div>
                    <div className="input-input" style={{ border: '2px dashed black' }}>

                        <input name="images" type='file' className="choose-file" onChange={handleFile} >

                        </input>
                    </div>
                </div>
            </div>
            <button className="submit-ad" onClick={post}>Submit</button>
        </div>
    )
}