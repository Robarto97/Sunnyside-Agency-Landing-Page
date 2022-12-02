import Clients from "./Clients";
import Closure from "./Closure";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./Main Content";
import "./styles.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainContent />
        <Clients />
        <Closure />
      </main>
      <Footer />
    </>
  );
}

export default App;
