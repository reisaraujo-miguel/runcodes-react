import { CollapsibleSection } from "@/components/CollapsibleSection";
import { InfographicRow } from "@/components/InfographicRow";
import { Terminal } from "lucide-react";
export function Home() {
  return (
    <div>
      <InfographicRow></InfographicRow>
      <CollapsibleSection label="Admin Info"></CollapsibleSection>
      <CollapsibleSection label="Estatísticas"></CollapsibleSection>
      <CollapsibleSection label="Próximas Entregas"></CollapsibleSection>
      <CollapsibleSection label="Minhas Disciplinas"></CollapsibleSection>
      <CollapsibleSection label="Nova Matrícula"></CollapsibleSection>
    </div>
  );
}
