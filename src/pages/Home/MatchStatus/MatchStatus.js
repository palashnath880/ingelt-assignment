import React from 'react';

const MatchStatus = () => {

    const matchs = [
        { match: 'Cricket', status: 'Live', type: 'Domestic', format: 'ODI', team1: 'Afghanistan', team2: 'Pakistan' },
        { match: 'Cricket', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'Bangladesh', team2: 'Afghanistan' },
        { match: 'Cricket', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'India', team2: 'Bangladesh' },
        { match: 'Football', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'Argentina', team2: 'Brasil' },
        { match: 'Football', status: 'Live', type: 'Domestic', format: 'ODI', team1: 'Switzerland', team2: 'Netherland' },
        { match: 'Football', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'India', team2: 'Pakistan' },
    ];

    return (
        <div>
            <div className="">
                <div>
                    <ul className="flex text-white flex-wrap w-full gap-1.5 rounded-2xl overflow-hidden">
                        <li className='flex-1'>
                            <button className="w-full text-lg py-5 text-center bg-violet-500 font-semibold" type="button">Cricket</button>
                        </li>
                        <li className='flex-1'>
                            <button className="w-full text-lg py-5 text-center bg-[#413F3F] font-semibold" type="button">Football</button>
                        </li>
                        <li className='flex-1'>
                            <button className="w-full text-lg py-5 text-center bg-[#413F3F] font-semibold" type="button">Tennis</button>
                        </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    <div className=''>
                        <table className='table-fixed w-full rounded-2xl overflow-hidden'>
                            <thead className='-mt-11'>
                                <tr className='text-lg font-bold text-[#838181]'>
                                    <th className='py-3'>Match Status</th>
                                    <th className='py-3'>Match Type</th>
                                    <th className='py-3'>Match Format</th>
                                    <th className='py-3'>Team 1</th>
                                    <th className='py-3'></th>
                                    <th className='py-3'>Team 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center odd:bg-[#343333] even:bg-[#29292E] text-lg font-bold text-white'>
                                    <td className='py-7 px-5'>
                                        <span className='flex items-center justify-center gap-2 shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#ffffff12] text-[#FF7C7C]'>
                                            <span className='block mt-1 w-3 h-3 bg-[#FF7C7C] rounded-full'></span>
                                            Live
                                        </span>
                                    </td>
                                    <td className='py-7 px-5'>
                                        <span className='block shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#171722] shadow-md'>Domestic</span>
                                    </td>
                                    <td className='py-7 px-5'>
                                        <span className='block py-4 px-3 rounded-xl bg-[#698B78]'>ODI</span>
                                    </td>
                                    <td className='py-7'>India</td>
                                    <td className='py-7'>VS</td>
                                    <td className='py-7'>Pakistan</td>
                                </tr>
                                <tr className='text-center odd:bg-[#343333] even:bg-[#29292E] text-lg font-bold text-white'>
                                    <td className='py-7 px-5'>
                                        <span className='block shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#ffffff12] text-[#8289C6]'>Pending</span>
                                    </td>
                                    <td className='py-7 px-5'>
                                        <span className='block shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#171722] shadow-md'>Domestic</span>
                                    </td>
                                    <td className='py-7 px-5'>
                                        <span className='block py-4 px-3 rounded-xl bg-[#698B78]'>ODI</span>
                                    </td>
                                    <td className='py-7'>India</td>
                                    <td className='py-7'>VS</td>
                                    <td className='py-7'>Pakistan</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchStatus;
