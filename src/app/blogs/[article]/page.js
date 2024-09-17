import React from 'react';

const Details = ({params}) => {
    console.log(params.article);
    return (
        <div className='h-screen bg-black text-white'>
            Blog Details
        </div>
    );
};

export default Details;