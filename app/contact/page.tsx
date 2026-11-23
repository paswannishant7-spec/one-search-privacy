import type { Metadata } from "next";
import { Building2, CircleAlert, Mail, MapPin } from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Privacy contact",
  description: "Contact and grievance-channel readiness for One Search privacy requests.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="subpage-main">
        <header className="subpage-hero section-shell subpage-hero--compact">
          <span className="kicker">Contact / grievance</span>
          <h1>
            A real channel,
            <span>before launch.</span>
          </h1>
          <p>
            Contact details are not fabricated. The operator must provide and test the details below
            before this privacy center can be published.
          </p>
        </header>

        <section className="contact-grid section-shell" aria-label="Required contact information">
          <article>
            <Building2 aria-hidden />
            <span>Legal entity</span>
            <strong>Required from business</strong>
          </article>
          <article>
            <Mail aria-hidden />
            <span>Monitored privacy email</span>
            <strong>Required from business</strong>
          </article>
          <article>
            <MapPin aria-hidden />
            <span>Registered or service address</span>
            <strong>Required from business</strong>
          </article>
        </section>

        <section className="contact-blocker section-shell">
          <CircleAlert aria-hidden />
          <div>
            <h2>Why there is no form yet</h2>
            <p>
              A form without a verified recipient and secure request-handling process could expose
              personal data while creating the false impression that a request was received. Add the
              monitored channel, ticketing destination, identity-verification procedure, service
              levels, and escalation owner first.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
