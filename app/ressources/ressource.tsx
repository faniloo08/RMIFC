import React from 'react'
import Link from 'next/link'

function Ressource() {
  return (
    <div>
        <div className='sm:ml-[40px] 2xl:w-[1480px] lg:w-[1000px] 2xl:h-[700px] lg:h-[600px] bg-gradient-to-r from-[#5DB4D9] to-[#181C70] justify-center items-center py-[10px]'>
            <h2 className='font-bold text-lg text-center text-white'>
              Des données fiables et à jour
            </h2>
            <div className='grid grid-rows-3'>
              <div className='grid grid-rows-1 grid-flow-col gap-1 mt-[30px]'>
                <div className='ml-[20px]'>
                  {/* image */}
                  <img src="/Météo(1).png" alt="Météo" width={470} height={150} className='2xl:w-[100%]'/>
                </div>
                <div className='2xl:ml-[50px] 2xl:w-[750px] lg:w-[450px]'>
                  {/*Text*/}
                  <Link href="https://www.meteomadagascar.mg/">
                    <h3 className='font-bold text-[16px] mb-1 hover:text-blue-700'>
                      Le front froid axé au Sud-Est de Madagascar affectera le temps
                    </h3>
                  </Link>
                  <p className='text-[11px] mb-1'>
                    Des averses isolées localement orageuses seront attendues sur MELAKY, BONGOLAVA, BETSIBOKA, ATSIMO ATSINANANA, VATOVAVY, FITOVINANY, la partie Ouest de BOENY, les parties Sud d’ALAOTRA MANGORO et ATSINANANA ainsi que les hautes terres centrales. Quelques averses locales seront probables sur Ambilobe, Nosy .
                  </p>
                  <p className='text-[12px] fond-extralight'>
                    21/03/24
                  </p>
                </div>
              </div>
              <div className='grid grid-rows-1 grid-flow-col 2xl:ml-[30px] lg:ml-[20px] mt-[15px]'>
                <div className='2xl:w-[750px] lg:w-[450px]'>
                  {/*Text*/}
                  <Link href="https://www.vesselfinder.com/fr/news/27730-Brunvoll-Propulsion-Chosen-for-ESVAGTs-Growing-Fleet-of-Service-Operation-Vessels">
                    <h3 className='font-bold text-[16px] mb-1 hover:text-blue-700'>
                      Brunvoll Propulsion Chosen for ESVAGT's Growing Fleet of Service Operation Vessels
                    </h3>
                  </Link>
                  <p className='text-[11px] mb-1'>
                    Brunvoll has once again been chosen as supplier of the propulsion and manoeuvring system for one of ESVAGT’s new service operation vessels (SOV). This will be the fourth ESVAGT vessel currently undergoing construction. The vessel is designed by HAV …
                  </p>
                  <p className='text-[12px] fond-extralight'>
                    21/03/24
                  </p>
                </div>
                <div>
                  {/* image */}
                  <img src="/Carte(1).png" alt="Météo" width={470} height={150} className='2xl:w-[100%] 2xl:ml-[-30px]'/>
                </div>
              </div>
              <div className='grid grid-rows-1 grid-flow-col'>
                <div className='ml-[20px]'>
                {/* image */}
                  <img src="/Port(1).png" alt="Météo" width={470} height={150} className='2xl:w-[100%]'/>
                </div>
                <div className='2xl:ml-[50px] 2xl:w-[750px] lg:w-[450px]'>
                  {/*Text*/}
                  <Link href="https://www.vesselfinder.com/fr/ports/MGANM001">
                    <h3 className='font-bold text-[16px] mb-1 hover:text-blue-700'>
                      Weather Forecast
                    </h3>
                  </Link>
                  <div className='grid grid-rows-3 grid-flow-col'>
                      <div className='grid grid-rows-1 2xl:gap-6 grid-flow-col'>
                        <div className='text-[13px] mb-1 font-bold'>Mar 21, 18:00</div>
                        <div className='text-[13px] mb-1 font-bold'>26 °C</div>
                        <div className='text-[13px] mb-1 font-bold'>
                          3.5 kn-1.8 m/s
                        </div>
                      </div>
                      <div className='grid grid-rows-1 2xl:gap-6 grid-flow-col'>
                        <div className='text-[13px] mb-1 font-bold'>Mar 22, 00:00</div>
                        <div className='text-[13px] mb-1 font-bold'>23 °C</div>
                        <div className='text-[13px] mb-1 font-bold'>
                          2.9 kn-1.5 m/s
                        </div>
                      </div>
                      <div className='grid grid-rows-1 2xl:gap-6 grid-flow-col'>
                        <div className='text-[13px] mb-1 font-bold'>Mar 22, 06:00</div>
                        <div className='text-[13px] mb-1 font-bold'>22 °C</div>
                        <div className='text-[13px] mb-1 font-bold'>
                          3.1 kn-1.6 m/s
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ressource