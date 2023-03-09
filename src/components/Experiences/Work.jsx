import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
const Work = (props) => {
  return (
    // <div className="w-full block max-w-sm rounded-lg border shadow-md bg-[#393E46]
    // border-gray-700 hover:bg-gray-700
    // text-center p-10 text-[#F9F7F7] hover:text-[#E7F6F2]">

    // <div class="text-[#393E46] flex justify-center text-center">
    //   <FadeIn delay={750} transitionDuration={1000}>
    //     <div className="card w-96 glass">

    //       <div className="card-body items-center text-center">

    //       </div>
    //     </div>
    //   </FadeIn>
    // </div>
    <div>
      <FadeIn delay={750} transitionDuration={1000}>
        <div className="flex justify-around">
          <div className="w-48 h-56 grid grid-cols-1 gap-4 content-center">
            <figure className="pt-2 drop-shadow-2xl">
              <img src={props.clogo} alt="car!" />
            </figure>
          </div>
          <div className="h-56 grid grid-cols-1 gap-4 content-center">
            <a href={props.coUrl}>
              <p className="text-xl">
                {props.company}{" "}
                <span className="text-sm">-{" "}{props.location}</span>
              </p>
            </a>

            <p className="text-1xl p-2 font-semibold">
              {props.title} - <span className="text-sm">{props.type}</span>
            </p>
            <p className="text-md">
              {props.start} - {props.end}
              <p className="text-sm py-2">{props.duration}</p>
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Work;
