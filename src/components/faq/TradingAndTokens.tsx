export const TradingAndTokens = () => {
  return (
    <section className="bg-green-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Trading & Tokens</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">How do tokens work?</h3>
          <p>Each month, subscribers receive a fresh allocation of tokens to use for trades. Think of tokens as a way to keep trades fair and balanced within our community.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Do tokens expire?</h3>
          <p>Tokens roll over for one month, giving you flexibility in how and when you trade. After the rollover period, they expire to encourage active participation in the community.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Can I give my tokens to someone else?</h3>
          <p>Tokens can only be transferred through actual trades on the platform. This helps maintain a fair and active trading community.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">What items can I trade?</h3>
          <p>Almost anything legal and safe can be traded! Popular items include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Homegrown produce and plants</li>
            <li>Handmade crafts</li>
            <li>Gently used household items</li>
            <li>Professional skills and time</li>
            <li>Tools and equipment</li>
            <li>Books and media</li>
          </ul>
        </div>
      </div>
    </section>
  );
};