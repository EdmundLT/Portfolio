import React from "react";

const SkillCard = (props) => {
  return (
    <div>
      <div className="text-[#30E3CA] rounded-xl border shadow-md bg-[#393E46] border-gray-700 hover:bg-gray-700 hover:text-[#E7F6F2] text-center p-8">
        <p className="text-2xl pb-2">{props.title}</p>
        <ul>
          {props.list.map((skill, i) => {
            return (
              <li className="p-2 text-left">
                <p className="pb-2">
                  {skill.name} - <span className="text-xs">{skill.level}</span>
                </p>
                <div
                  className="bg-[#30E3CA] h-2.5 rounded-full"
                  style={{ width: `${skill.score}%` }}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
