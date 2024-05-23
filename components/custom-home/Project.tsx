import Image from 'next/image';
import icon1 from '@/public/homepage/icons_3.png';
import icon2 from '@/public/homepage/icons_6.png';
import icon3 from '@/public/homepage/icons_7.png';

const Product = () => {
    return (
        <section className="relative flex flex-col items-center mt-16">
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
        </section>
    );
}

export default Product;
