import React from 'react';

const Card = () =>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='w-full h4/5 mb-2 relative'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full rounded-lg object-cover' src='https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='computer' />
                <button className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white m-2 p-1'>
                   +
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='font-light text-sm'>Computer</span>
                <span className='font-semibold text-medium'>$323</span>
            </p>
        </div>
    );
}

export default Card