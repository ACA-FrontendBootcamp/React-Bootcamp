import React from 'react'

function InfoSection ({info}){
    return (
<div>

<h3> Total Records {info.totalrecords  || 0}</h3>
</div>
    )
}

export default InfoSection