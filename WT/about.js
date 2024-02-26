import React from 'react'
import './aboutus.css'
import PropTypes from 'prop-types'

export default function Aboutus(props) {
  return (
    <>
        <section className="hero">
            <div className="heading">
            <h1>About Us</h1>
            </div>
            <div className="container">
                 <div className="hero-content">
                    <h2><strong>welcome to our website</strong></h2>
                    <p>
                        Social,Global,Environmental,Goverance issues are a problem
                        that influences the common citizen of our country.
                        This website is the platform where every individual
                        can upload all the minor problems which in future may 
                        leads to hazardous events,so that this can be witness by
                        all our fellow beings and highlights all the events that 
                        are happening surrounding us and alert them from taking caution.
                        This also become a feild where u can come up with ideas to supress
                        these issues and mentain a harmonious and healthy Ecosystem.
                            <strong>"Let's Develop White Mind to Create a Change Catalyst...."</strong>
                    </p>
                        <button className="cta-button">Learn More</button>
                    </div>
                    <div className="hero-image">
                        <img src="abtus.jpeg"/>
                    </div>


            </div>
                
            
        </section>
        

    

    
    </>
  )
}