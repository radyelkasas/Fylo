import React from "react";

const StayProductive = () => {
  return (
    <>
      <section className="pb-[150px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
          <div>
            <img src="./images/illustration-stay-productive.png" />
          </div>
          <div className="text-white">
            <h3 className="font-medium text-[35px] leading-[50px]">
              Stay Productive,
              <br />
              wherever you are
            </h3>
            <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
              <p className="mb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quibusdam commodi? Nam nostrum tempore alias!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quibusdam commodi? Nam nostrum tempore alias!
              </p>
            </div>
            <a href="/" className="text-primary flex items-center gap-[15px] w-fit hover:text-[#42b0d1] border-b-[2px] border-primary border-solid pb-[5px] transition-colors duration-200">
              See how Fylo works
              <img
                src="./images/icon-arrow.svg"
                className="w-[20px] h-[20px] object-contain animate-moveRight"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StayProductive;
