import React from 'react'

export const PlacesList = ({ list = [] }) => {
    return (
        <div>
            {list.map((item) => (
                <div></div>
            ))}
        </div>
    )
}
