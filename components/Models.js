import Image from 'next/image'
import blogImg from '@assests/4860876.jpg'
import Link from 'next/link'


function Models({newData}) {


  return (
    <section className='modelBox'>
      <Link 
      href={newData.url}
      target='_blank'
      
      >
        <div className='modelImage'>
          <Image className='img' src={newData.urlToImage ? newData.urlToImage : blogImg} alt='' title='' width={900} height={900}/>
        </div>
        <h1>{newData.title}</h1>
        <div className='model-low'>
          <div className='lowImg'>
              <Image src={blogImg} alt='' title='' />
          </div>
          <div className='author'> 
              <p>{newData.source.name}</p>
              <p className='date'>{newData.publishedAt.split('T')[0]}</p>
          </div>
          <div className='time-read'>3 Mins Read</div>
        </div>
      </Link>
      

    </section>
  )
}

export default Models
