'use client';

export default function AboutPage() {
    return (
        <div
            id="about"
            className="min-h-screen bg-black flex items-center justify-center gap-16 px-16 py-8 font-serif"
        >

            <div className="flex-shrink-0">
                <img
                    src="/Siblings.jpeg"
                    alt="Jason Tavener"
                    className="h-96 w-auto object-contain rounded-lg"
                />
            </div>

            <div className="max-w-xl text-center">
                <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>

                <p className="text-lg mb-4 text-white">
                    Hello! I'm Jason Tavener, a senior at Alvernia University pursuing a degree in Digital Media Marketing. 
                    I have a passion for design and technology where I have experience designing and developing 
                    visually appealing, functional, user friendly websites.
                </p>
                <p className="text-lg text-white">
                    In my free time, I enjoy snowboarding and playing video games professionally. 
                    I'm always eager to learn new skills and take on new challenges in the evolving field of digital media.
                </p>
            </div>
        </div>
    );
}