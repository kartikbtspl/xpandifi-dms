export type Role = 'oem' | 'dms';

export interface TokenPayload {
  role: Role;
  name: string;
}

export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  label?: string;
  toggleSidebar?: () => void;
}
