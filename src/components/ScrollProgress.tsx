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

      {/* Side progress indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative h-32 w-0.5 bg-border/20">
          <div 
            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-transparent transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
          <div className="absolute -right-8 text-xs text-muted-foreground font-mono">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
