import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/8ShreejiHeight/1.webp';
import img2 from '../assets/Img/All/8ShreejiHeight/2.webp';
import img3 from '../assets/Img/All/8ShreejiHeight/3.webp';
import img4 from '../assets/Img/All/8ShreejiHeight/4.webp';
import img5 from '../assets/Img/All/8ShreejiHeight/5.webp';
import img6 from '../assets/Img/All/8ShreejiHeight/6.webp';
import img7 from '../assets/Img/All/8ShreejiHeight/7.webp';
import img8 from '../assets/Img/All/8ShreejiHeight/8.webp';
import img9 from '../assets/Img/All/8ShreejiHeight/9.webp';
import img10 from '../assets/Img/All/8ShreejiHeight/10.webp';
import img11 from '../assets/Img/All/8ShreejiHeight/11.webp';
import img12 from '../assets/Img/All/8ShreejiHeight/12.webp';
import img13 from '../assets/Img/All/8ShreejiHeight/13.webp';
import img14 from '../assets/Img/All/8ShreejiHeight/14.webp';
import img15 from '../assets/Img/All/8ShreejiHeight/15.webp';
import img16 from '../assets/Img/All/8ShreejiHeight/16.webp';
import img17 from '../assets/Img/All/8ShreejiHeight/17.webp';
import img18 from '../assets/Img/All/8ShreejiHeight/18.webp';
import img19 from '../assets/Img/All/8ShreejiHeight/19.webp';
import img20 from '../assets/Img/All/8ShreejiHeight/20.webp';
import img21 from '../assets/Img/All/8ShreejiHeight/21.webp';
import img22 from '../assets/Img/All/8ShreejiHeight/22.webp';

const imageList = [
  { src: img1, alt: 'Alexa 1' },
  { src: img2, alt: 'Alexa 2' },
  { src: img3, alt: 'Alexa 3' },
  { src: img4, alt: 'Alexa 4' },
  { src: img5, alt: 'Alexa 5' },
  { src: img6, alt: 'Alexa 6' },
  { src: img7, alt: 'Alexa 7' },
  { src: img8, alt: 'Alexa 8' },
  { src: img9, alt: 'Alexa 9' },
  { src: img10, alt: 'Alexa 10' },
  { src: img11, alt: 'Alexa 11' },
  { src: img12, alt: 'Alexa 12' },
  { src: img13, alt: 'Alexa 13' },
  { src: img14, alt: 'Alexa 14' },
  { src: img15, alt: 'Alexa 15' },
  { src: img16, alt: 'Alexa 16' },
  { src: img17, alt: 'Alexa 17' },
  { src: img18, alt: 'Alexa 18' },
  { src: img19, alt: 'Alexa 19' },
  { src: img20, alt: 'Alexa 20' },
  { src: img21, alt: 'Alexa 21' },
  { src: img22, alt: 'Alexa 22' },
];

const Alexa = () => {

  useEffect(() => {
    document.title = "Shreeji Heights – Arpit Shah Projects";
      }, [])
     
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Loop through the first image list */}
            {imageList.map((image, index) => (
              <div className="pt-5 pb-5 text-center" key={index}>
                <img
                  src={image.src}
                  width={1024}
                  height={819.2}
                  alt={image.alt}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Alexa;
