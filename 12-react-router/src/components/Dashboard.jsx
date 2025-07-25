import React from 'react'
import {Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      Dashboard Page
      <Outlet />
    </div>
  )
}

export default Dashboard
