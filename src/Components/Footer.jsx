const Footer = () => {
  return (
    <div style={{backgroundColor:"#1A0B2E",width:"100%"}}>
      <div className='container p-5 text-center'>
        <h5 style={{textTransform:"uppercase"}} className='text-white'>Contact</h5>
        <p className='text-white'>Email: <a style={{display:"inline-block",textDecoration:"none"}} href="">demo123@gmail.com</a></p>
        <div className='d-flex gap-4 justify-content-center w-100'>
          <i className="fa-brands fa-instagram text-white fs-3"></i>
          <i className="fa-brands fa-square-facebook text-white fs-3"></i>
          <i class="fa-brands fa-whatsapp text-white fs-3"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer