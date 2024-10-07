import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/6YogeshwarHome2/1.webp';
import img2 from '../assets/Img/All/6YogeshwarHome2/2.webp';
import img3 from '../assets/Img/All/6YogeshwarHome2/3.webp';

import img11 from '../assets/Img/All/6YogeshwarHome2/11.webp';
import img12 from '../assets/Img/All/6YogeshwarHome2/12.webp';

const imageList = [
  { src: img1, alt: 'Yogeshwar Home 1' },
  { src: img2, alt: 'Yogeshwar Home 2' },
  { src: img3, alt: 'Yogeshwar Home 3' },
];

const imageList2 = [
  { src: img11, alt: 'Yogeshwar Home 1' },
  { src: img12, alt: 'Yogeshwar Home 2' },
];

const YogeshwarHomes2Bhk = () => {

  useEffect(() => {
    document.title = "Yogeshwar Homes : 2 BHK – Arpit Shah Projects";
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
                  height={537}
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
                    height={982}
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

export default YogeshwarHomes2Bhk;
