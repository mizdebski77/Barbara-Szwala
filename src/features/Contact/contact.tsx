import React from 'react';

export const Contact = () => {
    return (
        <div className='min-h-screen grid items-center justify-center'>
            <div className='grid grid-cols-2'>
                <h1 className='text-dark text-4xl'>Skontaktuj się ze mną</h1>

            </div>

            <form>
                <div className='flex justify-center gap-8'>
                    <input className='bg-bright border-b-2 px-4 py-2 text-dark focus:outline-none' />
                    <input className='bg-bright border-b-2 px-4 py-2 text-dark focus:outline-none' />
                </div>

                <input className='bg-bright border-b px-4 py-2 text-dark focus:outline-none' />
                <textarea className='bg-bright border-b-2 px-4 py-2 text-dark focus:outline-none' />
            </form>
        </div>
    );
};
