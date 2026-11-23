import type { Metadata } from "next";
import { Check, CircleDashed, Database, ShieldAlert, Smartphone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "One Search account-deletion pathway and current integration status.",
};

const contractSteps = [
  {
    icon: Smartphone,
    title: "Start from the signed-in app",
    body: "The production flow should be available under account or privacy settings and should re-authenticate the account owner when risk requires it.",
  },
  {
    icon: Database,
    title: "Confirm the deletion scope",
    body: "Before confirmation, list the account data, uploads, generated media, subscriptions, retained legal records, and expected processing time.",
  },
  {
    icon: Check,
    title: "Receive a real completion record",
    body: "The backend should invalidate sessions, queue provider deletion, record exceptions, and send a verified completion or follow-up notice.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="subpage-main">
        <header className="subpage-hero section-shell subpage-hero--compact">
          <span className="kicker">Privacy control</span>
          <h1>
            Delete your
            <span>account.</span>
          </h1>
          <p>
            This route is implemented, but request submission is intentionally disabled until the
            account system and operational deletion channel are verified.
          </p>
        </header>

        <section className="deletion-status section-shell" aria-labelledby="deletion-status-title">
          <div className="deletion-status__card">
            <CircleDashed aria-hidden />
            <div>
              <span>Integration status</span>
              <h2 id="deletion-status-title">Backend connection required</h2>
              <p>
                No authenticated deletion endpoint, account schema, retention schedule, or monitored
                privacy address was supplied. This page therefore does not collect personal data or
                show a false success message.
              </p>
            </div>
          </div>
          <div className="deletion-status__note">
            <ShieldAlert aria-hidden />
            <p>
              <strong>Release blocker:</strong> connect this route to a verified deletion workflow
              and add an in-app deletion path if users can create accounts.
            </p>
          </div>
        </section>

        <section className="deletion-contract section-shell" aria-labelledby="contract-title">
          <div className="section-heading">
            <span className="kicker">Production contract</span>
            <h2 id="contract-title">The flow this page is ready to support.</h2>
          </div>
          <div className="contract-grid">
            {contractSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <Icon aria-hidden />
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              );
            })}
          </div>
          <div className="api-contract">
            <span>Suggested authenticated endpoint</span>
            <code>POST /api/v1/account/deletion-requests</code>
            <p>
              Required server behavior: authenticated ownership check, CSRF/replay protection,
              idempotency, audit event, retention-exception record, provider fan-out, and a status
              lookup or verified notification. Never expose service credentials in this frontend.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
