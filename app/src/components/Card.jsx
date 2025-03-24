import React from "react";
import Button from "./Button";
import skipImage from "../assets/cardImage.jpeg";

const Card = React.memo(({ item, isSelected, onSelect }) => {
  return (
    <div
      className={`card rounded-lg cursor-pointer transition-all  duration-300 hover:scale-105 hover:border-2 border-blue-700 ${
        isSelected
          ? "bg-green-100 drop-shadow-xl ring-1 ring-blue-400 hover:border-green-500"
          : "bg-blue-300"
      }`}
      onClick={onSelect}
    >
      <div className="content p-4 text-center">
        <img
          src={skipImage}
          alt={`${item.size} Yard Skip`}
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
        <h3 className="mt-2 font-bold text-lg">{item.size} Yard Skip</h3>
        <h5 className="text-slate-700">
          {item.hire_period_days} days hire period
        </h5>

        <Button
          text={`Select for ${item.price_before_vat}$/week`}
          isSelected={isSelected}
        />
      </div>
    </div>
  );
});

export default Card;
