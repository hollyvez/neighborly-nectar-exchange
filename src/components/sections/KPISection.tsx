import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  );
};

const KPICard = ({ value, suffix, label }: { value: number; suffix?: string; label: string }) => (
  <div className="text-center p-6 bg-card rounded-xl shadow-elegant hover-glow transition-smooth">
    <AnimatedCounter end={value} suffix={suffix} />
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export const KPISection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <KPICard value={308} label="Connections Made" />
          <KPICard value={5} suffix=" miles" label="Trading Radius" />
          <KPICard value={641} label="Hours of Neighborly Service" />
          <KPICard value={972} label="Items Given a Second Life" />
          <KPICard value={114} label="Community Skills Shared" />
        </div>
      </div>
    </section>
  );
};