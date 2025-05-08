import React, { useState, useEffect } from 'react'
import "./services.css"
import { services } from './data/servicesData'
import serIcon from  "../assets/Vector-1.png"


const Services = () => {
  const [isServices, setIsServices] = useState(null)
  const [activeServices, setActiveServices] = useState("AI Development")

  useEffect(() => {
    const found = services.find(serv => serv.title === activeServices)
    setIsServices(found)
  }, [activeServices])

  return (
    <div className='services-outer-container'>
      <div>
        <div className="heading">
          <img src={serIcon} alt="" />
          <h1>Services We Offer</h1>
        </div>
      </div>

      <div className='services-inner-container'>
        <div className='services-list'>
          {services.map((service, id) => (

            <button
              key={id}
              // className='service-btn'
              className={`${service.title === activeServices ? "active-services" : ""} service-btn`}


              onClick={() => setActiveServices(service.title)}>
              {service.title}
            </button>

          ))}
        </div>
        {isServices && (
          <div className='display-services'>

            <h2>{isServices.title}</h2>
            <p className='services-des'>{isServices.description}</p>
            <h4>Business Benefits of Choosing Us</h4>
           
          
            <ul>
              {isServices.business_benefits.map((benefit, idx) => (

                <li key={idx}><span>{benefit.heading}</span>: {benefit.content}</li>

              ))}
            </ul>
         
            <button  className='read-more'><a href="#">Read More</a>  </button>
          </div>
          
        )}
      </div>

    </div>
  )
}

export default Services
