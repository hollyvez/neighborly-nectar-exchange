export const GettingStarted = () => {
  return (
    <section className="bg-orange-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">How do I make my first trade?</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Browse available offerings in your neighborhood</li>
            <li>Contact a neighbor about an item or service</li>
            <li>Agree on the token amount</li>
            <li>Meet safely to complete the trade</li>
            <li>Mark the trade as complete</li>
            <li>Leave feedback about your experience</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tips for successful trading:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be clear about item conditions or service details</li>
            <li>Respond promptly to messages</li>
            <li>Be on time for meet-ups</li>
            <li>Keep communication friendly and respectful</li>
            <li>Start with smaller trades to build confidence</li>
          </ul>
        </div>
      </div>
    </section>
  );
};