import React from "react";
import Slider from "react-slick";
import { FaEye, FaDownload } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredcerts.css";

type FeaturedCert = {
  name: string;
  issuedate: string;
  issuedby: string;
  certimg: string;
  certdesc: string;
  certlink: string;
  downloadname: string;
};

type FeaturedCertProps = {
  certs: FeaturedCert[];
};

const Featuredcerts: React.FC<FeaturedCertProps> = ({ certs }) => {
  const cert_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 600,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="feat-main">
      <Slider {...cert_settings}>
        {certs.map((cert) => (
          <div key={cert.name}>
            <div className="cert-card">
              <img src={cert.certimg} alt={cert.name} className="cert-image" />
              <div className="cert-info">
                <h3 className="cert-heading">{cert.name}</h3>
                <p>{cert.certdesc}</p>
                <p>
                  <strong>Issued By:</strong> {cert.issuedby}
                </p>
                <p>
                  <strong>Date:</strong> {cert.issuedate}
                </p>
                <a
                  href={cert.certlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-buttons"
                >
                  <FaEye />
                </a>
                <a
                  href={cert.certimg}
                  download={cert.downloadname}
                  className="cert-buttons"
                >
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featuredcerts;
