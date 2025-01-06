export const AccountManagement = () => {
  return (
    <section className="bg-red-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Account Management</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">How do I pause my subscription?</h3>
          <p>You can pause your subscription for up to two months at a time through your account settings. Your unused tokens will be waiting when you return!</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">What happens to my trades if I cancel my subscription?</h3>
          <p>Completed trades remain part of your history, but you won't be able to initiate new trades without an active subscription.</p>
        </div>
      </div>
    </section>
  );
};