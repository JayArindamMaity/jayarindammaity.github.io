import "./achievements.css";
import Allcertificates from "../../components/certificates/certificates";
import { all_certificates } from "../../data/achievements";

interface Certificate {
  name: string;
  issuedate: string;
  organisation: string;
  certlink: string;
}

const monthIndex: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

export default function CertificatesPage() {
  const sortedCertificates: Certificate[] = [...all_certificates].sort(
    (a, b) => {
      const [monthA, yearA] = a.issuedate.trim().split(/\s+/);
      const [monthB, yearB] = b.issuedate.trim().split(/\s+/);

      const yearDiff = parseInt(yearB, 10) - parseInt(yearA, 10);
      if (yearDiff !== 0) return yearDiff;

      const monthNumA = monthIndex[monthA.toLowerCase()];
      const monthNumB = monthIndex[monthB.toLowerCase()];

      return monthNumB - monthNumA;
    }
  );

  return (
    <div className="ach-main">
      <div className="ach-heading">About my achievements</div>
      <div className="ach-content">
        Welcome to another one of my weirdly made pages; here you can see some
        of the certifications and achievements that I have...
        <br /> <br />
        This may include some weird achievements that even I don't know how I
        got or the ones that definitely would not get me a job T_T
      </div>

      <div className="ach-featured-cert">
        <div className="ach-heading">Featured Certificates</div>
        <div className="ach-content">
          These are some of the best certifications that I have, most of them are technical and showcases my ability to deal with various technical challenges. 
        </div>
      </div>

      <div className="ach-heading">All Certificates</div>
      <div className="ach-all-certs">
        {sortedCertificates.map((cert, index) => (
          <Allcertificates
            key={index}
            name={cert.name}
            issuedate={cert.issuedate}
            organisation={cert.organisation}
            certlink={cert.certlink}
          />
        ))}
      </div>
    </div>
  );
}
