import refrigrator from '../../assets/logos/refrigrator.svg';
const dishesList = [
  {
    name: 'Masala Mughlai',
    rating: 4.2,
    description: 'Chicken fried in deep tomato sauce with delicious spices',
    equipments: ['Refrigerator', 'Microwave'],
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 1,
  },
  {
    name: 'Masala Paneer',
    rating: 4.3,
    description: 'Paneer tossed in gravy',
    equipments: ['Microwave'],
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 2,
  },
  {
    name: 'Masala Mughlai',
    rating: 4.2,
    description: 'Chicken fried in deep tomato sauce with delicious spices',
    equipments: ['Refrigerator', 'Microwave'],
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 3,
  },
  {
    name: 'Masala Paneer',
    rating: 4.3,
    description: 'Paneer tossed in gravy',
    equipments: ['Microwave'],
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 4,
  },
];
function Recommended() {
  const dishes = dishesList.map(dish => (
    <li
      className="pb-8 pt-8 border-[#D6D6D6CE] border-b-[0.5px] border-solid"
      key={dish.id}
    >
      <div className="grid grid-cols-2 items-center">
        <div>
          <div className="flex items-center gap-2 pb-2">
            <div className="text-xs font-semibold">{dish.name}</div>
            <div className=" text-[#51C452] w-[10px] h-[10px] border-[#51C452] border-solid border-[1px] flex justify-center p-[4px] items-center">
              <p className="text-[14px] mt-[2px]">*</p>
            </div>
            <div className="text-white bg-[#51C452] text-[6px] w-[25px] h-[10px] flex justify-around items-center rounded-sm">
              <p>{dish.rating}</p>
              <p>*</p>
            </div>
          </div>
          <div className="flex gap-4">
            {dish.equipments.map(equipment => (
              <div className="w-6 h-6">
                <div className="w-4 m-auto">
                  <img src={refrigrator} alt="" />
                </div>
                <p className="text-[4px]">{equipment}</p>
              </div>
            ))}
            <div className="bg-[#D6D6D6CE] h-4 w-[1px]"></div>
            <div>
              <div className="text-[6px] font-semibold ">Ingredients</div>
              <div className="flex  h-2 items-center gap-1">
                <button className="text-[5px] font-semibold text-[#FF8800]">
                  View list
                </button>
                <button className="material-symbols-outlined text-[5px] font-semibold text-[#FF8800]">
                  arrow_forward_ios
                </button>
              </div>
            </div>
          </div>
          <p className="text-[#707070] text-[8px]">{dish.description}</p>
        </div>
        <div className="w-[92px] h-[68px] place-self-end relative">
          <img
            src={dish.image}
            alt=""
            className="w-full h-full rounded-lg  bg-transparent"
          />
          <div className="absolute  top-14 left-2">
            <button className="text-[#FF9A26] text-xs font-semibold px-6 py-1 border-solid border-[#FF9A26] border-[2px] rounded-sm relative shadow-md bg-white">
              Add <span className="absolute right-1 top-0">+</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="relative z-0 bg-white max-w-[90%] m-auto pb-32 top-[380px]">
      <div className="pt-8 flex justify-between items-center ">
        <p className="text-black font-bold text-base">Recommended &#9660;</p>
        <button className="py-1 px-6 bg-black text-white font-bold shadow-md rounded-md">
          Menu
        </button>
      </div>
      <div className="w-full h-28">
        <ul>{dishes}</ul>
      </div>
    </div>
  );
}
export default Recommended;
