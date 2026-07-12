import Breadcrumb from "@/components/general/breadCrumb";
import { events } from "@/utils/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCalendarCheck, FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div className="min-h-screen bg-[#FCF8F3] py-16 px-6">
      <div className="mx-auto max-w-4xl space-y-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Events", href: "/events" },
            { label: event.title },
          ]}
        />

        {/* Image */}

        <div className="rounded-[28px] border border-[#D7C3AC] bg-[#F8F1E8] ">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Heading */}

        <div className="space-y-6">
        <h1 className="font-serif text-5xl text-brand">
  {event.title}
</h1>

<p className="italic text-[#8B6F59]">
  {event.description}
</p>

          {/* Metadata */}

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F3E7D8] px-4 py-2 text-sm font-medium text-[#5E4634]">
              <FaCalendarCheck className="text-brand" />
              {event.date}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F3E7D8] px-4 py-2 text-sm font-medium text-[#5E4634]">
              <FaClock className="text-brand" />
              {event.time}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F3E7D8] px-4 py-2 text-sm font-medium text-[#5E4634]">
              <IoLocationSharp className="text-brand" />
              {event.location}
            </span>
          </div>
        </div>

        {/* About */}

        {event.about && (
          <section className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8">
            <h2 className="font-serif text-3xl text-brand">
              About the Event
            </h2>

            <div className="my-5 h-px bg-[#E4D6C7]" />

            <p className="leading-9 text-[#5E4634]">
              {event.about}
            </p>
          </section>
        )}

        {/* Significance */}

        {event.significance && (
          <section className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8">
            <h2 className="font-serif text-3xl text-brand">
              Cultural Significance
            </h2>

            <div className="my-5 h-px bg-[#E4D6C7]" />

            <p className="leading-9 text-[#5E4634]">
              {event.significance}
            </p>
          </section>
        )}

        <div className="flex items-center justify-center py-6">
          <div className="h-px flex-1 bg-[#D7C3AC]" />

          <div className="mx-5 text-xl text-brand">✦</div>

          <div className="h-px flex-1 bg-[#D7C3AC]" />
        </div>
      </div>
    </div>
  );
}