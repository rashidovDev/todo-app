import { useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from "react-router-dom"
import { navigation } from '../../data';


const Navbar = () => {


    const navRef = useRef()

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <div className='bg-[#29335C] z-50'>
        <header className='md:w-[80%] m-auto px-4'>
            <h2 className='text-[25px] font-[400]'>My Data</h2>
            <nav className='flex' ref={navRef}>
                {
                    navigation.map((item, idx) => (
                        <Link key={idx + 1} onClick={showNavbar}  to={item.href} 
                        className='mx-4 text-[18px]'>{item.name}</Link>
                    ))
                }  
                <button className='nav-btn nav-close-btn text-[30px]' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn text-[30px]' onClick={showNavbar}>
              <FaBars/>
            </button>
        </header>
        </div>
    );
};

export default Navbar;