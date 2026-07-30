import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dmitrii Lobanov",
};

export default function Contact() {
  return (
    <main className="flex flex-col gap-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-text-primary tracking-tight">
          Contact
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-text-primary">
              Ready to scale?
            </h2>
            <p className="text-text-secondary text-lg">
              I am open to senior remote opportunities globally.
            </p>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 bg-text-primary text-bg-base px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-accent-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base outline-none shadow-sm"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
