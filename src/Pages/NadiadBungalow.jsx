import React, { useEffect } from 'react';
import img1 from '../assets/Img/All/5NadiadBungalow/1.webp';
import img2 from '../assets/Img/All/5NadiadBungalow/2.webp';
import img3 from '../assets/Img/All/5NadiadBungalow/3.webp';
import img4 from '../assets/Img/All/5NadiadBungalow/4.webp';
import img5 from '../assets/Img/All/5NadiadBungalow/5.webp';
import img6 from '../assets/Img/All/5NadiadBungalow/6.webp';
import img7 from '../assets/Img/All/5NadiadBungalow/7.webp';
import img8 from '../assets/Img/All/5NadiadBungalow/8.webp';
import img9 from '../assets/Img/All/5NadiadBungalow/9.webp';
import img10 from '../assets/Img/All/5NadiadBungalow/10.webp';
import img11 from '../assets/Img/All/5NadiadBungalow/11.webp';
import img12 from '../assets/Img/All/5NadiadBungalow/12.webp';
import img13 from '../assets/Img/All/5NadiadBungalow/13.webp';
import img14 from '../assets/Img/All/5NadiadBungalow/14.webp';
import img15 from '../assets/Img/All/5NadiadBungalow/15.webp';
import img16 from '../assets/Img/All/5NadiadBungalow/16.webp';
import img17 from '../assets/Img/All/5NadiadBungalow/17.webp';
import img18 from '../assets/Img/All/5NadiadBungalow/18.webp';
import img19 from '../assets/Img/All/5NadiadBungalow/19.webp';
import img20 from '../assets/Img/All/5NadiadBungalow/20.webp';
import img21 from '../assets/Img/All/5NadiadBungalow/21.webp';
import img22 from '../assets/Img/All/5NadiadBungalow/22.webp';

const imageList = [
  { src: img1, alt: 'NadiadBungalow 1' },
  { src: img2, alt: 'NadiadBungalow 2' },
  { src: img3, alt: 'NadiadBungalow 3' },
  { src: img4, alt: 'NadiadBungalow 4' },
  { src: img5, alt: 'NadiadBungalow 5' },
  { src: img6, alt: 'NadiadBungalow 6' },
  { src: img7, alt: 'NadiadBungalow 7' },
  { src: img8, alt: 'NadiadBungalow 8' },
  { src: img9, alt: 'NadiadBungalow 9' },
  { src: img10, alt: 'NadiadBungalow 10' },
  { src: img11, alt: 'NadiadBungalow 11' },
  { src: img12, alt: 'NadiadBungalow 12' },
  { src: img13, alt: 'NadiadBungalow 13' },
  { src: img14, alt: 'NadiadBungalow 14' },
  { src: img15, alt: 'NadiadBungalow 15' },
  { src: img16, alt: 'NadiadBungalow 16' },
  { src: img17, alt: 'NadiadBungalow 17' },
  { src: img18, alt: 'NadiadBungalow 18' },
  { src: img19, alt: 'NadiadBungalow 19' },
  { src: img20, alt: 'NadiadBungalow 20' },
  { src: img21, alt: 'NadiadBungalow 21' },
  { src: img22, alt: 'NadiadBungalow 22' },
];

const NadiadBungalow = () => {

  useEffect(() => {
document.title = "Nadiad Bungalow – Arpit Shah Projects";
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
                    height={560}
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

export default NadiadBungalow;
  