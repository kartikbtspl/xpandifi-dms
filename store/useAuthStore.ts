import create from 'zustand';
import { TokenPayload, Role } from '../types';

type AuthState = {
  token: string | null;
  role: Role | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  login: (email: string, password: string) => {
    if (email === 'oem@example.com' && password === 'oem@1234') {
      const tokenObj: TokenPayload = { role: 'oem', name: 'OEM User' };
      const token = JSON.stringify(tokenObj);
      if (typeof window !== 'undefined') localStorage.setItem('token', token);
      set({ token, role: 'oem' });
      return true;
    }
    if (email === 'dms@example.com' && password === 'dms@1234') {
      const tokenObj: TokenPayload = { role: 'dms', name: 'DMS User' };
      const token = JSON.stringify(tokenObj);
      if (typeof window !== 'undefined') localStorage.setItem('token', token);
      set({ token, role: 'dms' });
      return true;
    }
    return false;
  },
  logout: () => {
    if (typeof window !== 'undefined') localStorage.removeItem('token');
    set({ token: null, role: null });
  },
}));

// initialize from localStorage on client side
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('token');
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as TokenPayload;
      useAuthStore.setState({ token: stored, role: parsed.role });
    } catch (e) {
      // ignore
    }
  }
}

export default useAuthStore;
