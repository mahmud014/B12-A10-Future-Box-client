import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="h-[280px] w-full rounded-2xl object-cover overflow-hidden p-4 "
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default MenuCard;
