import React from "react";
import Button from "./Button";
const Card = ({ item, isSelected, onSelect }) => {

  return (
    <div
      className={`card border border-slate-300 rounded-lg cursor-pointer ${isSelected ? 'bg-green-100 drop-shadow-xl ring-1 ring-blue-400': 'bg-blue-100'}`}
      onClick={onSelect}
    >
      <div className="content p-4">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt="yards"
        />
       <div className="text-center">
       <h3 className="mt-2 font-bold">{item.size} Yard Skip</h3>
        <h5 className="text-slate-700 ">
          {item.hire_period_days} days hire period
        </h5>
        <div className="flex items-center justify-center">
          <Button text={`Select for ${item.price_before_vat}/week`} onClick={onSelect} isSelected={isSelected} />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Card;
