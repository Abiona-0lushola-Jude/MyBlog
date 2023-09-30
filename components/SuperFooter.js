import Image from "next/image"
import newSup from '@assests/image 2.png'

const SuperFooter = () => {
  return (
    <div className='superFooter'>
      <div className="newSuper">
        <div className='supImg'>
            <Image src={newSup} alt="newsup" />
        </div>
        <div className='supContent'>
            <h1>Subscribe For the lastest updates</h1>
            <p>Subscribe to newsletter and never miss the new post every week.</p>
            <div className='info'>
                <input type='text'/>
                <button>Subscribe</button>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default SuperFooter
