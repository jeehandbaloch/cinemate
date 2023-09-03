import {NavLink, useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

export const Header = () => {
  const activeClass = "block text-base py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActiveClass = "block text-base py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  const [hidden, setHidden] = useState(true)
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)
  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    const queryTerm = event.target.search.value
    event.target.reset()

    return navigate(`/search?q=${queryTerm}`)
  }

  useEffect(()=>{
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if(darkMode){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }

  },[darkMode])

  return (

    <header>      
<nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to="/" className="flex items-center">
      <img src={Logo} className=" h-8 mr-3" alt="Cinemate Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
  </NavLink>

  <div className="flex md:order-2">
    <button onClick={()=> setDarkMode(!darkMode)} data-tooltip-target='navbar-search-example-toggle-dark-mode-tooltip' type='button' data-toggle-dark='light'
   className='flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border 
   border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
   focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 
   dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >
    {darkMode ? 
    (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>) 
    : (<svg width="20px" height="20px" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>)}
    
   </button>
    <button onClick={()=> setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <form onSubmit={handleSubmit}>
      <input type="text" name='search' id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off'/>
      </form>
    </div>
    <button onClick={()=> setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className={`${hidden ? 'hidden' : '' } items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
        <input type="text" name='search' id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."  autoComplete='off'/>
        </form>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className={({isActive})=> isActive ? activeClass : inActiveClass} end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies/popular" className={({isActive})=> isActive ? activeClass : inActiveClass}>Popular</NavLink>
        </li>
        <li>
          <NavLink to="/movies/top" className={({isActive})=> isActive ? activeClass : inActiveClass}>Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/movies/upcoming" className={({isActive})=> isActive ? activeClass : inActiveClass}>Upcoming</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>
  )
}

