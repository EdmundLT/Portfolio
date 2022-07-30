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
      <img src={props.logo} alt="CClogo" className="mx-auto pb-4 rounded-full shadow-sm"/>
        <p className="text-2xl p-2">
          {props.school} - <span className="text-sm">{props.location}</span>
        </p>
        <p className="text-1xl p-2 text-inherit font-medium">
          {props.program}
        </p>
        <p className="text-lg p-2">
          {props.start} - {props.grad}
        </p>
      </FadeIn>
    </div>
    // </div>
  );
};
export default Education;
