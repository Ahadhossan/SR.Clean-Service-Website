/** @format */

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = (value) => toggleHover(value);

  const transition = { duration: 0.5, ease: 'easeInOut' };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition,
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition,
      transitionEnd: { display: 'none' },
    },
  };

  const { gridCols = 1, subMenuHeading = [], subMenu = [] } = menu;
  const hasSubMenu = subMenu.length > 0;
  const gridClass = `grid-cols-${gridCols}`;

  return (
    <motion.li
      className='group/link'
      onHoverStart={() => toggleHoverMenu(true)}
      onHoverEnd={() => toggleHoverMenu(false)}
      onFocus={() => toggleHoverMenu(true)}
      onBlur={() => toggleHoverMenu(false)}
      key={menu.name}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleHoverMenu(!isHover);
        }
      }}
      aria-expanded={isHover}>
      <a
        className='flex-center gap-1 text-[18px] font-bold hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl'
        aria-haspopup={hasSubMenu}
        href={menu.path}>
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className='mt-[0.6px] group-hover/link:rotate-180 duration-200' />
        )}
      </a>

      {hasSubMenu && (
        <motion.div
          className='sub-menu'
          initial='exit'
          animate={isHover ? 'enter' : 'exit'}
          variants={subMenuAnimate}
          role='menu'
          aria-label='Submenu'>
          <div className={`grid gap-7 ${gridClass}`}>
            {subMenu.map((submenu, i) => (
              <div className='relative cursor-pointer' key={i}>
                {gridCols > 1 && subMenuHeading[i] && (
                  <p className='text-sm mb-4 text-gray-500'>
                    {subMenuHeading[i]}
                  </p>
                )}
                <div className='flex-center gap-x-4 group/menubox'>
                  <div>
                    <a href={submenu.path}>
                      <h6 className='font-bold text-[18px] hover:text-[#00D47E]'>{submenu.name}</h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
