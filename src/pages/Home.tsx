import { CollapsibleSection } from "@/components/CollapsibleSection";
import { Infographic } from "@/components/Infographic";
import { Terminal } from "lucide-react";
export function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-4">
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
        <Infographic
          icon={<Terminal size={50} />}
          label="Entregas em Fila"
          value={0}
        ></Infographic>
      </div>

      <CollapsibleSection label="Admin Info"></CollapsibleSection>
      <CollapsibleSection label="Estatísticas"></CollapsibleSection>
      <CollapsibleSection label="Próximas Entregas"></CollapsibleSection>
      <CollapsibleSection label="Minhas Disciplinas"></CollapsibleSection>
      <CollapsibleSection label="Nova Matrícula"></CollapsibleSection>
    </div>
  );
}
