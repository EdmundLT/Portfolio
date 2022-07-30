import React from "react";

const Contact = (props) => {
  return (
    <div className="container rounded-lg mx-auto bg-[#F9F7F7] text-center font-Poppins p-8 content-center justify-around" id="contact">
      <div className="md:text-left pl-4 pt-6">
        <p className="text-3xl pb-2">Contact Me</p>
        <p>{props.message}</p>
      </div>
      <div className=" text-black p-2 pb-8 md:text-right">
        <p className="pt-4">Email address</p>
        <p className="pb-4">{props.email}</p>
        <a
          href={props.sendemail}
          className="text-black hover:bg-sky-500 hover:text-[#E7F6F2] border-solid border-2 border-black font-Poppins py-2 px-4 rounded"
        >
          Send email
        </a>
      </div>
    </div>
  );
};

export default Contact;
