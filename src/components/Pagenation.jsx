import React from 'react'
import { useGlobalContext } from '../context/context'

const Pagenation = () => {

  const { page, nbPages, getNextPost, getPrevPost } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPost()}>Prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPost()}>Next</button>
      </div>
    </>
  )
}

export default Pagenation