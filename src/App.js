import { createContext, useState } from "react";
import DemoComponent from "./components/DemoComponent/DemoComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import Overlay from "./components/Misc/Overlay";
import { Toaster } from "sonner";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({
    name: "",
    mail: "",
    date: "",
    location: "America, New York Time",
    time: "",
    formNo: 1,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="min-h-[100dvh] flex justify-center items-center relative">
        <LandingPage />
        <DemoComponent />
        <Overlay />
        <Toaster richColors position="top-right" />
      </div>
    </DataContext.Provider>
  );
}
export default App;
