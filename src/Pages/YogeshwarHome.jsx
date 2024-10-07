import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/1YogeshwarHome/1.webp';
import img2 from '../assets/Img/All/1YogeshwarHome/2.webp';
import img3 from '../assets/Img/All/1YogeshwarHome/3.webp';
import img4 from '../assets/Img/All/1YogeshwarHome/4.webp';
import img5 from '../assets/Img/All/1YogeshwarHome/5.webp';
import img6 from '../assets/Img/All/1YogeshwarHome/6.webp';
import img7 from '../assets/Img/All/1YogeshwarHome/7.webp';
import img11 from '../assets/Img/All/1YogeshwarHome/1_1.webp';
import img12 from '../assets/Img/All/1YogeshwarHome/1_2.webp';

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
];



const YogeshwarHome = () => {

  useEffect(() => {
    document.title = "Yogeshwar Homes – Arpit Shah Projects"
  }, [])
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Loop through the first image list */}
            {imageList.map((image, index) => (
              <div className="pb-5 text-center" key={index}> 
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
                <div className="col-lg-6 pt-5 text-center" key={index}>
                  <img
                    src={image.src}
                    width={683}
                    height={1024}
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

export default YogeshwarHome;
