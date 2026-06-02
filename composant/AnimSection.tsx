'use client';
import { useScrollAnim } from '@/lib/useScrollAnim';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
}

export default function AnimSection({ children, className = '', style, threshold }: Props) {
  const ref = useScrollAnim(threshold);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
