import cup from '../../assets/logos/cup.svg';
function FixedBox() {
  return (
    <div>
      <div className="bg-black text-white max-w-[250px] h-14  grid fixed z-50   grid-cols-Recommended  content-center justify-center px-2 shadow-lg rounded-lg font-semibold left-1/2 -translate-x-[50%] bottom-6">
        <div className="flex gap-3 items-center pl-2">
          <div>
            <img src={cup} alt="" className="block w-4 h-4" />
          </div>
          <p className="text-xs">3 food items selected</p>
        </div>
        <div className="material-symbols-outlined place-self-end flex items-center">
          arrow_forward
        </div>
      </div>
    </div>
  );
}
export default FixedBox;
