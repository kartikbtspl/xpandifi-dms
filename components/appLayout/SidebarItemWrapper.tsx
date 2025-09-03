'use client';
import { MenuItem } from '@/types/index';
import SidebarItem from './SidebarItem';
import ExpandableSidebarItem from './ExpandableSidebarItem';

interface SidebarItemWrapperProps extends MenuItem {
  toggleSidebar?: () => void;
}

export default function SidebarItemWrapper(props: SidebarItemWrapperProps) {
  // If item has children and is expandable, use ExpandableSidebarItem
  if (props.isExpandable && props.children) {
    return <ExpandableSidebarItem {...props} />;
  }
  
  // Otherwise, use regular SidebarItem
  return <SidebarItem {...props} />;
}
