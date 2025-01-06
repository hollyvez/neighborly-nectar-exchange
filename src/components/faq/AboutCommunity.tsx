export const AboutCommunity = () => {
  return (
    <section className="bg-purple-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">About Our Community</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Can I join a neighborhood that I don't live in?</h3>
          <p>
            Currently, we're focused on building strong, local communities where neighbors can connect and trade with the people who live nearby. While we can't offer access to other neighborhoods right now, we'd love to hear why you're interested in joining a specific neighborhood! Your feedback helps us understand how to better serve our communities in the future. Feel free to email us at{" "}
            <a href="mailto:support@thenext.community" className="text-blue-600 hover:underline">
              support@thenext.community
            </a>
            {" "}with your thoughts.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Why would I choose TheNext over ordering from Amazon?</h3>
          <p className="mb-4">Great question! While Amazon offers convenience, TheNext offers something different and equally valuable:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Real Human Connections</strong>: Every trade is an opportunity to meet a neighbor, share stories, and build lasting relationships. No algorithm can replace the warmth of community!</li>
            <li><strong>Environmental Impact</strong>: Local trading means fewer delivery trucks, less packaging waste, and giving existing items a second life instead of buying new.</li>
            <li><strong>Community Strength</strong>: When you trade locally, you're helping build a resilient neighborhood where people know and support each other.</li>
            <li><strong>Unique Items & Skills</strong>: Find one-of-a-kind items, homegrown produce, and neighbor skills that you simply can't order online.</li>
            <li><strong>Local Economy</strong>: By trading locally, you're helping create a stronger, more sustainable local economy.</li>
          </ul>
          <p className="mt-4">Remember, while Amazon delivers packages, TheNext delivers connections, community, and a more sustainable future!</p>
        </div>
      </div>
    </section>
  );
};