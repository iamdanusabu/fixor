
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FirstPostPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-5xl mb-2">
            My First Blog Post
          </h1>
          <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
            <div className="flex items-center">
              <Avatar className="h-9 w-9 mr-3">
                <AvatarImage src="/placeholder-user.jpg" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p>Oct 26, 2024</p>
              </div>
            </div>
          </div>
        </header>

        <Image
          src="/card1.png"
          alt="My First Blog Post"
          width={1200}
          height={630}
          className="rounded-lg mb-8 aspect-[16/9] object-cover"
        />

        <div className="space-y-6 text-lg">
          <p>
            This is the full content of my first blog post. It's very exciting to be able to share my thoughts with the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
          </p>
          <h2 className="text-3xl font-bold pt-4">A New Section</h2>
          <p>
            Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
          </p>
        </div>
      </article>
    </div>
  );
}
