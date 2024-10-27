export default function Home() {
  return (
    <main className="">
      <div className="bg-[url(/logos_bg.png)] flex flex-col-reverse md:flex-col bg-cover -mt-32 pt-32 pb-20">
        <div className="md:mt-10">
          <div className="flex justify-center">
            <h1 className={`relative md:leading-[3rem] text-center font-semibold text-2xl md:text-[2rem] md:w-1/3`}>
              Discover and <span className="text-Fire">Collaborate</span> with Local Creators & Brands
              <img className="absolute hidden md:block left-1/2 top-1/3 mt-2 w-36" src="/icons/paths.svg" alt="" />
            </h1>
          </div>
          <div className="flex justify-center gap-4 my-10">
            <button className="font-semibold py-3 px-8 rounded-md hover:scale-105 bg-blue-primary">I'm a creator</button>
            <button className="font-semibold py-3 px-8 rounded-md hover:scale-105 bg-white text-blue-primary">I'm a brand</button>
          </div>
        </div>
        <iframe src="https://player.vimeo.com/video/945638699?h=9b7d16740e" className="md:w-3/4 mx-auto my-10 md:h-96" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p className="h-[70vh] w-full flex items-center justify-center">Home page</p>
    </main>
  );
}
