
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./scss/App.scss";
import data from "./data";
console.log("asd");
console.log("deneme2");
function App() {
  return (
    <>
      <Header />
      <Card data={data}/>
      <Footer />
    </>
  );
}

export default App;
