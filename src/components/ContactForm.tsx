import { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Bot, ChevronDown } from "lucide-react";

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
    throw new Error(
      "Cannot make the request."
    );
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
      (err as { error?: string }).error ?? "Failed to send message."
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    "w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all";

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-20">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Send className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Send me a message — I'll get back to you shortly.
          </p>
        </div>

        {/* Telegram badge */}
        <div
          className={`ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
            isConfigured
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-amber-500/10 border-amber-500/20 text-amber-400"
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          {isConfigured ? "Connected" : "Not configured"}
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Info card */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                Response time
              </p>
              <p className="text-slate-300 text-sm">Usually within 24 hours</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                Open to
              </p>
              <ul className="space-y-1.5 text-sm text-slate-400">
                {[
                  "Freelance projects",
                  "Full-time opportunities",
                  "Technical consultations",
                  "Open source collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {!isConfigured && (
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-xs text-amber-400 leading-relaxed">
              <p className="font-semibold mb-1">⚙️ Setup required</p>
              <p>
                Add <code className="bg-amber-500/10 px-1 rounded">VITE_TELEGRAM_BOT_TOKEN</code> and{" "}
                <code className="bg-amber-500/10 px-1 rounded">VITE_TELEGRAM_CHAT_ID</code> to your{" "}
                <code className="bg-amber-500/10 px-1 rounded">.env</code> file.
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-slate-500 font-medium">
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
                <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-slate-500 font-medium">
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
    <option value="project-collaboration">Project Collaboration</option>
    <option value="freelance-work">Freelance Work</option>
    <option value="job-opportunity">Job Opportunity</option>
    <option value="other">Other</option>
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
    <ChevronDown size={16} />
  </div>
</div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 text-sm">
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-xl transition-all text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.98] cursor-pointer"
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
