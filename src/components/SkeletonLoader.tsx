type SkeletonLoaderProps = {
  height?: number;
  className?: string;
};

const SkeletonLoader = ({ height, className = '' }: SkeletonLoaderProps) => {
  return (
    <div className={`animate-pulse bg-gray-300 h-4 flex-1 ${className}`} style={{ height }}/>
  );
};

export default SkeletonLoader;
