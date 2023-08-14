import { Fragment } from 'react';

export const POPULAR_DISHES = [
  {
    name: 'Biryani',
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 3,
  },
  {
    name: 'Biryani',
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 4,
  },
  {
    name: 'Dal Batti',
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 5,
  },
  {
    name: 'Chicken',
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 6,
  },
  {
    name: 'Chicken',
    image:
      'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg',
    id: 7,
  },
];
function Dishes() {
  const dishes = POPULAR_DISHES.map(dish => (
    <div
      className="border-[#FF941A] border-solid border-2 w-18 h-18 p-1 rounded-full hover:border-white hover:ease-in-out hover:duration-300"
      key={dish.id}
    >
      <div
        style={{
          backgroundImage: `url("${dish.image}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply',
        }}
        className="w-16 h-16 relative rounded-full flex justify-center items-center "
      >
        <div className="bg-[#1C1C1C9A] w-full h-full absolute top-0 left-0 rounded-full "></div>
        <li className="z-25 relative text-white text-sm font-normal">
          {dish.name}
        </li>
      </div>
    </div>
  ));
  return (
    <div className="fixed w-full z-20 top-56 bg-white ">
      <div className="max-w-[90%] m-auto h-auto">
        <p className="text-base font-bold">Popular Dishes</p>
        <ul className="flex justify-evenly pt-6  overflow-hidden">{dishes}</ul>
      </div>
      <div className="bg-[#F2F2F2] h-1 w-full mt-8"></div>
    </div>
  );
}
export default Dishes;
