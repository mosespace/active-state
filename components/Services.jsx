import React from "react";

export default function ServiceCard({ data }) {
  const { title, decription,  itemsArray } = data;
  return (
    <main>
      
      <div className="content">
      <h1>{title}</h1>
      <p className='description'>{decription}</p>
      {itemsArray.map((item, id)=>(
        <p>{item}</p>
      ))}
      </div>
    </main>
  );
}
console.log(ServiceCard);