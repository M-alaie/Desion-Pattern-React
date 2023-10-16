import { useState } from "react";

import HOCPages from "./components/pages/HOCPage";
import HookPage from "./components/pages/Hook_page";
import RaperPraps from "./components/pages/Raper_Praps"
const App = () => {
  const [page, setPage] = useState('HookPage');
  const components = {
    HOCPages: <HOCPages />,
    HookPage: <HookPage />,
    Raper_Praps:<RaperPraps></RaperPraps>
  };

  const changePage = (event) => {
    setPage(event.target.dataset.page);
  };

  return (
    <div className="App">
      <ul>
        <li onClick={changePage} data-page="HOCPages">
          HOCpages
        </li>
        <li onClick={changePage} data-page="HookPage">
          HookPage
        </li>
        <li onClick={changePage} data-page="Raper_Praps">
        Raper_Praps
        </li>
      </ul>
      <section>{components[page]}</section>
    </div>
  );
};



export default App;
