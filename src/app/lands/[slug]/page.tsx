import { notFound } from "next/navigation";
import Image from "next/image";
import { lands } from "@/utils/constants";
import Breadcrumb from "@/components/general/breadCrumb";
import LandGallery from "@/components/lands/landGallery";
import SectionHeader from "@/components/general/sectionHeader";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}
const siteUrl = "https://deorai.netlify.app";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const land = lands.find((l) => l.slug === slug);

  if (!land) {
    return {
      title: "Land Not Found | Deorai",
      description: "The requested heritage land could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${land.title} | Heritage Lands of Deorai`;

  const description =
    land.description ||
    `Explore the history and story of ${land.title}, part of the ancestral heritage lands of Deorai.`;

  return {
    metadataBase: new URL(siteUrl),

    title,

    description,

    keywords: [
      land.title,
      "Deorai",
      "Deorai heritage",
      "Deorai lands",
      "Deorai ancestral land",
      "Deorai heritage lands",
      "Deorai village",
      "Deorai history",
      "Deorai ancestral estate",
      "ancestral land",
      "heritage land",
      "Indian village heritage",
      "Deorai village history",
    ],

    alternates: {
      canonical: `${siteUrl}/lands/${land.slug}`,
    },

    openGraph: {
      title,

      description,

      url: `${siteUrl}/lands/${land.slug}`,

      siteName: "Deorai",

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: land.image,
          width: 1200,
          height: 630,
          alt: `${land.title} - Heritage Lands of Deorai`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [land.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return lands.map((land) => ({
    slug: land.slug,
  }));
}
export default async function LandDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const land = lands.find((l) => l.slug === slug);

  if (!land) return notFound();

  return (
    <div className="bg-[#f5f1eb] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Lands", href: "/lands" },
            { label: land.title },
          ]}
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-8">
          <SectionHeader
            align="left"
            eyebrow="Village Lands"
            title={land.title}
            subtitle={land.description}
            className=""
          />
          <div className="flex md:justify-end">
            <div className="inline-flex items-center gap-2 bg-[#efe4d8] text-brand px-3 py-1.5 rounded-xl shadow-sm border border-[#e2d6c8]">
              <span className="text-base font-semibold">{land.area}</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-100 lg:h-112.5 mt-6 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={land.image}
            alt={land.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto my-10">
          <h2 className="text-xl lg:text-2xl font-semibold font-serif text-[#5b2c0f] mb-6">
            The Story of This Land
          </h2>

          <p className="text-gray-700 leading-loose text-sm md:text-lg">
            {land.details}
          </p>
        </div>

        <LandGallery images={land.gallery} title={land.title} />
      </section>
    </div>
  );
}
