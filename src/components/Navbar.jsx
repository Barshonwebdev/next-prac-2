"use client"

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName=usePathname();
    const router=useRouter();
    const handler=()=>{
        router.push('/login')
    }
    
    const links=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Contacts',
            path:'/contacts'
        },
        {
            title:'Blogs',
            path:'/blogs'
        },
    ]
    if (pathName.includes('dashboard'))
        return <div className='bg-green-500 text-white'>Header</div>
    return (
        <div className='bg-red-500 py-5 flex justify-between'>
            <ul className='flex justify-center space-x-4 text-white text-2xl'>
                {
                    links.map((link)=><Link className={`${pathName===link.path && "text-yellow-500"}`} key={link.title} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className='btn text-white p-3'>Login</button>
        </div>
    );
};

export default Navbar;