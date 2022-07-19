import React from "react";

const About = (props) => {
  return (
    <div className="container mx-auto bg-slate-200 p-8 pb-10 content-center text-black md:flex" id="about">
      <div className="text-center p-4">
        <img
          className="rounded-full shadow-lg"
          src={props.me}
          alt="profilepicture"
          width="375"
          height="375"
        ></img>
      </div>
      <div className="m-10 text-center text-black md:w-1/2">
        <p className="text-3xl pb-4 font-Poppins">About me</p>
        <p className="lead text-md font-Poppins leading-7">
          {props.description}
        </p>
        <div className="text-center w-full mt-4 p-4">
          <a
            href={props.resume}
            className="text-black hover:bg-sky-500 border-solid border-2 border-black font-Poppins py-2 px-4 rounded"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
