import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Crumb = {
  label: string;
  href: string;
};

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-gray-600">
      {crumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          <Link
            href={crumb.href}
            className={`${
              index === crumbs.length - 1
                ? "font-semibold text-[#5D6F9E]"
                : "hover:text-blue-600"
            }`}
          >
            {crumb.label}
          </Link>
          {index < crumbs.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
}
