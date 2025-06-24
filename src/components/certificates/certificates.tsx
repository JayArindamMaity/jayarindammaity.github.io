import './certificates.css'

interface AllCertificatesProps {
    name : string,
    organisation: string,
    issuedate : string,
    certlink: string,
}
const Allcertificates: React.FC<AllCertificatesProps> = ({
    name,
    organisation,
    issuedate,
    certlink,
}) => {
    return (
        <>
            <div className='cert-main'>
                <div className='cert-name'>
                    <a href={certlink} target='blank' className='cert-button'>{name}</a>
                </div>
                <div className='cert-cont'>
                    Provided by {organisation} on {issuedate}
                </div>
            </div>
            <hr />
        </>
    )   
}

export default Allcertificates;