import { useState } from "react";

import HOCPages from "./components/pages/HOCPage";
import HookPage from "./components/pages/Hook_page";

const App = () => {
  const [page, setPage] = useState('HookPage');
  const components = {
    HOCPages: <HOCPages />,
    HookPage: <HookPage />,
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
      </ul>
      <section>{components[page]}</section>
    </div>
  );
};



export default App;
