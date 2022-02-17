import "./globals.css";
import styles from "./App.module.css";
import List from "./Pages/List/list";

function App() {
  return (
    <div className={styles.app}>
      <List />
    </div>
  );
}

export default App;
