import {
  Chip,
  Explore,
  Footer,
  Highlights,
  Home,
  KeepExplore,
  Look,
  Nav,
  ShowcasePhoneApp,
} from "./components";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Highlights />
        <Look />
        <Explore />
        <Chip />
        <ShowcasePhoneApp />
        <KeepExplore />
      </main>
      <Footer />
    </>
  );
}

export default App;
