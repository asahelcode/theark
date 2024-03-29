"use client"
import React from 'react'
import logo from '../public/assets/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SIdebar = () => {
    const router = usePathname()
    console.log(router)
    return (
        <div className='fixed h-[100vh] w-[300px] bg-[#060853] z-999' style={{ zIndex: 200 }}>
            <figure className='flex items-center capitalize text-2xl'>
                <img src={logo.src} alt="" />
                the ark
            </figure>
            <ul className='mt-[4rem]'>
                <Link href="/Dashboard">
                    <li className={`flex items-center p-[1rem] px-[2rem] gap-4 ${router == '/Dashboard' ? 'bg-blue-200 text-' : ''}`}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.22222 11H1L11 1L21 11H18.7778" fill="white" />
                            <path d="M3.22222 11V18.7778C3.22222 19.3671 3.45635 19.9324 3.8731 20.3491C4.28984 20.7659 4.85507 21 5.44444 21H16.5556C17.1449 21 17.7102 20.7659 18.1269 20.3491C18.5437 19.9324 18.7778 19.3671 18.7778 18.7778V11" fill="white" />
                            <path d="M3.22222 11H1L11 1L21 11H18.7778V18.7778C18.7778 19.3671 18.5437 19.9324 18.1269 20.3491C17.7102 20.7659 17.1449 21 16.5556 21H5.44444C4.85507 21 4.28984 20.7659 3.8731 20.3491C3.45635 19.9324 3.22222 19.3671 3.22222 18.7778V11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Dashboard
                    </li>
                </Link>
                <Link href="/Dashboard/pnl">
                    <li className={`flex items-center p-[1rem] px-[2rem] gap-4 ${router == '/Dashboard/pnl' ? 'bg-blue-200 text-' : ''}`}>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17ZM9 17H13M13 3C13 2.46957 13.2107 1.96086 13.5858 1.58579C13.9609 1.21071 14.4696 1 15 1C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3C17 3.53043 16.7893 4.03914 16.4142 4.41421C16.0391 4.78929 15.5304 5 15 5C14.4696 5 13.9609 4.78929 13.5858 4.41421C13.2107 4.03914 13 3.53043 13 3ZM13 3H9M9 3C9 2.46957 8.78929 1.96086 8.41421 1.58579C8.03914 1.21071 7.53043 1 7 1C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3C5 3.53043 5.21071 4.03914 5.58579 4.41421C5.96086 4.78929 6.46957 5 7 5C7.53043 5 8.03914 4.78929 8.41421 4.41421C8.78929 4.03914 9 3.53043 9 3ZM5 10C5 9.46957 4.78929 8.96086 4.41421 8.58579C4.03914 8.21071 3.53043 8 3 8C2.46957 8 1.96086 8.21071 1.58579 8.58579C1.21071 8.96086 1 9.46957 1 10C1 10.5304 1.21071 11.0391 1.58579 11.4142C1.96086 11.7893 2.46957 12 3 12C3.53043 12 4.03914 11.7893 4.41421 11.4142C4.78929 11.0391 5 10.5304 5 10ZM5 10H9M13 17C13 16.4696 13.2107 15.9609 13.5858 15.5858C13.9609 15.2107 14.4696 15 15 15C15.5304 15 16.0391 15.2107 16.4142 15.5858C16.7893 15.9609 17 16.4696 17 17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17ZM13 10C13 9.46957 12.7893 8.96086 12.4142 8.58579C12.0391 8.21071 11.5304 8 11 8C10.4696 8 9.96086 8.21071 9.58579 8.58579C9.21071 8.96086 9 9.46957 9 10M13 10C13 10.5304 12.7893 11.0391 12.4142 11.4142C12.0391 11.7893 11.5304 12 11 12C10.4696 12 9.96086 11.7893 9.58579 11.4142C9.21071 11.0391 9 10.5304 9 10M13 10H17M17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10ZM14 5L12 8M8 5L10 8M10 12L8 15M12 12L14 15M16 15L18 12M18 8L16 5M6 5L4 8M4 12L6 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Higest PNL
                    </li>
                </Link>
                <Link href="/Dashboard/holdings">
                    <li className={`flex items-center p-[1rem] px-[2rem] gap-4 ${router == '/Dashboard/holdings' ? 'bg-blue-200 text-' : ''}`}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06328 12.2148C3.28516 12.4788 5.3536 13.4827 6.93577 15.0648C8.51793 16.647 9.52181 18.7155 9.78586 20.9373C10.8873 20.3023 11.8086 19.397 12.4627 18.3068C13.1168 17.2166 13.4822 15.9776 13.5241 14.7069C15.6164 13.9709 17.4435 12.6309 18.7743 10.8565C20.1051 9.08214 20.8799 6.95296 21.0006 4.73825C21.0006 3.74681 20.6068 2.79597 19.9057 2.09491C19.2047 1.39385 18.2538 1 17.2624 1C15.0477 1.12076 12.9185 1.89552 11.1441 3.22632C9.36968 4.55712 8.02974 6.38419 7.2937 8.4765C6.02302 8.51847 4.78403 8.88377 3.69384 9.53788C2.60365 10.192 1.69827 11.1133 1.06328 12.2148ZM15 9C16.1046 9 17 8.10457 17 7C17 5.89543 16.1046 5 15 5C13.8954 5 13 5.89543 13 7C13 8.10457 13.8954 9 15 9Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 8.10457 16.1046 9 15 9C13.8954 9 13 8.10457 13 7C13 5.89543 13.8954 5 15 5C16.1046 5 17 5.89543 17 7Z" fill="#060853" />
                        <path d="M4.80091 13.4608C3.50402 14.193 2.45535 15.2958 1.78932 16.6279C1.12329 17.9599 0.870259 19.4605 1.06266 20.9373C2.53947 21.1297 4.04008 20.8767 5.37214 20.2107C6.7042 19.5446 7.807 18.496 8.53916 17.1991M1.06328 12.2148C3.28516 12.4788 5.3536 13.4827 6.93577 15.0648C8.51793 16.647 9.52181 18.7155 9.78586 20.9373C10.8873 20.3023 11.8086 19.397 12.4627 18.3068C13.1168 17.2166 13.4822 15.9776 13.5241 14.7069C15.6164 13.9709 17.4435 12.6309 18.7743 10.8565C20.1051 9.08214 20.8799 6.95296 21.0006 4.73825C21.0006 3.74681 20.6068 2.79597 19.9057 2.09491C19.2047 1.39385 18.2538 1 17.2624 1C15.0477 1.12076 12.9185 1.89552 11.1441 3.22632C9.36968 4.55712 8.02974 6.38419 7.2937 8.4765C6.02302 8.51847 4.78403 8.88377 3.69384 9.53788C2.60365 10.192 1.69827 11.1133 1.06328 12.2148ZM17 7C17 8.10457 16.1046 9 15 9C13.8954 9 13 8.10457 13 7C13 5.89543 13.8954 5 15 5C16.1046 5 17 5.89543 17 7Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Top Holdings
                    </li>
                </Link>



                <li className='flex items-center p-[1rem] px-[2rem] gap-4'><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.73223 5.26777C1.26339 4.79893 1 4.16304 1 3.5V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H18.5C18.8315 21 19.1495 20.8683 19.3839 20.6339C19.6183 20.3995 19.75 20.0815 19.75 19.75V16H16C15.337 16 14.7011 15.7366 14.2322 15.2678C13.7634 14.7989 13.5 14.163 13.5 13.5C13.5 12.837 13.7634 12.2011 14.2322 11.7322C14.7011 11.2634 15.337 11 16 11H19.75V7.25C19.75 6.91848 19.6183 6.60054 19.3839 6.36612C19.1495 6.1317 18.8315 6 18.5 6H17.25H3.5C2.83696 6 2.20107 5.73661 1.73223 5.26777Z" fill="white" />
                    <path d="M17.25 6V2.25C17.25 1.91848 17.1183 1.60054 16.8839 1.36612C16.6495 1.1317 16.3315 1 16 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5M17.25 6H18.5M17.25 6H3.5M1 3.5C1 4.16304 1.26339 4.79893 1.73223 5.26777C2.20107 5.73661 2.83696 6 3.5 6M1 3.5V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H18.5C18.8315 21 19.1495 20.8683 19.3839 20.6339C19.6183 20.3995 19.75 20.0815 19.75 19.75V16H16M3.5 6H18.5M18.5 6C18.8315 6 19.1495 6.1317 19.3839 6.36612C19.6183 6.60054 19.75 6.91848 19.75 7.25V11H16M16 16H21V11H16M16 16C15.337 16 14.7011 15.7366 14.2322 15.2678C13.7634 14.7989 13.5 14.163 13.5 13.5C13.5 12.837 13.7634 12.2011 14.2322 11.7322C14.7011 11.2634 15.337 11 16 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    Top ERC(20) Tokens</li>
            </ul>
        </div >
    )
}

export default SIdebar
