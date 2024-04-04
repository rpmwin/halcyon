import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white w-screen text-center '>
      <div className='border-t-2 border-white mt-3'>

      </div>
      <div className='flex  items-center flex-col justify-center sm:flex-row sm:justify-around    '>
        <div className='grid grid-cols-1 gap-3 p-5 text-lg'>
          <div>Halcyon_official</div>
          <div>Halcyon.sit@gmail.com</div>
          <div>culturalcomittee@sit.ac.in</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3  p-5 text-lg'>
          <div>DR M N Channabasappa {"(Director)"}</div>
          <div>DR Shivakumaraiah {"(C E O)"}</div>

          <div>DR S V Dinesh {"(Principal)"} </div>
          <div>DR Sagar T S {"(cultural co ordinator)"}</div>
        </div>
        <div className='p-3'>
          <h1 className='text-2xl'>Student Co - ordinator</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3  '>
            
          <div>Aniruddha S : 123456789</div>
          <div>Aniruddha S : 123456789</div>
          <div>Aniruddha S : 123456789</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer