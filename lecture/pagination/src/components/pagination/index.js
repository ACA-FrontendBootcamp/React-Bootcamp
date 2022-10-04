import React, { useEffect, useState } from 'react'


function Pagination({handlePageClick, totalPages}){

    const [activeIndex, setActivIndex] = useState(1)
    const [currentPages, setCurrentPages] = useState([1,2,3,4,5])

const onClick = (page) =>{
    setActivIndex(page);   
    handlePageClick(page);
}

useEffect(() => {
if(activeIndex===currentPages[currentPages.length-1] +1){
    setCurrentPages(prev => prev.map(page => page+  5))
} else if(activeIndex===currentPages[0] -1){
    setCurrentPages(prev => prev.map(page => page-  5))
}
},[activeIndex])

   
    return (
        <div className='paginationWrapper'>
            <button  disabled = {activeIndex===1} onClick ={() => onClick(activeIndex -1)}>prev</button>
{currentPages.map((page) => <button  className={activeIndex === page ? 'active' : '' }  onClick ={() =>handlePageClick(page) }   onClick={() => onClick(page) }  key = {page}> {page}</button>)}
<button onClick ={() => onClick(activeIndex +1)}>next</button>

        </div>
    )
}

export default Pagination;