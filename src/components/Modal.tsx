import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, title, subtitle, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6"
    >
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 cursor-pointer bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 theme-surface-strong shadow-[0_30px_100px_rgba(2,6,23,0.6)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-amber-300 font-semibold">
              Details
            </p>
            <h3 id="modal-title" className="mt-2 text-2xl font-bold text-white">
              {title}
            </h3>
            {subtitle ? (
              <p className="mt-1 text-sm text-(--theme-text-muted)">
                {subtitle}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="theme-surface-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-(--theme-text-soft) transition-colors hover:text-amber-300 cursor-pointer"
            aria-label="Close details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[72vh] overflow-y-auto px-6 py-5">{children}</div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export default Modal;
