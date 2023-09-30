import Home from '@components/Home'
import ModelHome from '@components/ModelHome'
import SuperFooter from '@components/SuperFooter'
import '@styles/main.css'

const page = () => {
  return (
    <section>
      <Home />
      <ModelHome />
      <SuperFooter />
    </section>
  )
}

export default page
