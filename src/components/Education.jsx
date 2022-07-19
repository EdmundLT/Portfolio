import React from 'react'

const Education = (props) => {
  return (
    <div className="container mx-auto p-8 pb-10 justify-center text-center align-font-Poppins text-black bg-slate-100" id="education">
    <p className="text-3xl p-8">Education</p>
    <div className="text-slate-100 block p-8 m-4 rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700">
      <p className="text-2xl p-2">{props.school} - <span className="text-sm">{props.location}</span></p>
      <p className="text-1xl pb-2 text-inherit font-medium">{props.program}</p>
      <p className="text-lg p-2">{props.start} - {props.grad}</p>
      {/* Course */}

      </div>
    </div>
  )
}
export default Education