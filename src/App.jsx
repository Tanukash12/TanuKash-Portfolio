import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
