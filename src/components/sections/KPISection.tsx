const KPICard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
    <div className="text-3xl font-bold text-accent-blue mb-2">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export const KPISection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <KPICard value="308" label="Connections Made" />
          <KPICard value="5 miles" label="Trading Radius" />
          <KPICard value="641" label="Hours of Neighborly Service" />
          <KPICard value="972" label="Items Given a Second Life" />
          <KPICard value="114" label="Community Skills Shared" />
        </div>
      </div>
    </section>
  );
};