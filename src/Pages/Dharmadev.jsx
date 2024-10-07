import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/7Dharmadev/1.webp';
import img2 from '../assets/Img/All/7Dharmadev/2.webp';
import img3 from '../assets/Img/All/7Dharmadev/3.webp';
import img4 from '../assets/Img/All/7Dharmadev/4.webp';
import img5 from '../assets/Img/All/7Dharmadev/5.webp';
import img6 from '../assets/Img/All/7Dharmadev/6.webp';
import img7 from '../assets/Img/All/7Dharmadev/7.webp';
import img8 from '../assets/Img/All/7Dharmadev/8.webp';
import img9 from '../assets/Img/All/7Dharmadev/9.webp';
import img10 from '../assets/Img/All/7Dharmadev/10.webp';
import img11 from '../assets/Img/All/7Dharmadev/11.webp';
import img12 from '../assets/Img/All/7Dharmadev/12.webp';
import img13 from '../assets/Img/All/7Dharmadev/13.webp';
import img14 from '../assets/Img/All/7Dharmadev/14.webp';
import img15 from '../assets/Img/All/7Dharmadev/15.webp';
import img16 from '../assets/Img/All/7Dharmadev/16.webp';

import img1_1 from '../assets/Img/All/7Dharmadev/1_1.webp';
import img1_2 from '../assets/Img/All/7Dharmadev/1_2.webp';
import img1_3 from '../assets/Img/All/7Dharmadev/1_3.webp';
import img1_4 from '../assets/Img/All/7Dharmadev/1_4.webp';
import img1_5 from '../assets/Img/All/7Dharmadev/1_5.webp';
import img1_6 from '../assets/Img/All/7Dharmadev/1_6.webp';
import img1_7 from '../assets/Img/All/7Dharmadev/1_7.webp';
import img1_8 from '../assets/Img/All/7Dharmadev/1_8.webp';

const imageList = [
  { src: img1, alt: 'Dharmadev Home 1' },
  { src: img2, alt: 'Dharmadev Home 2' },
  { src: img3, alt: 'Dharmadev Home 3' },
  { src: img4, alt: 'Dharmadev Home 4' },
  { src: img5, alt: 'Dharmadev Home 5' },
  { src: img6, alt: 'Dharmadev Home 6' },
  { src: img7, alt: 'Dharmadev Home 7' },
  { src: img8, alt: 'Dharmadev Home 8' },
  { src: img9, alt: 'Dharmadev Home 9' },
  { src: img10, alt: 'Dharmadev Home 10' },
  { src: img11, alt: 'Dharmadev Home 11' },
  { src: img12, alt: 'Dharmadev Home 12' },
  { src: img13, alt: 'Dharmadev Home 13' },
  { src: img14, alt: 'Dharmadev Home 14' },
  { src: img15, alt: 'Dharmadev Home 15' },
  { src: img16, alt: 'Dharmadev Home 16' },
];

const imageList2 = [
  { src: img1_1, alt: 'Dharmadev Home Extra 1' },
  { src: img1_2, alt: 'Dharmadev Home Extra 2' },
  { src: img1_3, alt: 'Dharmadev Home Extra 3' },
  { src: img1_4, alt: 'Dharmadev Home Extra 4' },
  { src: img1_5, alt: 'Dharmadev Home Extra 5' },
  { src: img1_6, alt: 'Dharmadev Home Extra 6' },
  { src: img1_7, alt: 'Dharmadev Home Extra 7' },
  { src: img1_8, alt: 'Dharmadev Home Extra 8' },
];

const YogeshwarHomes2Bhk = () => {
  useEffect(() => {
    document.title = "Dharmadev – Arpit Shah Projects";
  }, []);

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
                  height={819}
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
                <div
                  className={`col-lg-6 gy-2 pt-5 ${
                    index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'
                  } text-md-center text-sm-center`}
                  key={index}
                >
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
