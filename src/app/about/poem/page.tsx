import Breadcrumb from "@/components/general/breadCrumb";
import SectionHeader from "@/components/general/sectionHeader";
import { FRONTEND_URL, poems } from "@/utils/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "काव्य संग्रह | राहुल सिंह | Hindi Poems",

  description:
    "राहुल सिंह की चयनित हिंदी कविताओं का काव्य संग्रह। जीवन, समाज, संवेदना, रिश्तों और मानवीय अनुभवों से जुड़ी उनकी कविताएँ पढ़ें।",

  keywords: [
    "राहुल सिंह कविताएँ",
    "राहुल सिंह कविता",
    "Rahul Singh poems",
    "Hindi poems",
    "Hindi poetry",
    "हिंदी कविता",
    "हिंदी कविताएँ",
    "काव्य संग्रह",
    "कवि राहुल सिंह",
    "राहुल सिंह कवि",
    "थोड़े शब्द लगभग में",
    "Hindi poet",
    "Indian poetry",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/about/poem`,
  },

  openGraph: {
    title: "काव्य संग्रह | राहुल सिंह | Hindi Poems",

    description:
      "राहुल सिंह की चयनित हिंदी कविताओं का काव्य संग्रह। जीवन, समाज, संवेदना और मानवीय अनुभवों से जुड़ी उनकी कविताएँ पढ़ें।",

    url: `${FRONTEND_URL}/about/poem`,

    siteName: "Deorai",

    type: "website",

    locale: "hi_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783872182/authorBook_yy9qhc.png",
        width: 1200,
        height: 630,
        alt: "राहुल सिंह (घायल) — काव्य संग्रह",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "काव्य संग्रह | राहुल सिंह | Hindi Poems",

    description:
      "राहुल सिंह की चयनित हिंदी कविताएँ पढ़ें — जीवन, समाज, संवेदना और मानवीय अनुभवों से जुड़ा काव्य संग्रह।",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783872182/authorBook_yy9qhc.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function PoemsPage() {
  return (
    <section className="min-h-screen bg-[#FCF8F3] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Poems",
            },
          ]}
        />

        <SectionHeader
          eyebrow="Poetry Collection"
          title="काव्य संग्रह"
          subtitle="A collection of poems by Rahul Singh."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-full bg-[#EFE2D3] px-3 py-1 text-xs uppercase tracking-wider text-brand">
                कविता {poem.id}
              </div>

              <h3 className="font-serif text-2xl leading-snug text-brand">
                {poem.title}
              </h3>

              <div className="mt-6 whitespace-pre-line text-[#5E4634] leading-8 ">
                {poem.content}
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}