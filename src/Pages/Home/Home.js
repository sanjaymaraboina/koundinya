import React from 'react'
import './home.css'
import Featuredinfo from '../../Main Components/components/Featuredinfo'
import Chart from '../../Main Components/components/Chart'
import WidgetSm from '../../Main Components/components/widgets/WidgetSm'
import WidgetLg from '../../Main Components/components/widgets/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
