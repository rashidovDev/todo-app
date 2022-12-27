import { useRef} from 'react';
import { FaBars, FaTelegram, FaTimes } from 'react-icons/fa';
import {Link} from "react-router-dom"
import { navigation } from '../../data';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    return (
        <div className='bg-[#5C3EBA] z-50'>
        <header className='md:w-[80%] m-auto px-4'>
            {/* <h2 className='text-[25px] font-[400]'>rashidovDev</h2> */}
            <h1 className='text-3xl bold logo'>rashidov<span style={{color:"#AC6B34"}}>Dev</span></h1>
            <nav className='flex z-50 mb-10' ref={navRef}>
                { 
                <div>
                <div className='mt-12 pr-4 hidden md:flex cursor-pointer'><AccountCircleIcon/></div>
                <div className='md:hidden flex justify-center flex-col'>
                    <img src={require("../../assets/logo.jpg")} alt="logo" className='rounded-full w-[250px] h-[250px]' />
                    <a className='text-center mt-5 text-[20px] flex items-center justify-center' href="https://t.me/anvar_rashidov"><FaTelegram/> <span className='pl-1'>rashidov_dev</span></a>
                </div>
                </div>
                    // navigation.map((item, idx) => (
                    //     <Link key={idx + 1} onClick={showNavbar}  to={item.href} 
                    //     className='mx-4 text-[18px]'>{item.name}</Link>
                    // ))
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