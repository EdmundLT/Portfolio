import React from "react";

const SkillCard = (props) => {
  return (
    <div>
      <div className="text-slate-100 block bg-white rounded-xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center p-10">
        <p className="text-2xl pb-2">{props.title}</p>
        <ul>
          {props.list.map((skill, i) => {
            return (
              <li className="p-1 text-left">
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
