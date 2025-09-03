type ChallanStickyNotesProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export default function ChallanStickyNotes({ children, fullWidth }: ChallanStickyNotesProps) {
  return (
    <div
      className={`bg-slate-100 ${fullWidth ? 'w-full' : 'w-[30%]'} h-[10vh] rounded-lg flex p-4`}
    >
      {children}
    </div>
  );
}
