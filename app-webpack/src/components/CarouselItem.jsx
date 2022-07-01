import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = props => {
    return (
        <div className={"carousel-item " + props.active}>
            <img src={props.image.imageSrc} className="d-block w-100" alt="..." />
        </div>
    )
}

CarouselItem.propTypes = {
    image: PropTypes.object.isRequired,
    active: PropTypes.string.isRequired
}

export default CarouselItem;