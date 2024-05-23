import Image from 'next/image';
import icon1 from '@/public/homepage/icons_3.png';
import icon2 from '@/public/homepage/icons_6.png';
import icon3 from '@/public/homepage/icons_7.png';
import centerImage from '@/public/homepage/solution1.webp';
import centerImage2 from '@/public/homepage/freecalm.webp';

const Product = () => {
    return (
        <section className="relative flex flex-col items-center mt-8">
            <div className="flex flex-col md:flex-row justify-center mt-8">
                <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
                    <Image src={icon1} alt="icon1" />
                    <p className="font-bold mt-1 text-black">Support</p>
                </div>
                <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
                    <Image src={icon2} alt="icon2" />
                    <p className="font-bold mt-1 text-black">Resourch</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={icon3} alt="icon3" />
                    <p className="font-bold mt-1 text-black">Catalog</p>
                </div>
            </div>
            <div className="mt-10 mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-3xl font-bold mb-4">Powered by 100+ million expert solutions</h2>
              <p className="text-xl text-gray-600">Tackle tough assignments with confidence. Our library of study support tools has you covered with millions of solutions designed to get you unstuck and on the right track.</p>
              <button className="mt-2 px-4 py-2 bg-blue-800 text-white font-bold rounded hover:bg-blue-700">
                Join now
              </button>
              </div> 
        </section>
    );
}

export default Product;
