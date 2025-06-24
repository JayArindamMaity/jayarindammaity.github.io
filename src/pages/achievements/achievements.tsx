import "./achievements.css";
import Allcertificates from "../../components/certificates/certificates";
import { all_certificates } from "../../data/achievements";
export default function () {
  return (
    <>
      <div className="ach-main">
        <div className="ach-heading">About my achievements</div>
        <div className="ach-int-content">
          Welcome to another one of my weirdly made pages here you can see some
          of the certifications and achievements that I have...
          <br /> <br />
          This may include some weird achievements that even I don't know how I
          got or the ones that definitely woult not get me a job T_T
        </div>
        <div className="ach-heading">All Certificates</div>
        <div className="ach-all-certs">
            {all_certificates.map((all_certificates, index) => (
              <Allcertificates
                key={index}
                name={all_certificates.name}
                issuedate={all_certificates.issuedate}
                organisation={all_certificates.organisation}
                certlink={all_certificates.certlink}
              />
            ))}
        </div>
      </div>
    </>
  );
}
