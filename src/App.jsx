import { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import PokemonCard from "./components/PokemonCard";
import LikedPokemon from "./components/LikedPokemon";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import logo from "./assets/logo.png";
import { ThemeProvider } from "./contexts/theme";

const App = () => {
  // Define currentView and setCurrentView using useState
  const [currentView, setCurrentView] = useState("welcome");
  const [mode, setMode] = useState("light");
  const darkTheme = () => {
    setMode("dark")
  }
  const lightTheme = () => {
    setMode("light")
  }

  useEffect(()=> {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(mode)
  }, [mode])

  return (
    <ThemeProvider value={{mode, darkTheme, lightTheme}}>
      <Provider store={store}>
        <div className="w-full h-screen">
          <img src={logo} className="mx-auto my-4 h-20" />
          {currentView === "welcome" && (
            <Welcome onStartClick={() => setCurrentView("pokemon")} />
          )}
          {currentView === "pokemon" && (
            // Pass setCurrentView as a prop to PokemonCard
            <PokemonCard setCurrentView={setCurrentView} />
          )}
          {currentView === "liked" && <LikedPokemon />}
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
