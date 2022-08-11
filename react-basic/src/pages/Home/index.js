import Bar from '@/components/Bar'
import './index.scss'

const Home = () => {
  return (
    <div className='home'>
      <Bar
        style={{ width: 500, height: 400 }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架满意度'
      />
      <Bar
        style={{ width: 500, height: 400 }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架使用度'
      />
    </div>
  )
}

export default Home