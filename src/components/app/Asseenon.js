import React from 'react';

const Asseenon = () => {
  const imageLinks = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/75/The_Guardian_2018.svg", value: "The Guardian" },
    { src: "https://www.theramblehotel.com/wp-content/uploads/2017/11/Vogue-logo-1.png", value: "Vogue" },
    { src: "https://logovtor.com/wp-content/uploads/2021/10/the-independent-logo-vector.png", value: "The Independent" }
  ];

  return (
    <div className="mt-20">
      
      <div className="flex justify-between gap-4">
        {imageLinks.map((image, index) => (
          <div key={index} className="flex items-center justify-center w-4/12 bg-white border-gray-200 border-2 rounded-lg">
            <img src={image.src} alt={image.value} className="w-max h-max"/>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-3">
        <div>
          <div className="w-4/12">
            <p>Free gift with 1st order</p>
            <div>Join our newsletter to claim it</div>
          </div>
          <div className="w-8/12 flex">
            <input type="text" className="p-3 border-2 border-gray-500"></input>
            <button className="p-3 bg-pink-300">Subscribe</button>
          </div>
        </div>
        <div className="w-8/12">
          <img src="https://a.storyblok.com/f/237022/1572x364/988394fbf7/footer.png/m/2048x0/" className="w-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Asseenon;
