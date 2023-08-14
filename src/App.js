import { Fragment, useState } from 'react';
import Header from './components/Header/Header';

import IngrediantHeader from './components/Ingrediants/IngrediantHeader';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler(value) {
    setIsClicked(value);
  }
  function prevPageHandler(value) {
    setIsClicked(value);
  }
  return (
    <Fragment>
      {!isClicked && <Header clickedValue={clickHandler} />}

      {isClicked && <IngrediantHeader onPrevPage={prevPageHandler} />}
    </Fragment>
  );
}

export default App;
