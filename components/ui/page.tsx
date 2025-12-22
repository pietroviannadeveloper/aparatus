export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 p-5">{children}</div>;
};

export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h3 className="text-xs font-bold uppercase">{children}</h3>;
};

export const PageSectionContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-w-0 space-y-3">{children}</div>;
};

export const PageSectionScroller = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="-mx-5 min-w-0 overflow-x-auto overscroll-x-contain px-5 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max flex-nowrap gap-4 *:shrink-0">{children}</div>
    </div>
  );
};
