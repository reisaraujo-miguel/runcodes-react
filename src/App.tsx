import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <LoginPage />
      </main>
    </ThemeProvider>
  );
}

export default App;
