import React from 'react'

const Not_Found = () => {
  return (
    <div className='px-40 py-25'>
      <div className=" w-full flex justify-between bg-sky-800/50 backdrop-blur-lg p-40 gap-50 rounded-xl">
        <div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
          <div className="mt-5 w-xl">
            <h1 className="text-white font-bold text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="mt-3 text-gray-900 text-xl">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <button className="sm:w-full lg:w-auto my-4 border rounded md py-4 px-8 text-xl text-center bg-white text-black hover:bg-black hover:text-white">
              GO BACK HOME
            </button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  )
}

export default Not_Found