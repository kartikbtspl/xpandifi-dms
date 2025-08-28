import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  icon: IconType;
  path: string;
  label?: string;
  toggleSidebar?: () => void;
}