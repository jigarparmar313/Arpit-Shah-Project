import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/9SankalpGrace3/1.webp';
import img2 from '../assets/Img/All/9SankalpGrace3/2.webp';
import img3 from '../assets/Img/All/9SankalpGrace3/3.webp';
import img4 from '../assets/Img/All/9SankalpGrace3/4.webp';
import img5 from '../assets/Img/All/9SankalpGrace3/5.webp';
import img6 from '../assets/Img/All/9SankalpGrace3/6.webp';
import img7 from '../assets/Img/All/9SankalpGrace3/7.webp';
import img8 from '../assets/Img/All/9SankalpGrace3/8.webp';
import img9 from '../assets/Img/All/9SankalpGrace3/9.webp';
import img10 from '../assets/Img/All/9SankalpGrace3/10.webp';
import img11 from '../assets/Img/All/9SankalpGrace3/11.webp';
import img12 from '../assets/Img/All/9SankalpGrace3/12.webp';
import img13 from '../assets/Img/All/9SankalpGrace3/13.webp';
import img14 from '../assets/Img/All/9SankalpGrace3/14.webp';
import img15 from '../assets/Img/All/9SankalpGrace3/15.webp';
import img16 from '../assets/Img/All/9SankalpGrace3/16.webp';
import img17 from '../assets/Img/All/9SankalpGrace3/17.webp';
import img18 from '../assets/Img/All/9SankalpGrace3/18.webp';

import img1_1 from '../assets/Img/All/9SankalpGrace3/1_1.webp';
import img1_2 from '../assets/Img/All/9SankalpGrace3/1_2.webp';
import img1_3 from '../assets/Img/All/9SankalpGrace3/1_3.webp';
import img1_4 from '../assets/Img/All/9SankalpGrace3/1_4.webp';
import img1_5 from '../assets/Img/All/9SankalpGrace3/1_5.webp';
import img1_6 from '../assets/Img/All/9SankalpGrace3/1_6.webp';
import img1_7 from '../assets/Img/All/9SankalpGrace3/1_7.webp';
import img1_8 from '../assets/Img/All/9SankalpGrace3/1_8.webp';

const imageList = [
  { src: img1 , alt: 'Yogeshwar Home 1 ' },
  { src: img2 , alt: 'Yogeshwar Home 2 ' },
  { src: img3 , alt: 'Yogeshwar Home 3 ' },
  { src: img4 , alt: 'Yogeshwar Home 4 ' },
  { src: img5 , alt: 'Yogeshwar Home 5 ' },
  { src: img6 , alt: 'Yogeshwar Home 6 ' },
  { src: img7 , alt: 'Yogeshwar Home 7 ' },
  { src: img8 , alt: 'Yogeshwar Home 8 ' },
  { src: img9 , alt: 'Yogeshwar Home 9 ' },
  { src: img10, alt: 'Yogeshwar Home 10' },
  { src: img11, alt: 'Yogeshwar Home 11' },
  { src: img12, alt: 'Yogeshwar Home 12' },
  { src: img13, alt: 'Yogeshwar Home 13' },
  { src: img14, alt: 'Yogeshwar Home 14' },
  { src: img15, alt: 'Yogeshwar Home 15' },
  { src: img16, alt: 'Yogeshwar Home 16' },
  { src: img17, alt: 'Yogeshwar Home 17' },
  { src: img18, alt: 'Yogeshwar Home 18' },
];

const imageList2 = [
  { src: img1_1, alt: 'Yogeshwar Home 1' },
  { src: img1_2, alt: 'Yogeshwar Home 2' },
  { src: img1_3, alt: 'Yogeshwar Home 3' },
  { src: img1_4, alt: 'Yogeshwar Home 4' },
  { src: img1_5, alt: 'Yogeshwar Home 5' },
  { src: img1_6, alt: 'Yogeshwar Home 6' },
  { src: img1_7, alt: 'Yogeshwar Home 7' },
  { src: img1_8, alt: 'Yogeshwar Home 8' },
];

const SankalpGrace3 = () => {

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
                <div className={`col-lg-6 gy-4 gx-4 ${index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'} text-md-center text-sm-center `} key={index}>
                  <img
                    src={image.src}
                    width={550}
                    height={692.45}
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

export default SankalpGrace3;
