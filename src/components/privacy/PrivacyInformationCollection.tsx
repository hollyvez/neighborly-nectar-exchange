import React from 'react';

export const PrivacyInformationCollection = () => {
  return (
    <div className="prose prose-sm dark:prose-invert">
      <h2 className="text-xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
      
      <h3 className="text-lg font-medium mt-4 mb-3">2.1 Information You Provide</h3>
      <p className="mb-2">We collect information that you voluntarily provide, including:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Account information (email address, username, password)</li>
        <li>Profile information</li>
        <li>Physical location data (address and neighborhood)</li>
        <li>Transaction and trading history</li>
        <li>Communications with other users</li>
        <li>Customer service communications</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-3">2.2 Information Automatically Collected</h3>
      <p className="mb-2">When you use our Platform, we automatically collect:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Device information (IP address, browser type, device type)</li>
        <li>Usage data (pages visited, time spent, clicks)</li>
        <li>Location data (based on IP address or GPS, if enabled)</li>
        <li>Log data</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-3">2.3 Analytics and Tracking</h3>
      <p className="mb-2">We use third-party analytics services including:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Google Analytics</li>
        <li>Hotjar</li>
      </ul>
      <p className="mb-4">These services may collect information about your use of the Platform through cookies and similar technologies.</p>
    </div>
  );
};