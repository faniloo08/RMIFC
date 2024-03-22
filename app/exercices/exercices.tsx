import React from 'react'
import Link from 'next/link'
//Cette partie sera généré grâce à une fonction qui recevra les 4 derniers excercices ajoutés au back-end
function Exercices() {
  return (
    <div>
        <div>
          <p className='justify-center items-center text-center font-bold text-lg'>
              EXERCICES REALISES
          </p>
          <div className='grid grid-rows-2 grid-flow-col gap-4 justify-center items-center'>
            <div className='mt-[50px] '>
                {/*Cover*/}
                <span className="bg-[url('/Ex1.png')] inline-flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                </span>
                {/* Titre */}
                <Link href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02D2dZQcbiXg7HzuCT77956JecdVJgZFdvAPnnFoJeBTmBuKgr74s8fDv8eZYjJWVbl&show_text=true&width=500"  className='hover:text-sky-600'>
                  <p className='ml-[80px] mt-[-60px] font-bold text-sm'>Exercice CUTLASS EXPRESS </p>
                  <p className='ml-[80px] font-light text-sm'>01/03/24</p>
                </Link>
            </div>

            <div className='mt-[50px] '>
                {/*Cover*/}
                <span className="bg-[url('/Ex2.png')] inline-flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                </span>
                {/* Titre */}
                <Link href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500"  className='hover:text-sky-600' >
                  <p className='ml-[80px] mt-[-60px] font-bold text-sm'>Formation sur le "Maritime Domain Awereness" </p>
                  <p className='ml-[80px] font-light text-sm'>16/10/23</p>
                </Link>
            </div> 
              
            <div className='mt-[50px] '>
                {/*Cover*/}
                <span className="bg-[url('/Ex3.png')] inline-flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                </span>
                {/* Titre */}
                <Link href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02iXQcUeAMH4yYThmPYSJkAjihKjLZFvMWFNCH5DjcWHDhv76BpBtgUxZmFR34q2hhl&show_text=true&width=500" className='hover:text-sky-600'>
                  <p className='ml-[80px] mt-[-60px] font-bold text-sm'>Exercice TTX WIOPOLREX</p>
                  <p className='ml-[80px] font-light text-sm'>27/07/23</p>
                </Link>
            </div> 
              
            <div className='mt-[50px]'>
                {/*Cover*/}
                <span className="bg-[url('/Ex4.png')] inline-flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                </span>
                {/* Titre */}
                <Link href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02qhLXCdNZ6mC2FGqAWbBaQbkQoNEjeRjTpxwH6kPexqkvWvpeMwQhHJn1D8gPfAPl&show_text=true&width=500" className='hover:text-sky-600'>
                  <p className='ml-[80px] mt-[-60px] font-bold text-sm'>Conférence « The southern Drug Route Partnership »</p>
                  <p className='ml-[80px] font-light text-sm'>20/04/23</p>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Exercices