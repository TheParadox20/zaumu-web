export default function Home() {
  return (
    <main className="">
      <div className="bg-[url(/logos_bg.png)] bg-cover -mt-32">
        <div className="pt-32 pb-20">
          <h1 className={``}>
            Discover and <span className="text-Fire">collaborate</span> with local creators & Brands
          </h1>
          <div className="flex justify-center gap-4">
            <button className="">I'm a creator</button>
            <button className="">I'm a brand</button>
          </div>
          <iframe src="https://player.vimeo.com/video/945638699?h=9b7d16740e" className="w-2/3 mx-auto h-96" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <p className="h-[70vh] w-full flex items-center justify-center">Home page</p>
    </main>
  );
}
