import Image from "next/image";
export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex-1 flex flex-col'>
      <div className='flex-grow'>
        <div className='container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
          <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
            <div className='absolute inset-0 bg-zinc-900'>
              <Image src='/images/banner-3.avif' sizes='100vw' width={500} height={600} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                color: "transparent"
              }} decoding="async" alt="banner" loading="lazy" quality={100} />
              <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            </div>
            <div className='relative z-20 mt-auto'>
              <blockquote>
                <p className='text-lg'> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                <footer className='text-sm'>Authrosf suyfihb</footer>
              </blockquote>
            </div>
          </div>
          <div className='pt-10 lg:p-10 lg:pt-20'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
