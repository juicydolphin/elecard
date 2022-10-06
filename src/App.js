import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
