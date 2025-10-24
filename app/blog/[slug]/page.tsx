
import { notFound } from "next/navigation";
import { posts } from "../posts";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-5xl mb-2">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
            <div className="flex items-center">
              <Avatar className="h-9 w-9 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt={post.author} />
                <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        </header>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-lg mb-8 aspect-[16/9] object-cover"
        />

        <div className="space-y-6 text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
  );
}
