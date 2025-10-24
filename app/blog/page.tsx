
import Link from "next/link";
import { posts } from "./posts";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function BlogPage() {
  const topStory = posts[0];
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-8">
        <Card className="p-6 bg-card">
          <h3 className="text-xl font-bold mb-4 font-gelica text-card-foreground">About Bits</h3>
          <p className="text-card-foreground">
            Founded in 2022, we are a team of curious builders with a decade of
            experience in fintech, open banking, and infrastructure. We have
            firsthand experience with the challenges faced by fintechs, banks,
            and regulated entities in streamlining infrastructure and data
            source integrations.
          </p>
        </Card>
        <Card className="p-6 bg-card">
          <h3 className="text-xl font-bold mb-4 font-gelica text-card-foreground">Top stories</h3>
          <Link href={`/blog/${topStory.slug}`} className="space-y-4 block">
            <Image
              src={topStory.image}
              alt={topStory.title}
              width={300}
              height={200}
              className="rounded-lg object-cover aspect-video"
            />
            <h4 className="font-bold text-lg text-card-foreground">Building bit by bit</h4>
            <p className="text-primary hover:underline font-semibold">Read the story</p>
          </Link>
        </Card>
      </div>
      <div className="md:col-span-2 space-y-8">
        <h1 className="text-5xl font-bold tracking-tighter font-gelica">Blog</h1>
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="flex items-center gap-6 group"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={120}
              className="rounded-lg object-cover aspect-video transition-transform group-hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold group-hover:underline">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
