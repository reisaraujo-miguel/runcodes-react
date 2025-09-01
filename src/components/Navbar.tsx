import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

import { CircleUserRound } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-slate-700">
      <div className="mx-auto flex items-center justify-between h-12">
        <a href="/" className="ml-4">
          <img
            src="/src/assets/runcodes-logo/logo.png"
            alt="RunCodes Logo"
            className="h-10"
          />
        </a>
        <div className="flex h-full">
          <div className="flex items-center">
            <ModeToggle />
          </div>
          <div className="flex items-center px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white" variant="ghost" size="lg">
                  <CircleUserRound />
                  test@usp.br
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Dados Pessoais</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-between bg-blue-500 text-white px-2 font-bold">
            <span className="text-sm mr-4">Horario do Servidor:</span>
            <div className="flex flex-col text-center">
              <span className="block text-xs">06/06/6666</span>
              <span className="block text-xs">06:06:06</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
