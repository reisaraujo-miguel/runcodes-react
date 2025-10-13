import "@/App.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

import { Home } from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
