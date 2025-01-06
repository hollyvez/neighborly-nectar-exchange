export const EnvironmentalImpact = () => {
  return (
    <section className="bg-emerald-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Environmental Impact</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">How does trading help the environment?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduces packaging waste</li>
            <li>Decreases transportation emissions</li>
            <li>Extends the life of existing items</li>
            <li>Reduces demand for new manufacturing</li>
            <li>Promotes sustainable consumption habits</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Can I see my environmental impact?</h3>
          <p>We're working on features to show you how your trading activity helps the environment. Stay tuned for updates!</p>
        </div>
      </div>
    </section>
  );
};