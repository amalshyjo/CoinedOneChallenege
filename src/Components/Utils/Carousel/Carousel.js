import React from "react";
import Slider from "react-slick";

export default function Carousel({actions}) {

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    }
    return (
        <Slider {...settings}>
          {actions.map((action) => (
            <div key={action.name} className='d-flex justify-content-center align-items-center'>
                <div>
                    {action.icon}
                </div>
                <div>
                    <h6 className='no-style'>
                        {action.name}
                    </h6>
                    <p className='no-style'>
                        {action.usage}
                    </p>
                </div>
            </div>
          ))}
        </Slider>
    )
}
