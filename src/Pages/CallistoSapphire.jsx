import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/2CallistoSapphire/1.webp';
import img2 from '../assets/Img/All/2CallistoSapphire/2.webp';
import img3 from '../assets/Img/All/2CallistoSapphire/3.webp';
import img4 from '../assets/Img/All/2CallistoSapphire/4.webp';
import img5 from '../assets/Img/All/2CallistoSapphire/5.webp';
import img6 from '../assets/Img/All/2CallistoSapphire/6.webp';
import img7 from '../assets/Img/All/2CallistoSapphire/7.webp';
import img11 from '../assets/Img/All/2CallistoSapphire/1-2.webp';
import img12 from '../assets/Img/All/2CallistoSapphire/2-2.webp';
import img13 from '../assets/Img/All/2CallistoSapphire/3-4.webp';
import img14 from '../assets/Img/All/2CallistoSapphire/4-2.webp';
import img15 from '../assets/Img/All/2CallistoSapphire/5-3.webp';
import img16 from '../assets/Img/All/2CallistoSapphire/6-2.webp';

const imageList = [
  { src: img1, alt: 'Yogeshwar Home 1' },
  { src: img2, alt: 'Yogeshwar Home 2' },
  { src: img3, alt: 'Yogeshwar Home 3' },
  { src: img4, alt: 'Yogeshwar Home 4' },
  { src: img5, alt: 'Yogeshwar Home 5' },
  { src: img6, alt: 'Yogeshwar Home 6' },
  { src: img7, alt: 'Yogeshwar Home 7' },
];

const imageList2 = [
  { src: img11, alt: 'Yogeshwar Home 1' },
  { src: img12, alt: 'Yogeshwar Home 2' },
  { src: img13, alt: 'Yogeshwar Home 2' },
  { src: img14, alt: 'Yogeshwar Home 2' },
  { src: img15, alt: 'Yogeshwar Home 2' },
  { src: img16, alt: 'Yogeshwar Home 2' },
];

const CallistoSapphire = () => {

  useEffect(() => {
document.title = "Callisto sapphire – Arpit Shah Projects";
  }, [])
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Loop through the first image list */}
            {imageList.map((image, index) => (
              <div className="p-5 text-center" key={index}>
                <img
                  src={image.src}
                  width={1024}
                  height={682.66}
                  alt={image.alt}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>

          {/* Loop through the second image list */}
          <div className="col-lg-12">
            <div className="row">
              {imageList2.map((image, index) => (
                 <div className={`col-lg-6 gy-4 pt-5 ${index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'} text-md-center text-sm-center `} key={index}>
                  <img
                    src={image.src}
                    width={550}
                    height={550}
                    alt={image.alt}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallistoSapphire;
