'use client'
import react from 'react';
import { AppDevelopment, WebDevelopment, MachineLearning } from "@/full-descriptions";
import { useState } from "react";
import ServiceCard from '@/components/Services';
import {FcServices} from 'react-icons/fc';


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
      <FcServices className='icon' size={70} alt='Logo'/>
          <div className='container'>
            <h1>What can we do for you?</h1>
          </div>
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
          <ServiceCard data={AppDevelopment} />
        ) : fullDescription == "web" ? (
          <ServiceCard data={WebDevelopment} />
        ) : (
          <ServiceCard data={MachineLearning} />
        )}
      </div>
    </main>
  );
}

