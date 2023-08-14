import { Fragment, useState } from 'react';
import calender from '../../assets/logos/Select_date-01.svg';
import clock from '../../assets/logos/Set_time-01.svg';
import CountryList from '../CountryList/CountryList';
import Dishes from '../Dishes/Dishes';
import FixedBox from '../FixedBox/FixedBox';
import Recommended from '../Recommended/Recommended';
const Header = props => {
  function handleClick() {
    props.clickedValue(true);
  }

  return (
    <Fragment>
      <header className=" w-full  h-90 bg-white z-50 fixed">
        <div className="flex w-full h-14 items-center bg-white justify-start gap-6 pl-4">
          <div class="material-symbols-outlined">arrow_back_ios_new</div>
          <p className="text-lg font-semibold">Select Dishes</p>
          <div className="flex w-32 m-auto gap-2 font-bold">
            <button className="material-symbols-outlined">home</button>
            <button className="material-symbols-outlined">chevron_left</button>
            <button>1</button>
            <button onClick={handleClick}>2</button>
            <button className="material-symbols-outlined" onClick={handleClick}>
              chevron_right
            </button>
          </div>
        </div>

        <div className="w-full h-12 bg-[#1c1c1c] z-1 "></div>
        <div className=" w-[90%] h-16 bg-white shadow-HeaderShadow flex mx-auto items-center justify-evenly rounded-lg absolute z-10 top-20 left-0 right-0">
          <div className="flex gap-2">
            <div className="w-4 h-4">
              <img src={calender} alt="" />
            </div>
            <p className="text-sm font-bold">21 May 2021</p>
          </div>
          <div className="w-[0.05rem] h-8 bg-[#8A8A8A]"></div>
          <div className="flex gap-2">
            <div className="w-4 h-4">
              <img src={clock} alt="" />
            </div>
            <p className="text-sm font-bold">10:30 Pm-12:30 Pm</p>
          </div>
        </div>
      </header>
      <CountryList />
      <Dishes />
      <Recommended />
      <FixedBox />
    </Fragment>
  );
};
export default Header;
