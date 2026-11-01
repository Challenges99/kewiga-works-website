/** Heading block at the top of inner pages. */
export function PageHero({ kicker, title, children, center = false }: {
  kicker: string; title: React.ReactNode; children?: React.ReactNode; center?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className={'wrap section-head' + (center ? ' center' : '')}>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
