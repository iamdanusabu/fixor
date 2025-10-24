// app/data/blog/first-post.ts
export default {
    slug: "first-post",
    title: "My  First Post",
    excerpt: "This is a short summary of my first post...",
    date: "October 24, 2025",
    
    // --- ADD THESE NEW FIELDS ---
    author: "Jane Doe",
    image: "/images/blog/my-first-post-image.jpg", // Add a path to an image
    tags: ["Design", "Research"] // Add an array of tags
  }
  
  // NOTE: You'll need to add images to your `public/images/blog/`
  // folder for the paths to work.