import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Terms of Service | UniqueHire",
  description:
    "The terms and conditions governing your use of the UniqueHire website and services.",
}

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using the UniqueHire website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.",
    ],
  },
  {
    heading: "2. Use of the Website",
    body: [
      "You may use this website for lawful purposes only. You agree not to misuse the site, attempt to gain unauthorized access, or interfere with its normal operation.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, and design — is the property of UniqueHire or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute it without permission.",
    ],
  },
  {
    heading: "4. Services",
    body: [
      "Information about our services is provided for general purposes. Specific engagements are governed by separate written agreements between UniqueHire and the client.",
    ],
  },
  {
    heading: "5. Third-Party Links",
    body: [
      "This website may contain links to third-party sites. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    heading: "6. Disclaimer & Limitation of Liability",
    body: [
      "This website is provided on an \"as is\" basis without warranties of any kind. To the fullest extent permitted by law, UniqueHire is not liable for any damages arising from your use of the site.",
    ],
  },
  {
    heading: "7. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "8. Contact Us",
    body: [
      "Questions about these Terms can be sent to info@uniquehire.com.",
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-semibold">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="mt-3 text-muted-foreground leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
