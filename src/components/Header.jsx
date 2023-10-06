import {BsFillBellFill, BsSearch} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='flex justify-between items-center p-3 bg-black text-white'>
        <Link to={'/'} className='flex items-center gap-3 text-3xl'>
            <AiFillYoutube className='text-red-500'/>
            <h1>Youtube</h1>
        </Link>

        <form className='flex items-center bg-white rounded'>
        <input placeholder='Search..' type='text'
        className='rounded px-4 py-2 outline-none '/>
            <button className='text-black text-2xl mr-2'>
               <BsSearch/> 
            </button>
        </form>

<BsFillBellFill/>

    </header>
  )
}

export default Header
