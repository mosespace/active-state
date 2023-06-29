import React from "react";

export default function ServiceCard({ data }) {
  const { title, decription,  items } = data;
  return (
    <main>
      <div className="content">
      <h1>{title}</h1>
      <p className='description'>{decription}</p>
      <p>{items}</p>
      </div>
    </main>
  );
}
console.log(ServiceCard);