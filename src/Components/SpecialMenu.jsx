import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import MenuCard from "./MenuCard";

const SpecialMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu items");
        return res.json();
      })
      .then((data) => {
        if (!data || data.length === 0) {
          Swal.fire("No Menu Items", "Please add items in MongoDB", "info");
        } else {
          setMenuItems(data);
        }
      })
      .catch((err) => {
        Swal.fire("Error", err.message || "Failed to load menu items", "error");
      });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Special Menu</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Explore the dishes our customers love the most — made with passion and
          served with care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
