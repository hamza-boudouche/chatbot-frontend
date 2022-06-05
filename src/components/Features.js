import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Carousel from "nuka-carousel";

export default function Features() {
    return (

        <div className="content slideanimation">
            <Carousel
                autoplay={false}
                speed={1000}
                wrapAround={true}
                adaptiveHeight={false}>
                <img className="imgcarousel" src={img1}  />
                <img className="imgcarousel" src={img1} />
                <img className="imgcarousel" src={img2} />
            </Carousel>
        </div>

    )
}
