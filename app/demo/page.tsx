'use client'; // Required for client-side interactivity

// NOTE: You must use the named export "Cal" when importing from @calcom/embed-react
import  Cal  from '@calcom/embed-react'; 
import React from 'react';

/**
 * This component embeds the Cal.com scheduling interface, optimized for full-screen.
 * Access this page at: /demo
 */
export default function DemoBookingPage() {
  const calLink = "nevolabs-f6qxzs/30min";

  return (
    // Main container: Use Flexbox for full-screen layout.
    // Critical Fix: Remove the padding from the outer div, which causes scroll.
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', // Critical for preventing vertical scroll
        // padding: '20px', <--- REMOVED THIS LINE
        backgroundColor: '#f9f9f9',
        fontFamily: 'Inter, sans-serif' 
      }}
    >

      {/* 🗓️ Cal.com Embed Container: Use flex: 1 to take remaining vertical space */}
      <div 
        style={{ 
          margin: '0 auto',
          maxWidth: '900px', 
          flex: 1, // Allows this container to grow and fill the space
          width: '100%',
          padding: '0 20px', // Add horizontal padding for content alignment
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Cal
          calLink={calLink}
          style={{ width: '100%', height: '100%' }} 
          config={{ 
            layout: 'month_view', 
            theme: 'light',      
          }} 
        />
      </div>

      {/* 📝 Footer Note */}
      {/* Add vertical padding back to the footer for spacing, not to the whole container */}
      <footer style={{ textAlign: 'center', padding: '10px 20px 20px', color: '#666', fontSize: '0.8em', flexShrink: 0 }}>
      </footer>
    </div>
  );
}