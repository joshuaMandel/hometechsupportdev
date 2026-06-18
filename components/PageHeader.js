export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-12 animate-fade-up">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted max-w-3xl leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-accent" />
    </div>
  );
}
