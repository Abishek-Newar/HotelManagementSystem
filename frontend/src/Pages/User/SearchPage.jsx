import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_URL } from "../../../lib/config.js"
import { toast, Toaster } from 'sonner'
const SearchPage = () => {
  const items = useSelector(state => state)
  const [loading, setLoading] = React.useState(true)
  const [hotels, setHotels] = React.useState([])
  React.useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/user/search`, items.updateItem)
        setHotels(response.data)
        console.log("response from data of search ", response.data)
        setLoading(false)
      } catch (error) {
        toast.error("error while searching hotel")
      }

    }
    fetchHotels()
  }, [])
  console.log(items)
  return (
    <>
      <Toaster />
      {
        loading ?
          (
            <div>
              LOADING...
            </div>
          ) : (
            <div>
              <h1>{hotels.length} found in {items.updateItem.location}</h1>
            </div>
          )
      }
    </>
  )
}

export default SearchPage