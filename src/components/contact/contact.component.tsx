import { FormEvent, useState } from "react";
import { MagneticButton } from "../magnetic_button/magnetic_button.component";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // mock submit - in production wire to an API or email service
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <section className="py-20 px-6 bg-card" id="contact">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="max-w-3xl mx-auto">
        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            className="p-3 rounded-lg border border-divider bg-background"
            placeholder="Your name"
            required
          />
          <input
            className="p-3 rounded-lg border border-divider bg-background"
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            className="p-3 rounded-lg border border-divider bg-background"
            placeholder="Message"
            rows={5}
            required
          />
          <div className="flex items-center gap-4">
            <MagneticButton
              type="submit"
              className="bg-primary text-background"
            >
              Send message
            </MagneticButton>
            {sent && (
              <div className="text-sm text-secondary">Sent — thank you!</div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
