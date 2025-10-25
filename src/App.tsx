import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
