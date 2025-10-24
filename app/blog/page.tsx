
import Link from "next/link";

const posts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    excerpt: "This is a short excerpt of my first blog post. More to come!",
  },
  {
    slug: "second-post",
    title: "Second Post is the Best",
    excerpt: "This is the second post, and it is even better than the first one.",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
