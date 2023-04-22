import React from 'react'
import image1 from '../assert/customer.png';
import image2 from '../assert/refund.png';
import image3 from '../assert/prosperity.png';
import image4 from '../assert/phone2.png';
import Header from './Header'
import './About.css';

export default function About() {
  return (
    <div>

<div class="Wrapper">
        <Header/>
        <div class="container mt-4">
            <h1 class="heading">Powering Prosperity around the world</h1>
            <p class="para">Inut is the global technology platform that helps consumers and small businesses overcome
                their most important financial challenges.

            </p>
            <div class="row ">
                <div class="col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12 mt-4 ">
                    <h1>Efficiently Manage your Expenses, create budgets, and save money</h1>
                    <p>Inut is a top-rated expense and budget tracking tool that provides a sleek and user-friendly
                        interface. With its interactive, personalized chart, you can easily view your expense history
                        and
                        log new expenses with just a single touch. This tool simplifies the process of tracking and
                        budgeting your expenses, making it effortless to manage your finances.</p>
                    <button type="button" class="btn bg-dark text-white">Download on the app store</button>
                    <button type="button" class="btn bg-dark text-white">Download on the Play store</button>

                </div>
                <div class="col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12 mt-4">
                    <img class="phone"src= {image4} />

                </div>
                <div class="row ">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
                        <div class="card h-100 " >
                            <img src= {image1}  alt="..."/>
                            <div class="card-body">
                                <h4>Everything Starts with the Customer</h4>
                                <p class="card-text">We are obsessed with our customers. We never stop listening to
                                    customers so we can understand both their dreams and the challenges they face and
                                    then get to work using technology to solve their most important problems. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-5">
                        <div class="card h-100">
                            <img src= {image2} alt="..."/>
                            <div class="card-body">
                                <h4>Products to Power Prosperity</h4>
                                <p class="card-text">Serving more than 100 million customers worldwide with TurboTax,
                                    QuickBooks, Mint, Credit Karma and Mailchimp, Intuit helps put more money in
                                    consumers and small businesses pockets, saving them time by eliminating work, and
                                    ensuring they have confidence in every financial decision they make.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-5 ">
                        <div class="card h-100" >
                            <img src= {image3}  alt="..."/>
                            <div class="card-body">
                                <h4>Powering Prosperity Beyond Products</h4>
                                <p class="card-text">The work of powering prosperity goes beyond our products. Around
                                    the world people struggle to make ends meet. Economic opportunity is still not
                                    available to all. And climate change is having an oversized impact on distressed
                                    communities. At Intuit, we’re committed to using our unique position to find ways to
                                    power prosperity, especially for those that need it most.</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>



        </div>

    </div>

    </div>
  )
}
