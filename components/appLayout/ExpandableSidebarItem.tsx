'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types/index';
import React from 'react';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import useSidebarStore from '@/store/useSidebarStore';

interface ExpandableSidebarItemProps extends MenuItem {
  toggleSidebar?: () => void;
}

function renderNestedChildren(
  children: MenuItem[], 
  level: number, 
  pathname: string, 
  toggleSidebar?: () => void,
  toggleSection?: (name: string, level?: number) => void,
  isExpanded?: (name: string) => boolean
): React.ReactNode {
  const marginLeft = level === 1 ? '' : level === 2 ? '' : '';
  
  return (
    <div className={`${marginLeft} space-y-0`}>
      {children.map((child) => {
        if (child.isExpandable && child.children) {
          // This is a nested expandable item (like "Sales Reports" under "Reports")
          const childExpanded = isExpanded ? isExpanded(child.name) : false;
          const isChildActive = pathname === child.path || 
            (child.children && child.children.some(grandchild => pathname.startsWith(grandchild.path)));
          
          return (
            <div key={child.path}>
              <div
                className={`flex items-center justify-between py-3 pr-3 cursor-pointer text-sm w-full ${
                  isChildActive 
                    ? level === 1 ? 'bg-[#5D6F9E] text-white' : level === 2 ? 'bg-[#7A8BB8] text-white' : 'bg-[#5D6F9E] text-white'
                    : childExpanded 
                      ? level === 1 ? 'bg-[#383e54] text-white' : level === 2 ? 'bg-[#4A4F6B] text-white' : 'bg-[#383e54] text-white'
                      : level === 2 ? 'text-gray-400 hover:bg-[#4A4F6B] hover:text-gray-200' : 'text-gray-300 hover:bg-[#383e54] hover:text-white'
                } ${level === 1 ? 'pl-6' : level === 2 ? 'pl-12' : 'pl-6'}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (toggleSection) toggleSection(child.name, level);
                }}
              >
                <div className="flex items-center gap-3">
                  <span><child.icon className="text-base" /></span>
                  <span className="font-medium">{child.name}</span>
                </div>
                <span className="transition-transform duration-200">
                  {childExpanded ? (
                    <ChevronDownIcon className="w-3 h-3" />
                  ) : (
                    <ChevronRightIcon className="w-3 h-3" />
                  )}
                </span>
              </div>
              {/* Render nested children */}
              {childExpanded && child.children && (
                renderNestedChildren(
                  child.children, 
                  level + 1, 
                  pathname, 
                  toggleSidebar, 
                  toggleSection, 
                  isExpanded
                )
              )}
            </div>
          );
        } else {
          // Regular menu item
          return (
            <Link
              key={child.path}
              href={child.path}
              onClick={toggleSidebar}
              className={`flex items-center gap-3 py-3 pr-3 text-sm w-full ${
                pathname === child.path 
                  ? level === 1 ? 'bg-[#5D6F9E] text-white' : level === 2 ? 'bg-[#7A8BB8] text-white' : 'bg-[#5D6F9E] text-white'
                  : level === 2 ? 'text-gray-400 hover:bg-[#4A4F6B] hover:text-gray-200' : 'text-gray-300 hover:bg-[#383e54] hover:text-white'
              } ${level === 1 ? 'pl-6' : level === 2 ? 'pl-12' : 'pl-6'}`}
            >
              {level <= 1 && <span><child.icon className="text-base" /></span>}
              <span>{child.name}</span>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default function ExpandableSidebarItem({ 
  name, 
  icon: Icon, 
  path, 
  children, 
  isExpandable,
  level = 0,
  toggleSidebar 
}: ExpandableSidebarItemProps) {
  const pathname = usePathname();
  const { toggleSection, isExpanded, autoExpandSection } = useSidebarStore();
  const expanded = isExpanded(name);
  
  // Check if current path matches this item or any of its children (recursively)
  const checkIfActive = (item: MenuItem): boolean => {
    if (pathname === item.path) return true;
    if (item.children) {
      return item.children.some(child => checkIfActive(child));
    }
    return false;
  };
  
  const isActive = checkIfActive({ name, icon: Icon, path, children, isExpandable, level });

  // Auto-expand if current route matches any child
  React.useEffect(() => {
    if (isActive && children && !expanded) {
      autoExpandSection(name);
    }
  }, [pathname, isActive, children, expanded, name, autoExpandSection]);

  const handleClick = (e: React.MouseEvent) => {
    if (isExpandable && children) {
      e.preventDefault();
      toggleSection(name, level);
    }
  };

  const ItemContent = () => (
    <div 
      className={`flex items-center justify-between p-3 cursor-pointer ${
        isActive && !expanded ? 'bg-[#5D6F9E] text-white' : expanded ? 'bg-[#445E94] text-white' : 'hover:bg-[#383e54] text-gray-300'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <span><Icon className="text-lg" /></span>
        <span className="text-sm font-medium">{name}</span>
      </div>
      {isExpandable && children && (
        <span className="transition-transform duration-200">
          {expanded ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronRightIcon className="w-4 h-4" />
          )}
        </span>
      )}
    </div>
  );

  return (
    <div>
      {/* Main item */}
      {isExpandable && children ? (
        <ItemContent />
      ) : (
        <Link 
          href={path} 
          onClick={toggleSidebar}
          className="block"
        >
          <ItemContent />
        </Link>
      )}
      
      {/* Expandable children */}
      {isExpandable && children && expanded && (
        renderNestedChildren(children, level + 1, pathname, toggleSidebar, toggleSection, isExpanded)
      )}
    </div>
  );
}
