import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='h-screen bg-black text-white'>
            about page
            <div className='space-x-4 text-blue-600'>
                <Link href={'/about/career'}>Career</Link>
                <Link href={'/about/jobs'}>Jobs</Link>
                <Link href={'/about/jobs/specific'}>Specific</Link> 
            </div>
        </div>
    );
};

export default AboutPage;