import React from 'react';

const multipleDynamicPages = ({params}) => {
    console.log(params);
    if(params.features.length==2){
        return <div>{params.features[1]}</div>
    }
    return (
        <div className='h-screen bg-black text-white'>
            multiple dynamic pages
        </div>
    );
};

export default multipleDynamicPages;