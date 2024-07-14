import { db } from "~/server/db";

// every time there are changes to the database, this will be updated on the next page load
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  console.log(images);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="items flex flex-wrap">
        {images.map((image) => (
          <div className="w-1/2 p-4" key={image.id}>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <p>gallery in progress</p>
    </main>
  );
}
