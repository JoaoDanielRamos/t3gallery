import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

// every time there are changes to the database, this will be updated on the next page load
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

async function Images() {
  const images = await getMyImages();

  return (
    <div className="items flex flex-wrap">
      {images.map((image) => (
        <div className="w-1/2 p-4" key={image.id}>
          <img src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
  );
}
