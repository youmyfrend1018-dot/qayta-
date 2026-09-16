import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#031900] p-6 md:p-12">

   
      <div className="relative mx-auto mb-8 min-h-[650px] max-w-[1700px] overflow-hidden rounded-xl bg-[#f66b1b]">

        
        <div className="absolute right-10 top-8 text-8xl">
          🍊
        </div>

        <div className="absolute right-[35%] top-8 text-7xl">
          🍊
        </div>

        <div className="absolute right-[28%] bottom-32 text-7xl">
          🍊
        </div>

        <div className="absolute right-16 bottom-[-20px] text-[180px]">
          🥤
        </div>

      
        <div className="relative z-10 flex min-h-[650px] flex-col justify-center px-8 md:px-12 lg:w-[60%]">

          <h1 className="max-w-[800px] text-5xl font-black uppercase leading-[0.95] text-[#fff0e8] md:text-6xl lg:text-7xl">
            NEW FLAVOR ALERT!
            <br />
            INTRODUCING ORANGE BLAST
          </h1>

          <button className="mt-8 w-fit rounded-full bg-white px-10 py-5 font-black uppercase ">
            SHOP NOW
          </button>

        </div>

       
        <div className="absolute bottom-8 left-8 z-20 flex flex-wrap gap-4 md:left-12">

          <div className="flex items-center gap-3 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-white">
            <span className="text-2xl">🧠</span>
            <span className="font-semibold">
              Mental clarity
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-white">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">
              200mg caffeine
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-white">
            <span className="text-2xl">💡</span>
            <span className="font-semibold">
              Energy Release
            </span>
          </div>

        </div>

      </div>


      
      <div className="mx-auto grid max-w-[1550px] grid-cols-1 gap-8 lg:grid-cols-2">

        
        <div className="relative min-h-[730px] overflow-hidden rounded-xl bg-[#ff263d] px-8 py-12 text-center">

          <div className="absolute -left-8 -top-8 rotate-[-20deg] text-[100px]">
            🍉
          </div>

          <div className="absolute -right-8 -top-8 rotate-[20deg] text-[100px]">
            🍉
          </div>

          <h1 className="relative z-10 mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
            TRY OUT OUR
            <br />
            WATERMELON BUNDLE
          </h1>

          <p className="mt-5 text-lg font-semibold text-white">
            $44 per pack
          </p>

          <div className="mt-16 flex items-end justify-center gap-6 md:gap-14">
            <img
              className="max-h-[350px] object-contain"
              src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66b0cf0db35506ac97f1cc9c_aergerdgh.avif"
              alt="Watermelon"
            />
          </div>

          <button className="mt-16 rounded-full bg-white px-10 py-4 font-black text-black transition duration-300 hover:scale-105 hover:bg-gray-100">
            SHOP NOW
          </button>

        </div>


      
        <div className="relative min-h-[730px] overflow-hidden rounded-xl bg-[#414141] px-8 py-12 text-center">

          <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-[#d0d0d0] md:text-5xl">
            GET IT DELIVERED EVERY
            <br />
            WEEK OR MONTH
          </h1>

          <p className="mt-5 text-lg font-semibold text-white">
            Starting at $33.99 per month
          </p>

          <img
            className="mx-auto mt-10 max-h-[350px] object-contain"
            src="https://cdn.prod.website-files.com/66ae6d5d335aaf4dfce34142/66afac2d0ebf6b503f58dcf9_box-cans.avif"
            alt="Box cans"
          />

          <button className="mt-24 rounded-full bg-white px-10 py-4 font-black text-black transition duration-300 hover:scale-105 hover:bg-gray-100">
            SHOP NOW
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;