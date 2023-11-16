import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main style={{margin: "0 auto"}}>
          <BurgerIngredients/>
      </main>
    </div>
  );
}

export default App;
