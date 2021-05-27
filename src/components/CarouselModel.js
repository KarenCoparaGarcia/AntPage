import { Carousel } from "antd";
import React from "react";

export default function CarouselModel() {
  return (
    <Carousel autoplay>
      <div>
        <img
          className="CarrouselStyle"
          src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/slider3.png?alt=media&token=c2df3717-5f47-40d6-a6a3-36581188dba9"
        />
      </div>
      <div>
        <img
          className="CarrouselStyle"
          src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/slider2.png?alt=media&token=212e710a-d9e8-48a3-a243-353795f5c3e2"
        />
      </div>
      <div>
        <img
          className="CarrouselStyle"
          src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/slider1.png?alt=media&token=0e129101-c371-4045-b2dc-fc17b139b2d9"
        />
      </div>
    </Carousel>
  );
}
