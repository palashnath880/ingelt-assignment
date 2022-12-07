import React from 'react';

const MatchStatus = () => {
    return (
        <div>
            <div className="">
                <ul className="flex text-white flex-wrap w-full gap-1.5 rounded-2xl overflow-hidden">
                    <li className='flex-1'>
                        <button className="w-full text-lg py-5 text-center bg-violet-500 font-semibold" type="button">Cricket</button>
                    </li>
                    <li className='flex-1'>
                        <button className="w-full text-lg py-5 text-center bg-violet-500 font-semibold" type="button">Football</button>
                    </li>
                    <li className='flex-1'>
                        <button className="w-full text-lg py-5 text-center bg-violet-500 font-semibold" type="button">Tennis</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MatchStatus;
