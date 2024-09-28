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
      <div className="flex mt-20 h-fit gap-2 border-t-2 border-t-slate-100 py-5">
        <div className="w-4/12 text-xl font-bold">Accessed Smart Phone</div>
        <div className="w-8/12 ">
          <div className="flex justify-between">    
            {menuData.map((menu, index) => (
            
              <div>
                  <p className="font-bold">{menu.title}</p>
                  <ul className="">
                    {menu.items.map((item, idx) => (
                      <li className="py-1">
                        <a key={idx} href="#" className="font-semibold text-gray-600">{item}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-end font-semibold text-gray-500 py-5 border-t-2 border-t-slate-100">
        Terms of Services . Privacy Policy
      </div>
    </>
  );
}

export default Footer;
