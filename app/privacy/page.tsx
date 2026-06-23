import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Privacy Policy | UniqueHire",
  description:
    "How UniqueHire collects, uses, and protects the personal information you share with us.",
}

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you contact us, apply for a role, or otherwise interact with this website, we may collect information you provide directly — such as your name, email address, phone number, company, and the contents of your message.",
      "We also collect limited technical information automatically, including IP address, browser type, and pages visited, through standard analytics.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiries, evaluate job applications, deliver our services, and improve this website.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "3. Form Submissions",
    body: [
      "Messages sent through our contact form are delivered to us via a third-party form-handling service. Your data is transmitted securely and used solely to respond to your request.",
    ],
  },
  {
    heading: "4. Cookies & Analytics",
    body: [
      "This site stores a small cookie to remember your theme preference and uses privacy-respecting analytics to understand aggregate traffic. You can disable cookies in your browser settings.",
    ],
  },
  {
    heading: "5. Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfil the purposes described in this policy or as required by law.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, email us at info@uniquehire.com.",
    ],
  },
  {
    heading: "7. Contact Us",
    body: [
      "Questions about this Privacy Policy can be sent to info@uniquehire.com.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: June 2026
          </p>

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
