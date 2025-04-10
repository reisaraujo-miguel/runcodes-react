import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main>
        <p>Running Codes... or not... YET!</p>
      </main>
    </ThemeProvider>
  );
}

export default App;
