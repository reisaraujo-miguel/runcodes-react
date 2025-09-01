import { LoginCard } from "../components/LoginCard";
import { AboutSection } from "../components/AboutSection";
import { ModeToggle } from "../components/mode-toggle";
import { useTheme } from "../lib/theme";

export function LoginPage() {
  const { theme } = useTheme();

  // Determine if we're in dark mode based on the current theme
  const isDarkTheme =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="min-h-screen bg-background">
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex dark:border-r">
          <div className="absolute inset-0" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img
              src={
                isDarkTheme
                  ? "/src/assets/runcodes-logo/logo.png"
                  : "/src/assets/runcodes-logo/logoblue.png"
              }
              alt="RunCodes Logo"
              className="h-10"
            />
            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <AboutSection />
          </div>
        </div>
        <div className="flex items-center justify-center p-8 lg:p-0">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}
