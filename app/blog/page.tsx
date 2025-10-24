import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

export default function BlogList() {
  return (
    <main>
      {/* --- 1. HERO SECTION (Unchanged) --- */}
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
          {/* Hero Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="flex flex-col md:flex-row gap-3">
              <label htmlFor="email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex-grow p-3 border rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- 2. POSTS GRID --- */}
      <section className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <div
              key={post.slug}
              // --- CHANGE 1: Added background color and shadow ---
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
                    // --- Removed margin-bottom and rounded-md from image ---
                    className="w-full h-52 object-cover hover:opacity-90 transition-opacity"
                  />
                </Link>
              )}

              {/* Post Content */}
              {/* --- CHANGE 2: Added padding to content --- */}
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