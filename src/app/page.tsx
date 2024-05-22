import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-grow">
        <div className="container py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <div className="relative max-w-[350px] w-full h-full mx-auto my-0 hover:shadow-primary shadow-[0_0_0_1px_hsl(var(--border))] text-decoration-none transition-shadow rounded-lg overflow-hidden">
                <Link className="absolute inset-0 z-10" href={'/'}></Link>
                <div className="flex flex-col text-inherit bg-background ">
                  <div className="h-[180px] relative flex bg-secondary">
                      <img src="https://api.edu.duthanhduoc.com/static/documents/3dca90310cc0484fb4f725a940a29cc9.jpg" alt="ảnh bìa khóa học" className="absolute inset-0 w-full h-full object-cover object-center text-transparent" />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h3 className="m-0 text-base leading-5 tracking-tighter font-bold">Combo 3 khóa React Next Node</h3>
                    <div className="flex gap-3 mt-3">
                      <p className="tracking-tighter font-semibold">3.080.000 ₫</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[700px] h-[700px] bg-red-300">
        <Image src='/images/image-1.jpg' width={500} height={500} alt="test image" quality={100} />
        <Image src='https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={500} height={500} alt="test image" quality={100} />
      </div> */}
    </div>
  );
}
