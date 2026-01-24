const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
