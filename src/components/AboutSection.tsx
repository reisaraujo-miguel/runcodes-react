import { useState } from "react";
import { TermsModal } from "./TermsModal";

export function AboutSection() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };
  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Bem-vindo ao RunCodes ICMC
          </h1>
          <p className="text-xl text-muted-foreground">
            O RunCodes é um sistema de submissão e correção automática de
            exercícios de programação, com suporte a diversas linguagens como
            C/C++, Python, Java, Haskell, GoLang, dentre outras.
          </p>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            Ao navegar no RunCodes você concorda com os{" "}
            <button
              type="button"
              onClick={openTermsModal}
              className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
            >
              Termos de Uso
            </button>
            .
          </p>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            Note que o RunCodes ICMC não é um serviço mantido pelo STI, logo, em
            caso de problemas com a plataforma, entre em contato com{" "}
            <a
              href="mailto:runcodes@icmc.usp.br"
              className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
            >
              runcodes@icmc.usp.br
            </a>
          </p>
        </div>
      </div>

      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
    </>
  );
}
