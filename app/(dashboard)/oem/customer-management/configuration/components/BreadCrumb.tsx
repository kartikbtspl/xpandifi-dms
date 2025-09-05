import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Customer Management", href: "/customer-management" },
    { label: "Customer Configuration", href: "/customer-management/configuration" },
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600">
      {crumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          <a
            href={crumb.href}
            className={`${
              index === crumbs.length - 1
                ? "font-semibold text-[#5D6F9E]"
                : "hover:text-blue-600"
            }`}
          >
            {crumb.label}
          </a>
          {index < crumbs.length - 1 && (
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
}