import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Crumb = {
  label: string;
  href?: string; // optional now
  isClickable?: boolean; // new flag
};

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-gray-600">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        const isClickable = crumb.isClickable ?? true; // default true

        return (
          <div key={crumb.label} className="flex items-center">
            {isClickable && crumb.href ? (
              <Link
                href={crumb.href}
                className={`${
                  isLast
                    ? "font-semibold text-[#5D6F9E]"
                    : "hover:text-blue-600"
                }`}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                className={`${
                  isLast
                    ? "font-semibold text-[#5D6F9E]"
                    : "text-gray-500 cursor-default"
                }`}
              >
                {crumb.label}
              </span>
            )}
            {index < crumbs.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
