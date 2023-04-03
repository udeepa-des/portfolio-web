import React from 'react';

const Alert = ({ message, type }) => {
    let classes = 'p-2 rounded-md my-4 text-lg';
    if (type === 'success') {
        classes += ' text-green-400 border-2 border-green-400';
    } else if (type === 'danger') {
        classes += ' text-red-400 border-2 border-red-400';
    }

    return (
        <div className={classes} role="alert">
            <div className='text-center'>{message}</div>
        </div>
    );
};

export default Alert;