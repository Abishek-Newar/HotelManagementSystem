import React from 'react'
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const items = useSelector(state => state)
    console.log(items)
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage