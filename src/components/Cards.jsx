import React from "react";
import card from '../cards.json'
const Cards = () => {
  return (
    <>
    <div className="border max-w-[1240px] mx-auto flex flex-wrap mt-20 bg-gray-900 text-slate-200">
      {card.map((c)=>{
        return(
          <div className="border m-5 w-[200px] p-2 dark:bg-white dark:text-black">
          <h1 className="text-center text-2xl font-bold">{c.title}</h1>
          <p>{c.text}</p>
          <button>{c.btnn}</button>
          </div>
        )
      })}
    </div>
     
    </>
  );
};

export default Cards;
