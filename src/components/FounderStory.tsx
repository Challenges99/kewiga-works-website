'use client';

import { useEffect, useId, useRef, useState } from 'react';

const VISIBLE_LINES = 6;

/**
 * The founder statement, shortened to the first 6 lines with a Read more / Show less button.
 * The full text is always in the page (search engines and screen readers get all of it).
 */
export function FounderStory({ paragraphs }: { paragraphs: string[] }) {
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [heights, setHeights] = useState<{ closed: number; full: number } | null>(null);

  // Measure 6 lines of the first paragraph and the full height; re-measure when the width changes.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      const first = el.querySelector('p');
      const lh = first ? parseFloat(getComputedStyle(first).lineHeight) : 28;
      const next = { closed: Math.round(lh * VISIBLE_LINES), full: el.scrollHeight };
      // The box resizes while it animates; only update when the real measurements change.
      setHeights((h) => (h && h.closed === next.closed && h.full === next.full ? h : next));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const toggle = () => {
    if (open) {
      // When closing, bring the start of the statement back into view if it has scrolled off.
      const top = box.current?.getBoundingClientRect().top ?? 0;
      if (top < 0) box.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen((o) => !o);
  };

  const style = heights ? { maxHeight: open ? heights.full : heights.closed } : undefined;

  return (
    <>
      <div ref={box} id={id} className={'founder-story' + (heights ? ' is-clamped' : '') + (open ? ' is-open' : '')} style={style}>
        {paragraphs.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
      </div>
      {heights && heights.full > heights.closed + 4 && (
        <button type="button" className="read-more" aria-expanded={open} aria-controls={id} onClick={toggle}>
          {open ? 'Show less' : 'Read more'}
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      )}
    </>
  );
}
