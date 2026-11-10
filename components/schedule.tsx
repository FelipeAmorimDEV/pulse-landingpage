"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const FORMATS = ["Festival", "Balada", "Corporativo", "Estádio", "Outro"];

const ScheduleContext = createContext<(() => void) | null>(null);

function useSchedule() {
  const open = useContext(ScheduleContext);
  if (!open) {
    throw new Error("O botão de conversa precisa ficar dentro de ScheduleRoot.");
  }
  return open;
}

type TalkButtonProps = {
  tone?: "primary" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZE_CLASS = {
  sm: "btn-lg",
  md: "btn-lg",
  lg: "btn-lg",
} as const;

export function TalkButton({
  tone = "primary",
  size = "md",
  className = "",
}: TalkButtonProps) {
  const open = useSchedule();

  return (
    <button
      type="button"
      onClick={open}
      className={`btn px-7 text-base whitespace-nowrap active:translate-y-px ${SIZE_CLASS[size]} ${tone === "primary" ? "btn-primary" : "btn-neutral"} ${className}`}
    >
      Agendar uma conversa
    </button>
  );
}

export function ScheduleRoot({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [notice, setNotice] = useState(0);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(0), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  function open() {
    dialogRef.current?.showModal();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "");
    const email = String(data.get("email") ?? "");
    const evento = String(data.get("evento") ?? "");
    const formato = String(data.get("formato") ?? "");
    const body = [`Nome: ${nome}`, `E-mail: ${email}`, `Evento: ${evento}`, `Formato: ${formato}`].join(
      "\n",
    );
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Conversa — ${evento}`)}&body=${encodeURIComponent(body)}`;
    form.reset();
    dialogRef.current?.close();
    window.location.href = href;
    setNotice((current) => current + 1);
  }

  return (
    <ScheduleContext.Provider value={open}>
      {children}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box border border-base-content/15 bg-base-100 text-base-content">
          <h2 className="text-2xl font-bold">Agendar uma conversa</h2>
          <p className="mt-2 leading-relaxed text-base-content/70">
            Conta o formato do evento. O e-mail abre pronto para você enviar à equipe.
          </p>
          <form className="mt-6 flex flex-col gap-3" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="fieldset-legend" htmlFor="agenda-nome">
                Nome
              </label>
              <input
                id="agenda-nome"
                className="input w-full text-base"
                name="nome"
                autoComplete="name"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="fieldset-legend" htmlFor="agenda-email">
                E-mail
              </label>
              <input
                id="agenda-email"
                className="input w-full text-base"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="fieldset-legend" htmlFor="agenda-evento">
                Nome do evento
              </label>
              <input id="agenda-evento" className="input w-full text-base" name="evento" required />
            </fieldset>
            <fieldset className="fieldset">
              <label className="fieldset-legend" htmlFor="agenda-formato">
                Formato
              </label>
              <select
                id="agenda-formato"
                name="formato"
                className="select w-full text-base"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Escolha o formato
                </option>
                {FORMATS.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </fieldset>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-lg px-7 text-base btn-ghost"
                onClick={() => dialogRef.current?.close()}
              >
                Fechar
              </button>
              <button type="submit" className="btn btn-lg px-7 text-base btn-primary">
                Agendar uma conversa
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Fechar</button>
        </form>
      </dialog>
      {notice > 0 ? (
        <div className="toast toast-end toast-bottom z-50">
          <div role="status" className="alert alert-success">
            <span>Abra o e-mail e envie a conversa.</span>
          </div>
        </div>
      ) : null}
    </ScheduleContext.Provider>
  );
}
