import TypeAnimation from '@/components/elements/TypeAnimation'

const Hero = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="items-center text-center">
                <h1 className=" font-sans  text-7xl font-bold text-gray-900">Welcome to Kha Journey </h1>
                <h2 className="text-4xl text-black mt-4">Study Seamlessly with Kha Journey</h2>
                <p className="text-xl text-gray-700 mt-4">Solutions backed by verified experts. Specialized tools to help master your courses. Tailored to support the way you learn</p>
                <p className="text-center font-sora text-1xl font-medium lg:text-3xl">
                <TypeAnimation sequence={["Hi, Kha Journey:  Empowering Education! ", "Hi, Kha Journey: Your Homework Helper! "]} delay={3000} />
                </p>
                <h1 className="pt-1 text-5xl font-bold mt-30 text-gray-900">Study help built for how you learn</h1>

            <div className="mt-4"></div>
                <input type="text" placeholder="Enter your question" className="border border-gray-300 rounded-md px-10 py-4 mr-5" />
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-md ">Submit</button>
            </div>
        </section>
    );
    }
export default Hero;

