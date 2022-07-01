import React from 'react';
import CarouselItem from './CarouselItem';
import PropTypes from 'prop-types';

const Carousel = props => {

    // props.images

    const imageItems = props.images.map((image, index) => (
        <CarouselItem key={index} image={image} active={index === 0 ? "active" : ""} />
    ))

    /* 
    
    [
        <CarouselItem key={index} image={image} /> = <div className="carousel-item active" key={index}>
            <img src="./image1.png" className="d-block w-100" alt="..." />
        </div>,
        <CarouselItem key={index} image={image} /> = <div className="carousel-item active" key={index}>
            <img src="./image2.png" className="d-block w-100" alt="..." />
        </div>,
        <CarouselItem key={index} image={image} /> = <div className="carousel-item active" key={index}>
            <img src="./image3.png" className="d-block w-100" alt="..." />
        </div>
    ]
    */

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imageItems}
               {/*  {imageItems.length > 0 ? imageItems : null}
                {imageItems.length > 0 && imageItems} */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
}

export default Carousel;