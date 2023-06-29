'use client'
import react from 'react';
import Image from 'next/image'
import { AppDevelopment, WebDevelopment, MachineLearning, benefits } from "@/full-descriptions";
import { useState } from "react";
import Services from '@/components/Services';
import {FcServices} from 'react-icons/fc';
import BenefitsCard from '@/components/BenefitsCard';



export default function Home() {
  const [fullDescription, setfullDescription] = useState("app");
  function changeToApp() {
    setfullDescription("app");
  }
  function changeToWeb() {
    setfullDescription("web");
  }
  function changeToMachine() {
    setfullDescription("machine");
  }
  return (
    <main>
      <div className="buttons">
        <button
          className={fullDescription == "app" ? "activeBtn" : ""}
          onClick={changeToApp}
        >
          App Dev
        </button>
        <button
          className={fullDescription == "web" ? "activeBtn" : ""}
          onClick={changeToWeb}
        >
          Web Dev
        </button>
        <button
          className={fullDescription == "machine" ? "activeBtn" : ""}
          onClick={changeToMachine}
        >
          Machine Learning
        </button>
      </div>
      <div className="services">
        {fullDescription == "app" ? (
          <Services data={AppDevelopment} />
        ) : fullDescription == "web" ? (
          <Services data={WebDevelopment} />
        ) : (
          <Services data={MachineLearning} />
        )}
      </div>
      <div className='cards'>
        {benefits.map((item)=>{
          return (
            <BenefitsCard data={item} key={item.id}/>
          )
        })}
      
      </div>
    </main>
  );
}

