import AppHeader from "./components/common/Header/AppHeader";
import AppFooter from "./components/common/Footer/AppFooter";
import "./App.css";
import NewsComponent from "./components/news/NewsComponent/NewsComponent";

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
