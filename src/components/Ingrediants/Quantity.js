import fridge from '../../assets/imgs/fridge.png';
const ingrediantsList = {
  vegetables: [
    { name: 'Cauliflower', quantity: '1' },
    { name: 'Tomato', quantity: '10' },
    { name: 'Spinach', quantity: '1/2 Kg' },
  ],
  spices: [
    { name: 'Coriander', quantity: '100 gm' },
    { name: 'Mustard Oil', quantity: '1/2 litres' },
  ],
  appliances: [
    { name: 'Refrigerator', image: '' },
    { name: 'Microwave', image: '' },
    { name: 'Stove', image: '' },
  ],
};
function Quantity() {
  const vagetables = ingrediantsList.vegetables.map(vagetable => (
    <li key={Math.random()}>
      <div className="flex justify-between items-center pb-2 text-[10px] text-[#1C1C1C]">
        <p>{vagetable.name}</p>
        <p>{vagetable.quantity}</p>
      </div>
    </li>
  ));
  const spices = ingrediantsList.spices.map(spice => (
    <li key={Math.random()}>
      <div className="flex justify-between items-center pb-2 text-[10px] text-[#1C1C1C]">
        <p>{spice.name}</p>
        <p>{spice.quantity}</p>
      </div>
    </li>
  ));
  const appliances = ingrediantsList.appliances.map(appliance => (
    <li>
      <div className="bg-[#F5F5F5] w-20 h-24 rounded-lg grid justify-center  content-center">
        <div>
          <img src={fridge} alt="" className="w-auto h-auto m-auto" />
        </div>
        <div className="text-[8px]">{appliance.name}</div>
      </div>
    </li>
  ));
  return (
    <div className="max-w-[90%] m-auto md:px-24">
      <p className="text-[12px] font-bold pb-2">
        Vegetables (05) <span className="ml-4">&#9660;</span>
      </p>
      <ul>{vagetables}</ul>
      <p className="text-[12px] font-bold pb-2 pt-4">
        Spices (10) <span className="ml-4">&#9660;</span>
      </p>
      <ul>{spices}</ul>
      <p className="text-[16px] font-bold  pt-4 pb-8">Appliances</p>
      <ul className="flex items-center gap-8 pb-16">{appliances}</ul>
    </div>
  );
}
export default Quantity;
