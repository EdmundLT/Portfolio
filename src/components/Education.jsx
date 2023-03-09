import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
const Education = (props) => {
  return (
    <div
      className="container mx-auto p-8 pb-10 justify-center text-center 
      align-font-Poppins text-black bg-[#F9F7F7] rounded-lg"
      id="education"
    >
      <p className="text-3xl p-8">Education</p>

      <FadeIn delay={750} transitionDuration={1000}>
        <div className="card w-96 bg-info-content shadow-xl text-white mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={props.logo}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{props.school} - <span className="text-sm">{props.location}</span></h2>
            <p>{props.program}</p>
            <p className="pb-2">{props.start} - {props.grad}</p>
          </div>
        </div>
      </FadeIn>
    </div>
    // </div>
  );
};
export default Education;
