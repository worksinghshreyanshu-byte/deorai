import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; 
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <div className={`text-sm text-gray-500 mb-8 ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="inline-flex items-center">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#5b2c0f] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand font-semibold">
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
