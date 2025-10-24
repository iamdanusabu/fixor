
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const posts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    excerpt: "This is a short excerpt of my first blog post. More to come!",
    author: "Jane Doe",
    date: "October 26, 2024",
    image: "/card1.png",
  },
  {
    slug: "second-post",
    title: "Second Post is the Best",
    excerpt: "This is the second post, and it is even better than the first one.",
    author: "John Smith",
    date: "October 27, 2024",
    image: "/card2.png",
  },
  {
    slug: "third-post",
    title: "A Third, Very Interesting Post",
    excerpt: "Exploring more topics and ideas in this post.",
    author: "Alice Johnson",
    date: "October 28, 2024",
    image: "/placeholder.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground">
          Stay informed with our latest articles and insights.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                  <span className="text-primary hover:underline">Read more &rarr;</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
