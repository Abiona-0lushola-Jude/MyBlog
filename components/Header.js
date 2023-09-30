import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <h1>MyBlog<sub>blog</sub></h1>
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
