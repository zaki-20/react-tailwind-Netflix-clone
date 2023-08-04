import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div className='text-white'>
       <Main />
       <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming}/>
       <Row rowID='2' title='TopRated' fetchURL={requests.requestTopRated}/>
       <Row rowID='3' title='Popular' fetchURL={requests.requestPopular}/>
       <Row rowID='4' title='Trending' fetchURL={requests.requestTrending}/>
       <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home