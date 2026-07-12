import Link from "next/link";
import Image from "next/image";
import { events } from "@/utils/constants";
import { IoLocationSharp } from "react-icons/io5";


export default function EventsSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="block"
          >
            <div className="flex flex-col md:flex-row bg-[#F8F1E8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              
           
              <div className="relative w-full md:w-[40%] h-64 md:h-auto">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-[60%] space-y-3">
                <div className="flex gap-3 text-sm">
                  <span className="bg-[#F3E7D8] text-brand px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                  <span className="bg-[#F3E7D8] text-brand  px-3 py-1 rounded-full">
                    {event.time}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#3E2417]">
                  {event.title}
                </h3>

                <p className="text-[#6B5B4D]">
                  {event.description}
                </p>

                <p className="text-sm text-[#8A7B6A] flex gap-1 items-center ">
                <IoLocationSharp /> {event.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
