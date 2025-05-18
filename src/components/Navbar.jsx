/** @format */

import { User2 } from 'lucide-react';
import { Menus } from '../Data/utils';
import DesktopMenu from './Header/DesktopMenu';
import MobMenu from './Header/MobMenu';

const Navbar = () => {
  return (
    <header className='h-16 text-[15px] fixed inset-0 flex-center bg-[#0F214D] z-50'>
      <nav className='px-3.5 flex-center-between w-full max-w-7xl mx-auto'>
        <div className='flex-center gap-x-3 z-[999] relative'>
          <a href='/home'>
            <img
              src='/src/assets/logo-remove.png'
              alt='Logo'
              className='w-10 rounded-full'
            />
          </a>
          <h1 className='text-[18px] font-bold text-[#ecd9d9]'>
                SR.<span className='text-[#00D47E]'>CLEAN</span>
              </h1>
        </div>

        {/* Desktop Menu */}
        <ul className='gap-x-1 lg:flex-center hidden'>
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className='flex-center gap-x-5'>
          <a
            href='/login'
            aria-label='Contact Us'
            className='bg-white/5 hover:bg-[#050505] z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center gap-2'>
            <User2 />
            Login
          </a>

          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
