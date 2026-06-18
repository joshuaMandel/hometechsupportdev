export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-10 border-b border-gray-200 pb-6">
      <h1 className="text-3xl sm:text-4xl mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
