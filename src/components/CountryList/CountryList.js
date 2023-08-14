const FOOD_TYPE = ['Italian', 'Indian', 'French', 'Spanish'];
function CountryList() {
  const countryName = FOOD_TYPE.map((food, index) => (
    <div key={index}>
      <a href="#">
        <li className="text-[#8A8A8A] border-[0.5px] border-[#BDBDBD] px-[12px] py-[4px] rounded-2xl hover:border-[#FF941A] hover:text-[#FF941A] hover:font-bold hover:ease-in-out hover:duration-200">
          {food}
        </li>
      </a>
    </div>
  ));
  return (
    <div className="bg-white w-full   z-20 h-28 top-24 fixed">
      <div className="max-w-[90%] h-64  m-auto relative bg-white">
        <ul className="flex items-center justify-evenly gap-2  relative top-16 flex-wrap ">
          {countryName}
        </ul>
      </div>
    </div>
  );
}
export default CountryList;
