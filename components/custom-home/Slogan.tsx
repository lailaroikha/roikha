import Image from 'next/image'; // Assuming you are using Next.js for image optimization
import slogan1 from '@/public/homepage/bg-hero.jpg'; // Adjust the path to your image

const Slogan = () => {
  return (
    <div className="mt-20 mx-auto h-screen w-full">
      <div className="relative w-full h-full">
        <div className="hero" style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image className='opacity-90'
            src={slogan1} 
            alt="Hero Image" 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ zIndex: -1 }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '48px' , position: 'absolute', top: '240px', left: '20px', color: 'white', zIndex: 1 }}>
           <p>Here For You.</p>
           <p>A smarter way to study.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;