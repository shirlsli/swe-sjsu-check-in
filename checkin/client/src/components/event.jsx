import React, { useState } from "react"

export default function Event({
    blurb, createdDate, endDate, location, name, points, startDate, type
}) {
    
    return (<div>
        <div> 
            <p>{blurb}</p>
            <p>{createdDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
            <p>{name}</p>
            <p>{points}</p>
            <p>{startDate}</p>
            <p>{type}</p>
        </div>
    </div>)
}
