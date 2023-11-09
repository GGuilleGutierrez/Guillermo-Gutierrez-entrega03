const CertificateComponent = ({src, title, date }) => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "flex-start"}}>
        <img src={src} style={{height: "60%"}}/><br />
        <span style={{fontSize: "16px", fontWeight: "500"}}>{title}</span>
        <p className="only-desktop" style={{fontSize: "14px", fontWeight: "500", color: "#828282"}}>{date}</p>
    </div>
  )
}

export default CertificateComponent