import React, { useEffect, useState } from 'react'

const App = () => {

  const [apiData, setapiData] = useState()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => responce.json())
      .then((data) => setapiData(data))

  }, [])

  return (
    <>

      <h>Hello world</h>

      {
        apiData?.map((item) => <li>{item.title}</li>)


      }

    </>)
}

export default App