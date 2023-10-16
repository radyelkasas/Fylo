import React, { useState } from "react";
import FeaturBox from "./FeaturBox";

const Features = () => {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat itaque atque, quidem dolor quae eum esse expedita odio consectetur assumenda iste quia ipsam earum.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time cillaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat itaque atque, quidem dolor quae eum esse expedita odio consectetur assumenda iste quia ipsam earum.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat itaque atque, quidem dolor quae eum esse expedita odio consectetur assumenda iste quia ipsam earum.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat itaque atque, quidem dolor quae eum esse expedita odio consectetur assumenda iste quia ipsam earum.",
    },
  ]);
  return (
    <>
      <section className="pb-[150px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
            {items.map((item) => (
              <FeaturBox
                key={item.title}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
