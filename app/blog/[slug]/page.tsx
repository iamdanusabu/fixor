import { notFound } from "next/navigation";
import { posts } from "../posts";
import Image from "next/image";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      
      <Image 
        src={post.image} 
        alt={post.title} 
        width={1200}
        height={800}
        className="rounded mb-6 w-full h-auto" 
      />
      
      <div
        // --- 1. CHANGED prose-lg to prose-xl ---
        className="prose prose-2xl max-w-none [&_*]:font-['Inter']"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}