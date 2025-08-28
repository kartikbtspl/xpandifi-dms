type StickyNotesDataProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export default function StickyNotesData({ children, fullWidth }: StickyNotesDataProps) {
  return (
    <div
      className={`bg-slate-100 ${fullWidth ? 'w-full' : 'w-[30%]'} h-[10vh] border rounded-lg flex p-2`}
    >
      {children}
    </div>
  );
}
