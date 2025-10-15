import { Infographic } from "./Infographic";
import {
  LayoutList,
  Terminal,
  Users,
  Cpu,
  HardDrive,
  Gauge,
} from "lucide-react";

export function InfographicRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-4">
      <Infographic
        icon={<LayoutList size={50} />}
        label="Entregas em Fila"
        value={0}
      ></Infographic>
      <Infographic
        icon={<Terminal size={50} />}
        label="Entregas em Execução"
        value={0}
      ></Infographic>
      <Infographic
        icon={<Users size={50} />}
        label="Usuários Online"
        value={0}
      ></Infographic>
      <Infographic
        icon={<Cpu size={50} />}
        label="Uso de CPU: Server"
        value={0}
      ></Infographic>
      <Infographic
        icon={<HardDrive size={50} />}
        label="Uso de CPU: Base de Dados"
        value={0}
      ></Infographic>
      <Infographic
        icon={<Gauge size={50} />}
        label="Uso de CPU: Compiler"
        value={0}
      ></Infographic>
    </div>
  );
}
