import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
const Work = (props) => {
  return (
    // <div className="w-full block max-w-sm rounded-lg border shadow-md bg-[#393E46]
    // border-gray-700 hover:bg-gray-700
    // text-center p-10 text-[#F9F7F7] hover:text-[#E7F6F2]">

    <div class="text-[#393E46] flex justify-center text-center">
      <FadeIn delay={750} transitionDuration={1000}>
        <div>
          <img
            className="rounded-t-3xl p-2 w-60 mx-auto"
            src={props.clogo}
            alt="logo"
          />
        </div>
        <div>
          <a href={props.coUrl}>
            <p className="text-2xl p-2 font-bold">{props.company}</p>
          </a>
          <span className="text-sm">{props.location}</span>
          <p className="text-1xl p-2 font-semibold">
            {props.title} - <span className="text-sm">{props.type}</span>
          </p>
          <p className="text-md">
            {props.start} - {props.end}
            <p className="text-xs py-2">{props.duration}</p>
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Work;
