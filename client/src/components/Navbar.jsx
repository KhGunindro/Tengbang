import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, settoggle] = useState(false);  

  const address = '0xad';

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between md-[35px] gap-6'>
      <div className='lg: flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] rounded-[100px] bg-[#1c1c24]'>
          <input type='text' placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none'/>
          <div className='w-[72px] h-full rounded-[20px] bg-[#DA5959] flex justify-center items-center cursor-pointer'>
            <img src={search} alt='search' className='h-[15px] w-[15px] object-contain'/>
          </div>
      </div>
      <div className='sm:flex hidden flex-row justify-end gap-4'>
          <CustomButton
          btnType='button'
          title={address ? 'Create campaign' : 'Connect' }
          styles={address ? 'bg-[#DA5959]' : 'bg-[#8c6dfd]'}
          handleClick={()=>{
            if(address) navigate('create-campaign');
            else 'connect()'
          }}
          />
        <Link to="/profile">
            <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
              <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain'/>
            </div>
        </Link>
      </div>

      {/* Mobile Navigation */}
    </div>
  )
}

export default Navbar