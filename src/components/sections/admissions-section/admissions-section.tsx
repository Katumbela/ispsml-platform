import { useRef, useState, useEffect } from 'react';
import FixedImage from './FixedImage';
import ContentSections from './ContentSections';

export function AdmissionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const lastSection = sectionRef.current.querySelector('section:last-of-type');
        const isTopInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

        if (lastSection) {
          const lastSectionRect = lastSection.getBoundingClientRect();
          const lastSectionInView = lastSectionRect.top <= window.innerHeight / 2;

          // Lógica para definir a fixação da imagem
          if (isTopInView && !lastSectionInView) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-[300vh]">
      <div className="relative flex h-screen">
        <FixedImage isFixed={isFixed} />
        <div className={`flex-2 p-5 ${isFixed ? 'ml-[33%]' : ''}`}>
          <ContentSections />
        </div>
      </div>
    </div>
  );
}
