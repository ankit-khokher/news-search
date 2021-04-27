import AppHeader from "./components/Header/AppHeader";
import AppFooter from "./components/Footer/AppFooter";
import "./App.css";
import NewsComponent from "./components/NewsComponent/NewsComponent";

function App() {
  return (
    <>
      <AppHeader />
      <NewsComponent />
      <AppFooter />
    </>
  );
}

export default App;
