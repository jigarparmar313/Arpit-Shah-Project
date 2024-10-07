import React, { useEffect } from 'react';
import "../styles/imagehover.min.css"; // Assuming this file contains the CSS styles
import Nine1 from '../assets/Img/All/Nine/1.jpg';
import Nine2 from '../assets/Img/All/Nine/2.png';
import Nine3 from '../assets/Img/All/Nine/3.png';
import Nine4 from '../assets/Img/All/Nine/4.png';
import Nine5 from '../assets/Img/All/Nine/5.png';
import Nine6 from '../assets/Img/All/Nine/6.png';
import Nine7 from '../assets/Img/All/Nine/7.png';
import Nine8 from '../assets/Img/All/Nine/8.png';
import Nine9 from '../assets/Img/All/Nine/9.png';
import { Link } from 'react-router-dom';

const projectData = [
  { src: Nine1, title: 'Yohesh Home', description: '1 BHK' , link : "/yogeshwar-home/" },
  { src: Nine2, title: 'Callisto Sapphire', description: '3 BHK', link : "/callisto-sapphire/" },
  { src: Nine3, title: 'Alexa', description: '4 BHK', link : "/alexa/" },
  { src: Nine4, title: 'The Crest', description: '5 BHK', link : "/the-crest/" },
  { src: Nine5, title: 'Bunglow', description: 'Nadiad', link : "/nadiad-bungalow/" },
  { src: Nine6, title: 'Yohesh Homes', description: '2 BHK', link : "/yogeshwar-homes-2-bhk/" },
  { src: Nine7, title: 'Dharmadev', description: '2 BHK', link : "/dharmadev/" },
  { src: Nine8, title: 'Shreeji Heights', description: '3 BHK', link : "/shreeji-heights/" },
  { src: Nine9, title: 'Sankalp Grace 3', description: '3 BHK' , link : "/sankalp-grace-3/" }
];

const Residential_Projects = () => {

    useEffect(() => {
        document.title = "Residential Projects - Arpit Shah"
      }, [])
      

  return (
    <div className="container-fluid">
      <div className="row text-center">
        {projectData.map((project, index) => (
          <div className="col-lg-4" key={index}>
            <div className="p-2">
              <figure className="imghvr imghvr-shutter-in-out-diag-2">
                <img src={project.src} alt={project.title} width={486.4} height={324.06} className="img-fluid" />
                <figcaption className="figcaption-padding text-color">
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "35vh" }}>
                    <h1 className='fw-fw-bolder'>{project.title}</h1>
                    <h5 className='fw-light'>{project.description}</h5>
                  </div>
                </figcaption>
                <Link to={project.link}></Link>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Residential_Projects;
