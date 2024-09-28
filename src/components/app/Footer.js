import React from "react";

// menuData.js

const menuData = [
  {
    title: "Product",
    items: ["Jewelry", "Swimwear", "Dresses", "Watches"],
  },
  {
    title: "Brand",
    items: [
        "About",
      "Play, win & save",
      "Design",
      "Waterproof",
      "Our Stores",
      "Shop our Instagram",
      "Shop the Look",
      "Resources",
    ],
  },
  {
    title: "Resources",
    items: ["Ring Sizer", "Rewards", "Packaging"],
  },
  {
    title: "Support",
    items: ["Color Warranty", "Start a return", "Contacts", "FAQ", ],
  },
  {
    title: "Join us",
    items: ["Careers", "Stockists"],
  },
  {
    title: "Social",
    items: [
      "Instagram",
      "Facebook",
      "Youtube",
      "Tiktok",
      "LinkedIn",
      "Pinterest",
    ],
  },
];

function Footer() {
  return (
    <>
      <div className="flex mt-20 h-[50rem]">
        <div className="w-4/12 bg-blue-300">Accessed Smart Phone</div>
        <div className="w-8/12 bg-green-300">
          <div className="flex justify-between">
            {menuData.map((menu, index) => (
            
              <div >
                  <p className="font-bold">{menu.title}</p>
                  <ul className="">
                    {menu.items.map((item, idx) => (
                      <li>
                        <a key={idx} href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
