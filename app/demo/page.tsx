'use client'; // Required for client-side interactivity

// NOTE: You must use the named export "Cal" when importing from @calcom/embed-react
import Cal from '@calcom/embed-react';
import React from 'react';

/**
 * This component embeds the Cal.com scheduling interface, optimized for full-screen
 * and mobile responsiveness.
 * Access this page at: /demo
 */
export default function DemoBookingPage() {
  const calLink = "nevolabs-f6qxzs/30min";

  return (
    // Main container: Use Flexbox for full-screen layout.
    // CRITICAL FIX 1: Change 'height' to 'min-height' to fix mobile viewport issues.
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Use min-height to be mobile-safe
        backgroundColor: '#f9f9f9',
        fontFamily: 'Inter, sans-serif'
      }}
    >

      {/* 🗓️ Cal.com Embed Container: Use flex: 1 to take remaining vertical space */}
      <div
        style={{
          margin: '20px auto', // Add some vertical margin for breathing room
          maxWidth: '900px',
          flex: 1, // Allows this container to grow and fill the space
          width: '100%',
          padding: '0 15px', // Slightly reduced padding for mobile
          borderRadius: '8px',
          // CRITICAL FIX 3: Removed 'overflow: 'hidden'' to prevent cutting off content
        }}
      >
        <Cal
          calLink={calLink}
          style={{ width: '100%', height: '100%' }}
          config={{
            // CRITICAL FIX 2: Remove the layout property.
            // By leaving 'layout' undefined, Cal.com will AUTOMATICALLY
            // use a mobile-friendly view on small screens.
            // layout: 'month_view', <--- REMOVED THIS LINE
            theme: 'light',
          }}
        />
      </div>

      {/* 📝 Footer Note */}
      <footer style={{ textAlign: 'center', padding: '10px 20px 20px', color: '#666', fontSize: '0.8em', flexShrink: 0 }}>
        {/* You can add footer text here if needed */}
      </footer>
    </div>
  );
}