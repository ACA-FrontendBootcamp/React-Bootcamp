import React from 'react'
import GalleryDivision from '../galleryDivision'

function DivisionContainer({records}){
    return(
        <div className='listWrapper'>
{
    records.map(({ 
        id,
        images,
        division,
        copyright,
        creditline,
        totaluniquepageviews,
        verificationleveldescription
    } )=> <GalleryDivision 
            key = {id}
    {...{
                id,
                images,
                division,
                copyright,
                creditline,
                totaluniquepageviews,
                verificationleveldescription}}/>
         
        )
}
        </div>
    )

}

export default DivisionContainer