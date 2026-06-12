export function PullQuote() {
  return (
    <section
      className="pull-quote"
      aria-labelledby="pull-quote-heading"
    >
      <div className="shell pull-quote__inner">
        <span className="pull-quote__icon" aria-hidden>
          &ldquo;
        </span>
        <blockquote
          id="pull-quote-heading"
          className="pull-quote__text"
        >
          I believe technology should empower everyone. Whether it&apos;s
          building AI that bridges communication gaps or crafting intuitive
          interfaces — every line of code is an opportunity to make someone&apos;s
          life a little better.
        </blockquote>
        <cite className="pull-quote__cite">— My development philosophy</cite>
      </div>
    </section>
  );
}
