import React from "react";

function Banner() {
  return (
    <div className=" ">
      {/*---------------------------- Banner image---------------------- */}
      <div className="bg-[url('/images/landingpage.png')] bg-cover bg-center w-full bg-no-repeat">
        <div className="w-[95%] m-auto ">
          {/*--------------------- product images------------------ */}
          <div className="flex md:flex-row justify-between flex-col">
            {/* ----------------vape image------------------ */}
            <div className="md:mt-[13%] ">
              <img
                className="2xl:w-[800px] xl:w-[500px] lg:w-[350px] w-[320px] m-auto vape_image hover:scale-110 duration-700"
                src="/images/vape.png"
                alt="product vape image"
              />
            </div>
            {/*-----------------GUMMY IMAGE----------------- */}
            <div className="md:mt-[13%]">
              <img
                className="2xl:w-[800px] xl:w-[500px] lg:w-[400px] w-[320px] m-auto  gummy_image  hover:scale-110 duration-700"
                src="/images/gummy.png"
                alt="product gummies image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
