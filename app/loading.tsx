import { SunIcon } from '@heroicons/react/solid';

export default function LoadingScreen() {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E] text-slate-500'>
            <SunIcon className='h-24 w-24 animate-bounce text-yellow-500' color='yellow' />
            <h1 className='mb-10 animate-pulse text-center text-6xl font-bold'>
                Loading City Weather Information
            </h1>
            <h2 className='text-xl font-bold text-center mb-10 animate-pulse'>
                Hold on, we are crunching the numbers & generating an AI summary of the Weather for you!
            </h2>
        </div>
    );
}