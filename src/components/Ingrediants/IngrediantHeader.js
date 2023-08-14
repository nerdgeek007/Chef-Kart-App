import { Fragment, useState } from 'react';
import vagetables from '../../assets/imgs/vagetables.png';
import trees from '../../assets/imgs/tree.png';
import Ingrediants from './Ingrediants';
import Quantity from './Quantity';
const itemsList = {
  name: 'Masala Mughlai',
  id: 1,
  timeToPrepare: '1 Hour',
};
function IngrediantHeader(props) {
  function handleClick() {
    props.onPrevPage(false);
  }
  return (
    <Fragment>
      <header className="max-w-full overflow-hidden">
        <div className="max-w-[95%] m-auto relative">
          <button
            className="material-symbols-outlined px-8 p-4 "
            onClick={handleClick}
          >
            chevron_left
          </button>
          <div className="flex justify-evenly gap-12">
            <div className="relative z-30 pt-12 max-w-[60%]">
              <div className="flex items-center gap-2 pb-4">
                <p className="text-2xl font-extrabold">{itemsList.name}</p>
                <div className="text-white bg-[#51C452] text-[6px] w-[25px] h-[10px] flex justify-around items-center rounded-sm">
                  <p>4.2</p>
                  <p>*</p>
                </div>
              </div>
              <p className="text-[#A3A3A3] text-[8px]">
                Mughlai Masala is a style of cookery developed in the Indian
                Subcontinent by the imperial kitchens of the Mughal Empire.
              </p>
              <p className="flex items-center gap-2 text-[10px] pt-4">
                <span
                  class="material-symbols-outlined font-normal
              "
                >
                  schedule
                </span>
                {itemsList.timeToPrepare}
              </p>
            </div>
            <div>
              <div className="flex justify-start items-start w-56 h-48 absolute right-2 top-16 z-5 ">
                <div className="w-64 h-64 bg-[#FFF9F2] absolute -right-24 bottom-5 rounded-full z-10"></div>
                <img
                  src={vagetables}
                  alt=""
                  className="absolute left-32 -top-2 z-20 w-full h-full"
                />
                <img
                  src={trees}
                  alt=""
                  className="absolute left-36 z-10 w-full top-2  h-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2]  h-[3px] mt-16 max-w-[80%]"></div>
      </header>
      <Ingrediants />
      <Quantity />
    </Fragment>
  );
}
export default IngrediantHeader;
