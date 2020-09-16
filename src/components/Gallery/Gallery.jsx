import React, { useState, useEffect } from "react";
import { Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import AliceCarousel from "react-alice-carousel";
import { storage } from '../../firebase';
import "react-alice-carousel/lib/alice-carousel.css";
import GallaryImage from '../../assets/Home_Gallery.jpg';
import "../../styles/Gallery.css";

const Gallery = () => {
	const [imageUrls, setImageUrls] = useState([]);
	const storageRef = storage.ref();

	const getImageUrls = async () => {
		const imageRefs = await storageRef.child('gallery').listAll();
		const imageNames = imageRefs.items.map(item => item.location.path);
		const urlPromises = imageNames.map(name => {
			return storageRef.child(name).getDownloadURL();
		});
		Promise.all(urlPromises).then(values => {
			setImageUrls(values);
		});
	}

	useEffect(() => {
		getImageUrls();
		// eslint-disable-next-line
	}, []);

  const responsive = {
    0: { items: 1 },
    750: { items: 2 },
    1200: { items: 3 },
    1600: { items: 4 },
	};
	
  const stagePadding = {
    paddingLeft: "auto",
    paddingRight: "auto",
	};

	const style = {
		"background-image": `url(${GallaryImage})`,
		"object-fit": "scale-down"
	};
	
  const state = {
    items: imageUrls.map((url, index) => {
      return (
        <div key={index}>
          <div className="box">
            <img src={url} alt="x" className="box__center" />
            <div class="box__right">
              <i class="fas fa-plus fa-5x light"></i>
            </div>
            <div class="box__left">
              <i class="fas fa-plus fa-5x light"></i>
            </div>
            <div class="box__top">
              <i class="fas fa-plus fa-5x light"></i>
            </div>
            <div class="box__bottom">
              <i class="fas fa-plus fa-5x light"></i>
            </div>
          </div>
        </div>
      );
    }),
  };
  return (
    <Container fluid className="gallery-container" style={style}>
			<Row>
				<div className="col-lg-10 offset-lg-1">
					<AliceCarousel
						mouseTrackingEnabled
						responsive={responsive}
						items={state.items}
						dotsDisabled
						autoPlayInterval={2000}
						autoPlay
						buttonsDisabled
						stagePadding={stagePadding}
					/>
				</div>
			</Row>
    </Container>
  );
};
export default Gallery;
