import React from 'react';

export const TopSpot = (props) =>
                <div className='card bg-info mt-4 border-0 rounded-3'>
                    <div className='well card-body'>
                        <h4 className='card-title'>{props.name}</h4>  
                        <p className='card-text text-light p-3'>{props.description}</p>
                        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className='btn btn-warning shadow' target="_blank">Open Google Maps</a>
                    </div>
                </div>
            
