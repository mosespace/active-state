import React from "react";

export default function ServiceCard({ data }) {
  const { image, title, decription,  itemsArray } = data;
  return (
    <section>
      <div className="used-image">
        <img src={image} />
      </div>
        <div className="content">
        <h1>{title}</h1>
        
        <p className='description'>{decription}</p>
        {itemsArray.map((item, id) => (
            <p key={id}>{item}</p>
        ))}
      </div></section>
  );
}
console.log(ServiceCard);