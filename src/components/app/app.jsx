import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main style={{margin: "0 auto", display: "flex", flexDirection: "row"}}>
          <BurgerIngredients/>
          <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
