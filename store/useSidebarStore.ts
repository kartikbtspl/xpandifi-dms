import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  expandedSections: string[]; // Array of expanded section names
  toggle: () => void;
  close: () => void;
  toggleSection: (sectionName: string, level?: number) => void;
  isExpanded: (sectionName: string) => boolean;
  autoExpandSection: (sectionName: string) => void;
  closeOthersAtSameLevel: (sectionName: string, level: number) => void;
  isNestedSection: (sectionName: string) => boolean;
  isSiblingSection: (section1: string, section2: string) => boolean;
}

const useSidebarStore = create<SidebarState>((set, get) => ({
  isOpen: false,
  expandedSections: [],
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  toggleSection: (sectionName: string, level: number = 0) => 
    set((state) => {
      const isCurrentlyExpanded = state.expandedSections.includes(sectionName);
      if (isCurrentlyExpanded) {
        return {
          expandedSections: state.expandedSections.filter(s => s !== sectionName)
        };
      } else {
        // Close other sections at the same level before opening this one
        let newExpandedSections = [...state.expandedSections];
        
        if (level === 0) {
          // For main sections (level 0), close all other main sections
          // Keep only nested sections (level 1+) that are children of sections that will remain open
          newExpandedSections = state.expandedSections.filter(section => {
            // Keep nested sections, remove other main sections
            return get().isNestedSection(section);
          });
        } else if (level === 1) {
          // For nested sections (level 1), close other sections at level 1 that are siblings
          // This is for Reports > Sales Reports, Reports > Stock Reports, etc.
          newExpandedSections = state.expandedSections.filter(section => {
            // Keep main sections and non-sibling nested sections
            return !get().isSiblingSection(section, sectionName);
          });
        }
        
        return {
          expandedSections: [...newExpandedSections, sectionName]
        };
      }
    }),
  isExpanded: (sectionName: string) => get().expandedSections.includes(sectionName),
  autoExpandSection: (sectionName: string) => 
    set((state) => {
      if (!state.expandedSections.includes(sectionName)) {
        return {
          expandedSections: [...state.expandedSections, sectionName]
        };
      }
      return state;
    }),
  closeOthersAtSameLevel: (sectionName: string, level: number) => 
    set((state) => {
      if (level === 0) {
        // Close all other main sections
        return {
          expandedSections: state.expandedSections.filter(s => 
            s === sectionName || get().isNestedSection(s)
          )
        };
      } else {
        // Close sibling sections at the same level
        return {
          expandedSections: state.expandedSections.filter(s => 
            s === sectionName || !get().isSiblingSection(s, sectionName)
          )
        };
      }
    }),
  // Helper functions
  isNestedSection: (sectionName: string) => {
    // These are the nested sections under Reports
    const nestedSections = [
      'Sales Reports', 'Performance Reports', 'Target Reports', 
      'Stock Reports', 'Location Reports', 'Growth Reports', 'Visit Reports'
    ];
    return nestedSections.includes(sectionName);
  },
  isSiblingSection: (section1: string, section2: string) => {
    // Check if two sections are siblings (both are nested under Reports)
    const nestedSections = [
      'Sales Reports', 'Performance Reports', 'Target Reports', 
      'Stock Reports', 'Location Reports', 'Growth Reports', 'Visit Reports'
    ];
    return nestedSections.includes(section1) && nestedSections.includes(section2) && section1 !== section2;
  },
}));

export default useSidebarStore;
