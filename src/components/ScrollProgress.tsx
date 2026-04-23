import useScrollProgress from '@/hooks/useScrollProgress';

const ScrollProgress = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <>
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default ScrollProgress;
