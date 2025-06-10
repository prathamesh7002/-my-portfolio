import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn('py-16 md:py-24 min-h-[calc(100vh-4rem)] flex flex-col justify-center', className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
