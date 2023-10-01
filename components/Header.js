import Link from "next/link"

export default function Header() {


  return (
    <div className='header'>
      <Link href='/'><h1>MyBlog<sub>blog</sub></h1></Link>
      <div className='menu'>
        <p>Home</p>
        <p>Category</p>
        <p>About Blog</p>
        <p>Search</p>
        <button>My Account</button>
      </div>
    </div>
  )
}
