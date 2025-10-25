"use client"; 

import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";
import { useState } from "react"; 

// IMPORTANT: Ensure this is the correct, deployed Web App URL for your subscription script.
const SUBSCRIPTION_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwo9LrDST6fm8un0XJkSXLeB4kfEz7O9XV7lbYEZpCNSgmP4nbclyYPT7F0_CSb-Y7uqw/exec";

export default function BlogList() {
  // State to manage the form input and feedback
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Function to handle form submission via fetch (AJAX)
  const handleSubscribeSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from opening a new tab
    setLoading(true);
    setMessage('');

    try {
      // Format data as application/x-www-form-urlencoded, which the Apps Script expects
      const formData = new URLSearchParams();
      formData.append('email', email); 

      const response = await fetch(SUBSCRIPTION_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // Your Apps Script returns plain text like "Success! You are now subscribed..."
      const resultText = await response.text();

      // Check for the success phrase
      if (resultText.includes("Success!")) {
        setMessage("Success! You are now subscribed.");
        setEmail(''); // Clear the input on success
      } else {
        // Display the error message returned by the script or a generic message
        setMessage(`❌ Error: ${resultText || "Subscription failed. Please check the Apps Script logs."}`);
      }

    } catch (error) {
      setMessage("❌ An unexpected network error occurred.");
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main>
      {/* --- 1. HERO SECTION (SUBSCRIPTION FORM) --- */}
      <section
        className="rounded-lg"
        style={{ backgroundColor: "#f7e8dc" }}
      >
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
          {/* Hero Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Blog
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>
          </div>
          {/* Hero Form - USES CLIENT-SIDE SUBMISSION */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form 
              // Use the client-side handler to prevent new tab opening
              onSubmit={handleSubscribeSubmit}
              className="flex flex-col md:flex-row gap-3"
            >
              <label htmlFor="email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="flex-grow p-3 border rounded-md text-gray-900"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading} // Disable during submission
                className="bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-black/60 transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
            {/* Display Submission Message */}
            {message && (
              <p className={`mt-3 text-sm ${message.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --- 2. POSTS GRID (Unchanged) --- */}
      <section className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <div
              key={post.slug}
              className="flex flex-col rounded-lg overflow-hidden"
              style={{ backgroundColor: "" }}
            >
              {/* Post Image */}
              {post.image && (
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover hover:opacity-90 transition-opacity"
                  />
                </Link>
              )}

              {/* Post Content */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  {post.author} • {post.date}
                </p>
                <h2 className="text-2xl font-semibold mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className=" transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Post Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}