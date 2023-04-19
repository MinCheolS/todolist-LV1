import React from 'react'
import './style.css'

function Layout(todos) {
  return (
    <div className='layout'>
        {todos.children}
    </div>
  )
}

export default Layout
