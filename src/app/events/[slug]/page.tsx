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
    <div className="bg-[#F3EFEA] min-h-screen py-15 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
      <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Events", href: "/events" },
            { label: event.title },
          ]}
        />
        <div className="relative w-full h-96">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3E2417]">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-[#6B5B4D]">
            <span className="flex gap-2 items-center">
              <FaCalendarCheck /> {event.date}
            </span>
            <span className="flex gap-2 items-center">
              <FaClock />
              {event.time}
            </span>
            <span className="flex gap-2 items-center">
              <IoLocationSharp /> {event.location}
            </span>
          </div>

          <p className="text-[#6B5B4D] text-lg">{event.description}</p>
        </div>

        {event.about && (
          <div className="space-y-3">
            <h2 className="text-2xl font-serif text-[#3E2417]">
              About the Event
            </h2>
            <p className="text-[#6B5B4D] leading-relaxed">{event.about}</p>
          </div>
        )}

        {event.significance && (
          <div className="space-y-3">
            <h2 className="text-2xl font-serif text-[#3E2417]">Significance</h2>
            <p className="text-[#6B5B4D] leading-relaxed">
              {event.significance}
            </p>
          </div>
        )}
        <div className="flex items-center my-6 mx-auto justify-center max-w-6xl ">
          <div className="flex-1 h-px bg-[#E0C9A6] ml-6" />
          <div className="mx-4 text-[#C49A6C]">✦</div>
          <div className="flex-1 h-px bg-[#E0C9A6] mr-6" />
        </div>
      </div>
    </div>
  );
}
