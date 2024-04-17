import React from 'react'

function Statistique() {
  return (
    <div>
      <p className='mb-[30px] text-slate-950 font-bold text-[18px] lg:w-[400px] 2xl:w-[600px]'>Quelques statistiques durant l'année en cours</p>
      <div className='grid grid-rows-2 grid-flow-col gap-3'>
        <div>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              7
            </span>
          </button>
          <p className='ml-[50px] mt-[-35px] lg:w-[150px] 2xl:w-[300px] text-sm text-white '>Pays signataires</p>
        </div>
     
        <div className='2xl:mt-[30px]'>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              2
            </span>
          </button>
          <p className='ml-[50px] mt-[-35px] lg:w-[150px] 2xl:w-[300px] text-sm text-white '>Centres régionaux</p>
        </div>

        <div className='ml-[-35px]'>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              +10
            </span>
          </button>
          <p className='ml-[50px] mt-[-35px] lg:w-[150px] 2xl:w-[250px] text-sm text-white '>Formations dans l'année</p>
        </div>

        <div className='ml-[-35px] 2xl:mt-[30px]'>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              +50
            </span>
          </button>
          <p className='ml-[50px] mt-[-35px] lg:w-[150px] 2xl:w-[250px] text-sm text-white '>Missions effectuées</p>
        </div>
      </div>
    </div>
  )
}

export default Statistique