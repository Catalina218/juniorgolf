import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import photo1 from '../../assets/gallery-1.jpg';
import backgroud from '../../assets/newyork.jpg';
import '../../styles/Gallery.css';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
const Gallery = () => {
    const handleOnDragStart = (e) => e.preventDefault();
    const urlArray = new Array(9).fill(photo1);
    const responsive = {
        0: { items: 1 },
        1000: { items: 2 },
        1400: { items: 3 },
        1800: { items: 4 }
    }
    const style = {
        backgroundImage: `url(${backgroud})`
    }
    const stagePadding={
            paddingLeft: "auto",     // in pixels
            paddingRight: "auto"
    }
    const state = {
        items: urlArray.map((url, index) => {
            return (
                <div key={index}>
                    <div className="box">
                         <img src={url} alt="x" className="box__center" />
                        <div class="box__right" ><i class="fas fa-plus fa-5x light"></i></div>
                        <div class="box__left"><i class="fas fa-plus fa-5x light"></i></div>
                        <div class="box__top"><i class="fas fa-plus fa-5x light"></i></div>
                        <div class="box__bottom"><i class="fas fa-plus fa-5x light"></i></div>
                    </div>
                </div>
            )
        })
    }
    return (
        <Container fluid style={style}>
            <AliceCarousel
                mouseTrackingEnabled
                responsive={responsive}
                items={state.items}
                startIndex={10}
                dotsDisabled={true}
                autoPlayInterval={2000}
                autoPlay
                buttonsDisabled={true}
                stagePadding={stagePadding}
            >

            </AliceCarousel>
        </Container>
    )
}
export default Gallery;