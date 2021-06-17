import React from 'react'

export const Button = (data) => {

    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div>
            <button>{data.data}</button>
        </div>
    )
}
