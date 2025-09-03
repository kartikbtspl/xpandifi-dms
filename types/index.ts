import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  icon: IconType;
  path: string;
  label?: string;
  toggleSidebar?: () => void;
  children?: MenuItem[]; // For expandable sections
  isExpandable?: boolean; // To identify parent items that can expand
  level?: number; // To track nesting level (0 = root, 1 = subsection, 2 = nested subsection)
}
