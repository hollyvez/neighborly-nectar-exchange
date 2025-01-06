import React from 'react';

export const PrivacyRightsAndControls = () => {
  return (
    <div className="prose prose-sm dark:prose-invert">
      <h2 className="text-xl font-semibold mt-6 mb-4">7. Your Privacy Rights</h2>
      <h3 className="text-lg font-medium mt-4 mb-3">7.1 Access and Control</h3>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to processing of your data</li>
        <li>Request data portability</li>
        <li>Withdraw consent for data processing</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-3">7.2 Data Deletion</h3>
      <p className="mb-2">You may request to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Delete your account</li>
        <li>Be "forgotten" (complete erasure of all personal data)</li>
      </ul>
    </div>
  );
};