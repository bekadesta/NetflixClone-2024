import React from 'react'
import Row from '../Row/Row'
import requests from '../../../AXIOS/requests'

function RowList() {
  return (
    <>
      <Row 
        title="NETFLIX"
        fetchUrl={requests.fetchNetflix}
        isLargeRow={true}
      />
      <Row 
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
        />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedy}
        isLargeRow={true} 
        />

      <Row 
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
        />
       <Row 
        title="Romance"
        fetchUrl={requests.fetchRomance}
        isLargeRow={true}
        />

    </>
  )
}

export default RowList
