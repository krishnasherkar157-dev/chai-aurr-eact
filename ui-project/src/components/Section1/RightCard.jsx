import React from "react";

function RightCard(props) {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        alt="ram"
        src={props.img}
      />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6">
        <h2 className=" ml-2 mt-2  bg-amber-50  text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">{props.id+1}</h2>
        <div>
            <p className="ml-2 mr-2 text-xl leading-normal text-white mb-12"> Lorem ipsum dolor sit aconsequatur provident omnis vero, expedita distinctio sequi itaque quis reiciendis iure libero  alias minus aperiam.</p>
            <div className="mb-3 ml-3 flex justify-between ">
                <button className="bg-blue-800 text-white px-8 py-2 font-medium rounded-3xl">{props.tag}</button>
                <button className="bg-blue-800 text-white font-medium py-3 px-4 mr-3 rounded-full"><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RightCard;