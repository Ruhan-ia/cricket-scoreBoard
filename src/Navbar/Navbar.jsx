import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const { data: result = []} = useQuery({
    queryKey:[ 'result' ],
    queryFn:async () =>{
        const res = await fetch('https://cricket-score-board-server.vercel.app/result')
        return res.json()
    }

})

const handleLogOut = () =>{
  logOut()
  .then(result=>{
    const loggedUser = result.user
    console.log(loggedUser)
  })
  .catch(() => {});
}
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/' className='font-semibold text-green-600 '>Matches</Link></li>
      <li><Link to='/news' className='font-semibold text-green-600 '>News</Link></li>
    
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl bg-gray-300 font-mono text-orange-500 font-bold">CrickInfo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='active font-semibold text-green-600 '>Matches</Link></li>
      <li><Link to='/news' className='font-semibold text-green-600 '>News</Link></li>
     
    
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && <div className="avatar items-center">
      <div className="w-12 rounded-full">
        <img src={user.photoURL}/>
      </div>
    </div>
    }
   {
    user ? <> <button className="btn btn-ghost btn-circle me-3"  onClick={()=>document.getElementById('my_modal_5').showModal()}>
    <dialog id="my_modal_5" className="modal modal-middle ">
  <div className="modal-box">
    <div className='grid  grid-cols-6 gap-3'>

    {
    result.map(rt=> <div key={rt.id}>

     
      <button className="btn btn-circle btn-outline">
      <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={rt.image1} />
            </div>
          </div>
</button>

      

    </div>)
   }

    </div>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

  <div className="indicator ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </div>
    </button>
    <button onClick={handleLogOut} className="btn">LogOut</button></> :<>
    <Link className="btn" to='/login'>Login</Link>
    </>}
  </div>
</div>
    );
};

export default Navbar;