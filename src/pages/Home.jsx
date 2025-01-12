import { Carousel } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'antd';

function Home() {
  const setting = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    slidesToScroll: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className='bg-gray-200 text-white'>
        <div
          className="relative flex items-center justify-center text-center"
          style={{
            backgroundImage: 'url(/Wallpapers/deer.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

          <div className="relative z-10 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Welcome to SilkOn
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto">
              Discover the finest wallpapers to transform your space into something truly extraordinary.
            </p>
          </div>
        </div>

        <h2 className="text-3xl text-gray-800 font-bold text-center my-10">Trending Wallpapers</h2>
        <section>
          <div class="px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mb-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div class="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img src="/Wallpapers/pxfuel.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Nature</h3>
                </a>
              </div>
              <div class="col-span-2 sm:col-span-1 md:col-span-2 ">
                <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <img src="/Wallpapers/wallpy.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Car</h3>
                </a>
                <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img src="/Wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Miles Morales</h3>
                  </a>
                  <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img src="/Wallpapers/1870160.png" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 class="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Avengers</h3>
                  </a>
                </div>
              </div>
              <div class="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
                <a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img src="/Wallpapers/wallpy.png" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Abstract</h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-800 mt-4 pb-5">
          <h2 className="text-3xl font-bold text-white text-center mb-8 pt-10">Explore</h2>
          <div className="mx-[9%] my-7">
            <Carousel {...setting}>
              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">MOUNTAIN</h2>
                    <p className="mt-4">This is some text content for Card 1. You can add more information here.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>

                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/lake.jpg"
                      alt="Card 1"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg"
                      alt="Card 2"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>

                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">SPACE</h2>
                    <p className="mt-4">Explore the infinite beauty of space with stunning visuals.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">NATURE</h2>
                    <p className="mt-4">Discover breathtaking natural landscapes with our wallpaper collection.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>

                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/1162442.jpg"
                      alt="Card 1"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/wallpy.jpg"
                      alt="Card 4"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>

                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">CAR</h2>
                    <p className="mt-4">Experience the hustle and bustle of Car life with our wallpapers.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">ABSTRACT</h2>
                    <p className="mt-4">Dive into the world of abstract art with these creative and unique wallpapers.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>

                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/wallpy.png"
                      alt="Card 5"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-white p-4 rounded-lg">
                  <div className="w-1/2">
                    <img
                      src="/Wallpapers/lake.jpg"
                      alt="Card 6"
                      className="object-cover w-full h-full border-[5px] border-gray-200 rounded-3xl"
                    />
                  </div>

                  <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold">BEACH</h2>
                    <p className="mt-4">Relax and unwind with the calming beauty of beach-themed wallpapers.</p>
                    <button className="mt-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Get More</button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>


        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Wallpapers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { imgSrc: '/Wallpapers/1162442.jpg', title: 'Multiverse' },
                { imgSrc: '/Wallpapers/1545742.jpg', title: 'Space' },
                { imgSrc: '/Wallpapers/wallpy.jpg', title: 'Lamborghini' },
                { imgSrc: '/Wallpapers/pxfuel.jpg', title: 'Mountians' },
                { imgSrc: '/Wallpapers/pxfuel (1).jpg', title: 'Sunset' },
                { imgSrc: '/Wallpapers/lake.jpg', title: 'Green' },
                { imgSrc: '/Wallpapers/1870160.png', title: 'Avengers' },
                { imgSrc: '/Wallpapers/deer.png', title: 'Logo' }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={item.imgSrc}
                      alt={`Wallpaper ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />

                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 rounded-lg">
                      <button className="text-white w-10 h-10 flex items-center justify-center hover:cursor-pointer">
                        <i className="fas fa-download"></i>
                      </button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <button
            className="mt-4 px-3 py-1 rounded-md bg-gray-800 text-gray-200 font-bold mb-7">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
