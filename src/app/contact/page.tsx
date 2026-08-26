import Breadcrumb from "@/components/general/breadCrumb";
import SectionHeader from "@/components/general/sectionHeader";
import { FRONTEND_URL } from "@/utils/constants";
import { Mail, Phone, MapPinned, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Contact Deorai | Heritage, Business & Collaboration Enquiries",

  description:
    "Get in touch with Deorai for heritage documentation, collaborations, partnerships, investments, media enquiries, business opportunities, and preserving the legacy of Deorai village.",

  keywords: [
    "Contact Deorai",
    "Deorai contact",
    "Deorai village",
    "Deorai heritage",
    "Deorai business enquiries",
    "Deorai partnerships",
    "Deorai collaborations",
    "Deorai media enquiries",
    "Deorai heritage documentation",
    "Deorai village contact",
    "Deorai Uttar Pradesh",
    "heritage collaboration",
    "heritage documentation",
    "business partnership Deorai",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/contact`,
  },

  openGraph: {
    title: "Contact Deorai | Heritage, Business & Collaboration Enquiries",

    description:
      "Contact Deorai for heritage documentation, collaborations, partnerships, investments, media enquiries, and initiatives dedicated to preserving the legacy of Deorai village.",

    url: `${FRONTEND_URL}/contact`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783872182/authorBook_yy9qhc.png",
        width: 1200,
        height: 630,
        alt: "Contact Deorai — Heritage, Business & Collaboration Enquiries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Deorai | Heritage, Business & Collaboration Enquiries",

    description:
      "Get in touch with Deorai for heritage documentation, collaborations, partnerships, investments, media enquiries, and preserving the legacy of Deorai village.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783872182/authorBook_yy9qhc.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className=" bg-[#FCF8F3] py-16 mx-auto  px-4">
      <div className=" max-w-7xl mx-auto">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <SectionHeader
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="For heritage documentation, collaborations, business enquiries, and preserving the legacy of Deorai."
        />
        <div className="grid gap-10 lg:grid-cols-[430px_1fr]">
          <div className="space-y-8">
            <ContactCard
              name="Rahul Singh"
              phone="+91 98337 00965"
              email="rahul_r_singh@hotmail.com"
            />
            <ContactCard
              name="Shreyanshu Singh"
              phone="+91 95063 10223"
              email="work.singhshreyanshu@gmail.com"
            />
            <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-6 lg:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F59]">
                    Business Enquiries
                  </p>
                  <a
                    href="mailto:devraigaon@gmail.com"
                    className="mt-2 block text-sm lg:text-lg font-medium text-[#5E4634] transition hover:text-brand"
                  >
                    devraigaon@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-6">
              <p className="lg:leading-8 leading-7 text-[#5E4634]">
                For{" "}
                <span className="font-semibold text-brand">investments</span>,{" "}
                <span className="font-semibold text-brand">partnerships</span>,{" "}
                <span className="font-semibold text-brand">collaborations</span>
                ,{" "}
                <span className="font-semibold text-brand">
                  media inquiries
                </span>
                , or any other business-related matters, please contact us using
                the details above or submit your inquiry through our Google
                Form.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdO9PiZJ7XhmCwLc1wC1EQys5NhnWmcukSH9lsv6DkQI9XsDA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-3xl bg-brand px-8 py-5 text-md lg:text-lg font-medium text-white transition hover:opacity-90"
            >
              <FileText size={22} />
              Business & Partnership Form
            </a>
          </div>

          <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] lg:p-8 p-6">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
                  <MapPinned size={24} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F59]">
                    Location
                  </p>

                  <h3 className="font-serif text-xl font-semibold lg:text-3xl text-brand">
                    Visit Deorai
                  </h3>
                </div>
              </div>

              <div className="my-6 h-px bg-[#E4D6C7]" />

              <p className="lg:leading-8 lg:text-md text-sm leading-7 text-[#5E4634]">
                Located in the historic village of Deorai, this place reflects
                generations of culture, tradition, and heritage. We welcome
                researchers, visitors, and anyone interested in preserving the
                legacy of our village.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#D7C3AC]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.6176940877904!2d82.9654723!3d25.551108599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991d540a0c89657%3A0x6b4dfe673d58438d!2sHanuman%20Mandir%20Devrai!5e0!3m2!1sen!2sin!4v1783866806229!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
}

function ContactCard({ name, phone, email }: ContactCardProps) {
  return (
    <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-6 lg:p-8">
      <h3 className="font-serif lg:text-3xl text-xl font-semibold text-brand">{name}</h3>

      <div className="my-6 h-px bg-[#E4D6C7]" />

      <div className="space-y-5">
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="flex items-center gap-4 text-[#5E4634] text-sm transition hover:text-brand"
        >
          <div className="flex h-10 w-10 items-center justify-center text-sm rounded-full bg-[#F3E7D8] text-brand">
            <Phone size={18} />
          </div>

          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center gap-4 text-[#5E4634] text-sm transition hover:text-brand"
        >
          <div className="flex h-10 w-10 items-center justify-center text-sm rounded-full bg-[#F3E7D8] text-brand">
            <Mail size={18} />
          </div>

          {email}
        </a>
      </div>
    </div>
  );
}
