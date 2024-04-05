import React from 'react'

function LatestNews() {
  return (
      <div className="m-10 mt-24 mb-20 flex justify-center items-center w-[100%] ">
            

            <div className="relative w-[100%] rounded-md bg-white sm:h-[280px]  mt-14 text-black OxygenRegular border-l-[7px] border-l-red-600">
              <p className="p-7 text-4xl uppercase text-center font-bold  ">Latest news</p>
              <textarea
                name=""
                id=""
                value={"hellow world"}
                className="  w-[90%] h-[150px] border ml-4 mt-0    pointer-events-auto"
              >
                
              </textarea>
            </div>
          </div>
  )
}

export default LatestNews