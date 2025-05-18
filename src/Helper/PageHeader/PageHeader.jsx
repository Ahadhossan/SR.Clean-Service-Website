/** @format */

import { Link } from 'react-router-dom';

const PageHeader = ({ breadcrumb= []}) => {
  return (
    <>
      <div className='w-full h-[190px] header-bg bg-cover bg-center flex flex-col items-start justify-center lg:px-0 px-5'>
        <span className='max-w-6xl mx-auto flex text-[#D7FCFF] font-medium text-[20px]  cursor-pointer mt-6 gap-4'>
          {breadcrumb.map((item, index) => (
          <span key={index} className='flex items-center gap-2'>
            {item.path ? (
              <Link
                to={item.path}
                className='border-[#47A1C4] transition duration-200 hover:border-b text-[#00D47E] hover:border-[#47A1C4] hover:text-[#47A1C4]'>
                {item.label}
              </Link>
            ) : (
              <span className='text-[#042222]'>{item.label}</span>
            )}
            {index < breadcrumb.length - 1 && (
              <span className='text-[#00D47E]'>|</span>
            )}
          </span>
        ))}
        </span>
      </div>
    </>
  )
}

export default PageHeader