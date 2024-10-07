import React, { useEffect } from 'react';
import img1 from '../assets/Img/three/1.png';
import img2 from '../assets/Img/three/2.png';
import img3 from '../assets/Img/three/3.png';

const Home = () => {
  useEffect(() => {
    document.title = "Arpit Shah Projects";
  }, []);

  const images = [
    { src: img1, alt: 'Project Image 1' },
    { src: img2, alt: 'Project Image 2' },
    { src: img3, alt: 'Project Image 3' },
  ];

  return (
    <>
      <div className="container">
        <div className="row text-center p-5">
          {images.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={346.66}
                height={616.14}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
