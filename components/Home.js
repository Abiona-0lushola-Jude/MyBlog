import blogImg from '@assests/4860876.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='home'>
      <div className='homeLeft'> 
        <h1>On MyBlog</h1>
        <div className='newLook'>
            <p className='home-sub'>On this blog I share tips and tricks, frameworks, projects, tutorials, etc</p>
            <p className='home-sub'>Make sure you subscribe to get the latest updates</p>
        </div>
        
        <div className='info'>
            <input type='text' placeholder='enter email'/>
            <button>Subscribe</button>
        </div>
      </div>
      <div className='blogImg'>
        <Image src={blogImg} alt='Mybog ogo picture' title='myBog' />
      </div>
    </section>
  )
}
