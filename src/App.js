import DemoComponent from "./components/DemoComponent/DemoComponent";
import LandingPage from "./components/LandingPage/LandingPage";
import Overlay from "./components/Misc/Overlay";

function App() {
  return (
    <div className="min-h-[100dvh] grid relative">
      <LandingPage />
      <DemoComponent />
      <Overlay />
    </div>
  );
}
export default App;
