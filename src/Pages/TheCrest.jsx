import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/4TheCrust/1.webp';
import img2 from '../assets/Img/All/4TheCrust/2.webp';
import img3 from '../assets/Img/All/4TheCrust/3.webp';
import img4 from '../assets/Img/All/4TheCrust/4.webp';
import img5 from '../assets/Img/All/4TheCrust/5.webp';
import img6 from '../assets/Img/All/4TheCrust/6.webp';
import img7 from '../assets/Img/All/4TheCrust/7.webp';
import img8 from '../assets/Img/All/4TheCrust/8.webp';
import img9 from '../assets/Img/All/4TheCrust/9.webp';
import img10 from '../assets/Img/All/4TheCrust/10.webp';
import img11 from '../assets/Img/All/4TheCrust/11.webp';
import img12 from '../assets/Img/All/4TheCrust/12.webp';
import img13 from '../assets/Img/All/4TheCrust/13.webp';
import img14 from '../assets/Img/All/4TheCrust/14.webp';
import img15 from '../assets/Img/All/4TheCrust/15.webp';
import img16 from '../assets/Img/All/4TheCrust/16.webp';
import img17 from '../assets/Img/All/4TheCrust/17.webp';
import img18 from '../assets/Img/All/4TheCrust/18.webp';
import img19 from '../assets/Img/All/4TheCrust/19.webp';
import img20 from '../assets/Img/All/4TheCrust/20.webp';
import img21 from '../assets/Img/All/4TheCrust/21.webp';
import img22 from '../assets/Img/All/4TheCrust/22.webp';
import img23 from '../assets/Img/All/4TheCrust/23.webp';
import img24 from '../assets/Img/All/4TheCrust/24.webp';
import img25 from '../assets/Img/All/4TheCrust/25.webp';
import img26 from '../assets/Img/All/4TheCrust/26.webp';
import img27 from '../assets/Img/All/4TheCrust/27.webp';
import img28 from '../assets/Img/All/4TheCrust/28.webp';
import img29 from '../assets/Img/All/4TheCrust/29.webp';
import img30 from '../assets/Img/All/4TheCrust/30.webp';

const imageList = [
  { src: img1, alt: '4TheCrust 1' },
  { src: img2, alt: '4TheCrust 2' },
  { src: img3, alt: '4TheCrust 3' },
  { src: img4, alt: '4TheCrust 4' },
  { src: img5, alt: '4TheCrust 5' },
  { src: img6, alt: '4TheCrust 6' },
  { src: img7, alt: '4TheCrust 7' },
  { src: img8, alt: '4TheCrust 8' },
  { src: img9, alt: '4TheCrust 9' },
  { src: img10, alt: '4TheCrust 10' },
  { src: img11, alt: '4TheCrust 11' },
  { src: img12, alt: '4TheCrust 12' },
  { src: img13, alt: '4TheCrust 13' },
  { src: img14, alt: '4TheCrust 14' },
  { src: img15, alt: '4TheCrust 15' },
  { src: img16, alt: '4TheCrust 16' },
  { src: img17, alt: '4TheCrust 17' },
  { src: img18, alt: '4TheCrust 18' },
  { src: img19, alt: '4TheCrust 19' },
  { src: img20, alt: '4TheCrust 20' },
  { src: img21, alt: '4TheCrust 21' },
  { src: img22, alt: '4TheCrust 22' },
  { src: img23, alt: '4TheCrust 23' },
  { src: img24, alt: '4TheCrust 24' },
  { src: img25, alt: '4TheCrust 25' },
  { src: img26, alt: '4TheCrust 26' },
  { src: img27, alt: '4TheCrust 27' },
  { src: img28, alt: '4TheCrust 89' },
  { src: img29, alt: '4TheCrust 29' },
  { src: img30, alt: '4TheCrust 30' },
];

const Alexa = () => {

  useEffect(() => {
    document.title = "The Crest - Arpit Shah Projects"
  }, [])
  

  return (
    <div>
      <div className="container">
        <div className="row g-0">
        <div className="col-lg-12">
            <div className="row">
              {imageList.map((image, index) => (
                <div className={`col-lg-6 gy-4 ${index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'} text-md-center text-sm-center `} key={index}>
                  <img
                    src={image.src}
                    width={560}
                    height={746.66}
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

export default Alexa;
  