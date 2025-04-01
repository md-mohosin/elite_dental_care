import React from 'react';
import { DNA } from 'react-loader-spinner';

const LoadingSpiner = () => {
    
    return (
        <div className='flex justify-center items-center'>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default LoadingSpiner;