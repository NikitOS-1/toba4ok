import "./App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const video = "./assets/video/bgSmokeForPhone.mp4";
  return (
    <div className="App">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={video} type="video/mp4" />
      </video>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
