import React from "react";
import Image from "next/image";

export default function ServiceCard({ data }) {
  const { image, title, decription,  itemsArray } = data;
  return (
    <section>
      <div className="used-image">
        <Image src={image} width={100} height={100} alt={title}/>
      

        <div className="content">
        <h1>{title}</h1>
        
        <p className='description'>{decription}</p>
        {itemsArray.map((item, id) => (
            <p key={id}>{item}</p>
        ))}
      </div>
      </div>
    </section>
  );
};