type childrenProps = {
  children: React.ReactNode;
  className?: string;
};
const Heading = ({ children, className = "left" }: childrenProps) => {
  return (
    <h1 className={`leading-10 xl:text-3xl text-2xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

const Text = ({ children }: childrenProps) => {
  return (
    <p className="text-left leading-6 xl:text-[1rem] font-bold text-sm">
      {children}
    </p>
  );
};
export { Heading, Text };
