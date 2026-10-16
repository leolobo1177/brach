import React, { Component, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import TechText from './components/TechText/TechText.jsx';
import CircularCarousel from './components/CircularCarousel/CircularCarousel.jsx';
import './brach-react-bits.css';

const POSITION_WORD = { 'pt-BR': 'de', en: 'of', es: 'de' };

class AnimationBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error) { console.error('Brach animation:', error); }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

function BrachWordmark() {
  const reduced = useReducedMotion();
  return reduced ? <span className="brach-tech-fallback">BRACH</span> : (
    <TechText text="BRACH" fontFamily="Anton, sans-serif" fontWeight={400}
      fontSize={392} verticalFill={0.9} letterSpacing={0.008} color="#fff6d6" accentColor="#8fb6ff"
      reach={150} softness={0.7} dashLength={5} dashGap={3} strokeWidth={1.1}
      selection labels draggable bounce={0.3} sweep speed={0.65} specks={10}
      clickKick intro="none" />
  );
}

function BrandFallback({ items }) {
  return <ul className="brach-brands-fallback">{items.map(item => (
    <li key={item.src} style={{ background: item.cardStart }}><img src={item.src} alt={item.title} /></li>
  ))}</ul>;
}

function BrandsCarousel() {
  const [language, setLanguage] = useState(() => window.getBrachLanguage());
  const [focused, setFocused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const update = () => setLanguage(window.getBrachLanguage());
    document.addEventListener('brach:languagechange', update);
    return () => document.removeEventListener('brach:languagechange', update);
  }, []);
  const locale = window.getBrachLocale(language);
  const items = useMemo(() => window.BRACH_BRAND_MEDIA.map((item, index) => ({
    ...item, src: item.logo, title: locale.brands.items[index]?.name || item.alt,
    alt: item.alt, subtitle: locale.brands.items[index]?.tag || ''
  })), [language]);
  return <AnimationBoundary fallback={<BrandFallback items={items} />}>
    <div className="brach-circular-wrapper" onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="brach-circular-scene">
        <CircularCarousel items={items} preset="cylinder" intro="rise" cardWidth={310}
          aspectRatio={1.24} gap={32} tilt={-12} curve={0.7} perspective={1800}
          autoplay={focused || reduced ? 'off' : 'drift'} speed={9}
          momentum={0.55} depthFade={0.35} fadeColor="#080822" innerShade={0.6}
          parallax={0.15} stretch={0.15} cornerRadius={20} captions={false}
          ariaLabel={locale.brands.aria} positionWord={POSITION_WORD[language] || 'de'} />
      </div>

    </div>
  </AnimationBoundary>;
}

window.whenBrachPageReady(() => {
  const wordmark = document.querySelector('[data-tech-text]');
  if (wordmark) createRoot(wordmark).render(
    <AnimationBoundary fallback={<span className="brach-tech-fallback">BRACH</span>}><BrachWordmark /></AnimationBoundary>
  );
  const brands = document.querySelector('[data-circular-carousel]');
  if (brands) createRoot(brands).render(<BrandsCarousel />);
});
