import React from "react";

const SkillCard = (props) => {
  return (
    <div>
      <div className="text-slate-100 rounded-xl border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700 text-center p-8">
        <p className="text-2xl pb-2">{props.title}</p>
        <ul>
          {props.list.map((skill, i) => {
            return (
              <li className="p-2 text-left">
                <p className="pb-2">
                  {skill.name} - <span className="text-xs">{skill.level}</span>
                </p>
                <div
                  className="bg-green-500 h-2.5 rounded-full"
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
