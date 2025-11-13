'use client';

import Cal from '@calcom/embed-react';
import React from 'react';

export default function DemoBookingPage() {
  const calLink = "nevolabs-f6qxzs/30min";

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{
          margin: '20px auto',
          maxWidth: '900px',
          flex: 1,
          width: '100%',
          padding: '0 15px',
          borderRadius: '8px',
        }}
      >
        <Cal
          calLink={calLink}
          style={{ width: '100%', height: '100%' }}
          config={{
            theme: 'light',
          }}
        />
      </div>

      <footer style={{ textAlign: 'center', padding: '10px 20px 20px', color: '#666', fontSize: '0.8em', flexShrink: 0 }}>
      </footer>
    </div>
  );
}