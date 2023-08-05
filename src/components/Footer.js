import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="text-center  text-lg-start bg-light text-muted" >

  <section className="d-flex justify-content-center justify-content-lg-between p-4">
  
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  

   
    <div>
      <a href="https://www.facebook.com/riyar.sunny" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.netflix.com/in/title/70205012" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
   
  </section>


  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Totaram Sweets House
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      

      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Sweets</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Snacks</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Chaats</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Starter</a>
          </p>
        </div>
      

     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
 

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Haryana, Fardabad 121001, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            TotaRam@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 91+ 9891720200 </p>
          <p><i className="fas fa-print me-3"></i> 91+ 9015088766</p>
        </div>
        
      </div>
     
    </div>
  </section>
 

  
  <div className="text-center p-4" style={{backgroundcolor: "rgb(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://RiyarSunny.com/">RiyarSunny.com</a>
  </div>

</footer>
   </>
  )
}

export default Footer
