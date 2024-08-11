import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
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
    <div className="items flex flex-wrap justify-center">
      {images.map((image) => (
        <div className="p-4" key={image.id}>
          <Image src={image.url} alt={image.name} width={480} height={480} />
        </div>
      ))}
    </div>
  );
}
