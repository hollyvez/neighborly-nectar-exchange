export const ProblemSolving = () => {
  return (
    <section className="bg-yellow-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Problem Solving</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">What if I'm not happy with how a trade went?</h3>
          <p className="mb-4">We encourage open, friendly communication to resolve any issues:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Start with a conversation</strong>: Reach out to your trading partner directly through our platform. Often, a friendly chat can resolve misunderstandings.</li>
            <li><strong>Be specific</strong>: Clearly explain what didn't meet your expectations.</li>
            <li><strong>Suggest solutions</strong>: Have ideas in mind for how to make things right.</li>
            <li><strong>Stay neighborly</strong>: Remember, we're all part of the same community.</li>
            <li><strong>Contact support</strong>: If you can't reach a resolution, our support team is here to help at support@thenext.community.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">How can I ensure safe trades?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Meeting in public places</li>
            <li>Bringing a friend for larger trades</li>
            <li>Checking items carefully before completing the trade</li>
            <li>Trusting your instincts</li>
            <li>Keeping communication within the platform</li>
          </ul>
        </div>
      </div>
    </section>
  );
};