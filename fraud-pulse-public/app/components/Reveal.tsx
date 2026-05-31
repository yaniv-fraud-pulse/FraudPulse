'use client';

import { useInView } from '../hooks/useInView';

type Delay = 0 | 75 | 150 | 225 | 300 | 400 | 500 | 600 | 700 | 800;

export function Reveal({
  children,
  className = '',
  delay = 0,
  animation = 'anim-fadeUp',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: Delay;
  animation?: string;
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? `${animation} delay-${delay}` : 'anim-hidden'}`}
    >
      {children}
    </Tag>
  );
}
