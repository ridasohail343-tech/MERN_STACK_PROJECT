import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-112.5"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our store — where style, quality, and simplicity come together.
            We believe shopping should be easy, enjoyable, and accessible to everyone.
            Our goal is to bring you carefully selected products that combine modern
            style, reliable quality, and great value. From everyday essentials to the
            latest trends, we’re constantly updating our collection so you can discover
            something new whenever you visit.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Thank you for choosing us and being part of our journey. We’re excited to
            help you find products you’ll love.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

