import React from 'react';
import about1 from '../../images/about-1.jpg';
import about2 from '../../images/about-2.jpg';
import about3 from '../../images/about-3.jpg';
import about4 from '../../images/about-4.jpg';

const About = () => {
    return (
        <div>
            <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 items-center justify-around'>
                <div className='text-justify py-5'>
                    <h2 className='font-semibold text-3xl mb-2'>About Majestry Guitar Product</h2>
                    <p>Launched in 2005, It is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around the world.</p>
                </div>
                <div className='p-20'>
                    <img className='w-full rounded-lg' src={about1} alt="About Majestry Guitar Product" />
                </div>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 items-center justify-around bg-gray-100'>
                <div className='p-20'>
                    <img className='w-full rounded-lg' src={about2} alt="About Our Mission" />
                </div>
                <div className='text-justify py-5'>
                    <h2 className='font-semibold text-3xl mb-2'>Our Mission</h2>
                    <p>As part of the Majestry Guitar, our mission is to make it easy to do business anywhere. <br></br> We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find products and suppliers quickly and efficiently.</p>
                </div>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 items-center justify-around'>
                <div className='text-justify py-5'>
                    <h2 className='font-semibold text-3xl mb-2'>One-Stop Sourcing</h2>
                    <p>Majestry Guitar brings you hundreds of millions of products in over 40 different major categories, including consumer electric guitar, acoustic guitar and apparel. <br></br> Buyers for these products are located in 190+ countries and regions, and exchange hundreds of thousands of messages with suppliers on the platform each day.</p>
                </div>
                <div className='p-20'>
                    <img className='w-full rounded-lg' src={about3} alt="About One-Stop Sourcing" />
                </div>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 items-center justify-around bg-gray-100'>
                <div className='p-20'>
                    <img className='w-full rounded-lg' src={about4} alt="Anytime in Anywhere" />
                </div>
                <div className='text-justify py-5'>
                    <h2 className='font-semibold text-3xl mb-2'>Anytime in Anywhere</h2>
                    <p>As a platform, we continue to develop services to help businesses do more and discover new opportunities. <br></br> Whether it's sourcing from your mobile phone or contacting suppliers in their local language, turn to Majestry Guitar for all your global business needs.</p>
                </div>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-5 mx-10 justify-around text-left'>
                <div>
                    <h2 className='font-semibold text-xl'>Customer Services</h2>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Submit a Complaint</p>
                    <p>Policies and Rules</p>
                    <p>Get Paid for Your Feedback</p>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>About Us</h2>
                    <p>About Majestry Guitar</p>
                    <p>About Majestry Group</p>
                    <p>Site Map</p>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>Buy on Majestry</h2>
                    <p>By Category</p>
                    <p>Get Quotations</p>
                    <p>Wholesale</p>
                    <p>Popular Product Trends</p>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>Sell on Majestry</h2>
                    <p>Supplier Memberships</p>
                    <p>Learning Center</p>
                    <p>Training Center</p>
                    <p>Majestry Source Pro</p>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>Trade Services</h2>
                    <p>Business Identity</p>
                    <p>Secure Payment</p>
                    <p>E-Credit Line</p>
                    <p>Inspection Service</p>
                </div>
            </div>
        </div>
    );
};

export default About;