"use client";
import Lottie from "lottie-react"
import React from 'react';
import Feed from '@components/Feed';
import animationData from "../public/assets/images/Comp 1.json"
import { useState, useEffect } from "react";


const Home = () => {







  return (
    <section className="w-full flex-center flex-col">
    <div className="cont flex flex-wrap justify-between ">
  
      <div className="left w-full md:w-1/2 flex items-center justify-center flex-col">
        <h1 className='hero-text head_text text-center '>
        Discover the <br />Magic of <span className="pink">Quotes: </span>Heal & Inspire. 
        </h1>
  
        <p className='content-text desc text-center mx-auto leading-relaxed'>Embark on a delightful journey through a world of profound quotes, where inspiration thrives and motivation flourishes. Join our vibrant community, share your favorite quotes, and uplift others with your words.</p>

       



      </div>
  
      <div className="right w-full md:w-1/2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  
    <Feed />
  </section>
  
  );
};

export default Home;
