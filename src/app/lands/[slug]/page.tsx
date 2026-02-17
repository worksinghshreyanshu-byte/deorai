import { notFound } from "next/navigation";
import Image from "next/image";
import { lands } from "@/utils/constants";
import Breadcrumb from "@/components/general/breadCrumb";
import LandGallery from "@/components/lands/landGallery";


interface PageProps {
  params: {
    slug: string;
  };
}

export default async function LandDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const land = lands.find((l) => l.slug === slug);

  if (!land) return notFound();

  return (
    <div className="bg-[#f5f1eb] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Lands", href: "/lands" },
            { label: land.title },
          ]}
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif text-[#5b2c0f] leading-tight">
              {land.title}
            </h1>

            <p className="mt-5 text-gray-600 italic max-w-2xl">
              {land.description}
            </p>
          </div>

          <div className="flex md:justify-end">
            <div className="inline-flex items-center gap-2 bg-[#efe4d8] text-[#5b2c0f] px-6 py-3 rounded-full shadow-sm border border-[#e2d6c8]">
              <span className="text-base font-semibold">
                {land.area}
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[450px] mt-14 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={land.image}
            alt={land.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto my-10">
          <h2 className="text-2xl font-serif text-[#5b2c0f] mb-6">
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
