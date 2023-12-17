import React from 'react'
import {Link, Outlet} from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <div className='navbar'>
        <div className='lnk' >
      <Link to={'/'}>Home</Link>
      </div>
      <div className='lnk'>
      <Link to={'/create'}>Create</Link>
      </div>
      <div className='lnk'><Link to={'/update'}>Update</Link>
    </div>

    <div className='lnk'><Link to={'/delete'}>Delete</Link>
    </div>
    <div className='lnk'><Link to={'/signout'}>Signout</Link>
   
   </div>
    </div>
    <Outlet/>
    </> )
}
