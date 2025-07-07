import React from "react";
import Button from "./Button";
import API from "../api";
import { useState, useEffect } from "react";


function Card({ img, className, title, ...props }) {
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        API.get("/cards")
            .then(res => {
                console.log(res.data);
                setImgUrl( res.data , ...imgUrl);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    


    return (
        <div className="flex flex-col justify-center">
            <div>
                {imgUrl.slice(0, 1).map((item, index) => (
                    <img src={img} alt="" width={290} height={300}/>
                ))}
            </div>
            <div className="flex flex-col justify-start items-start text-start gap-[10px]">
                <h1 className="font-medium text-[22px] mt-[15px]">{title}</h1>
                <p className="text-gray-500 text-[15px] w-[300px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <div className="flex flex-row items-center text-center gap-5 mt-[30px]">
                    <Button className="text-orange-500" title={'Contact Now'} />
                    <img src="/strelka.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card