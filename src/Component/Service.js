import React from 'react'
import Header from './Header'
import image5 from '../assert/branding.png';
import image6 from '../assert/quality.png';
import image7 from '../assert/creativity1.png';
import image8 from '../assert/design.png';



export default function Service() {
  return (
    <div>
         <div class="Wrapper">
        <Header/>
        <div class="container mt-4">
            <h1 class="heading">Professional Services</h1>
            <p class="para">
                We are reliable and affordabledigital agency and talent network, We channel creativity, colors, copy and
                code to help oue clients with better branding
            </p>
            
                <div class="row ">
                    <h2 class="text-center mt-4">Our Services</h2>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-5">
                        <div class="card " >
                            <img src= {image5}  alt="..."/>
                            <div class="card-body">
                                <h4 class="text-center">BRANDING</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-5">
                        <div class="card">
                            <img src= {image6} alt="..."/>
                            <div class="card-body">
                                <h4 class="text-center">QUALITY</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-5 ">
                        <div class="card" >
                            <img src= {image7}  alt="..."/>
                            <div class="card-body">
                                <h4 class="text-center">CREATIVITY</h4>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-5 ">
                        <div class="card" >
                            <img src= {image8}  alt="..."/>
                            <div class="card-body">
                                <h4 class="text-center">DESIGN</h4>
                               
                            </div>
                        </div>
                    </div>



                </div>
                
        



        </div>

    </div>

    </div>
  )
}
