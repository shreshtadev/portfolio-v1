import { useState, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Bot,
  ChevronDown,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string;

const sendTelegramMessage = async (data: FormData): Promise<void> => {
  if (!CONTACT_API_URL) {
    throw new Error("Cannot make the request.");
  }

  const res = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));

    throw new Error(
      (err as { error?: string }).error ?? "Failed to send message.",
    );
  }
};

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const isConfigured = Boolean(CONTACT_API_URL);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendTelegramMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputCls =
    "theme-surface-soft w-full rounded-xl px-4 py-3 text-sm text-[var(--theme-text-soft)] placeholder:text-[var(--theme-text-muted)] focus:outline-none focus:border-[rgba(244,184,96,0.35)] focus:ring-1 focus:ring-[rgba(244,184,96,0.18)] transition-all";

  return (
    <section id="contact" className="max-w-4xl mx-auto px-0 pb-16">
      {/* Section header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="theme-surface-soft flex h-10 w-10 items-center justify-center rounded-xl">
            <Send className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-sm mt-0.5 text-(--theme-text-muted)">
              Send me a message — I'll get back to you shortly.
            </p>
          </div>
        </div>

        {/* Telegram badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border self-start sm:self-auto ${
            isConfigured
              ? "theme-accent-soft"
              : "bg-red-500/10 border-red-500/20 text-red-300"
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          {isConfigured ? "Connected" : "Not configured"}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info card */}
        <div className="space-y-4">
          <div className="theme-surface-strong rounded-2xl p-5 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-amber-300 font-semibold mb-1">
                Response time
              </p>
              <p className="text-sm text-(--theme-text-soft)">
                Usually within 24 hours
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-amber-300 font-semibold mb-1">
                Open to
              </p>
              <ul className="space-y-1.5 text-sm text-(--theme-text-muted)">
                {[
                  "Freelance projects",
                  "Full-time opportunities",
                  "Technical consultations",
                  "Open source collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {!isConfigured && (
            <div className="theme-surface-soft rounded-xl p-4 text-xs text-amber-300 leading-relaxed">
              <p className="font-semibold mb-1">Setup required</p>
              <p>
                Missing{" "}
                <span className="rounded bg-amber-500/10 px-1 text-amber-200">
                  configurations
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="theme-surface-strong rounded-2xl p-5 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-[0.24em] text-(--theme-text-muted) font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputCls}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-[0.24em] text-(--theme-text-muted) font-medium"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="relative">
              <select
                id="contact-subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className={`${inputCls} appearance-none pr-10`}
              >
                <option value="">Select a subject</option>
                <option value="project-collaboration">
                  Project Collaboration
                </option>
                <option value="freelance-work">Freelance Work</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="other">Other</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-(--theme-text-muted)">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-[0.24em] text-(--theme-text-muted) font-medium"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="theme-accent-soft flex items-center gap-2 rounded-xl px-4 py-3 text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Message sent successfully! I'll reply soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || !isConfigured}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_18px_40px_rgba(244,184,96,0.22)] hover:shadow-[0_20px_45px_rgba(244,184,96,0.28)] active:scale-[0.98] cursor-pointer"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
