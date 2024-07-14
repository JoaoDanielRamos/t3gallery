import { db } from "~/server/db";

// every time there are changes to the database, this will be updated on the next page load
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/17981bb8-1ca3-449b-8c38-05b7cf30fbad-ri0xv3.jpg",
  "https://utfs.io/f/1c20eda5-ac94-4d84-ab98-2b1eaaa33d73-khd7eq.png",
  "https://utfs.io/f/06ec6c9e-47fa-4d78-a799-a5cccdd5ea99-39zaak.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} className="w-1/2 p-4" />
          </div>
        ))}
      </div>
      <p>gallery in progress</p>
    </main>
  );
}
