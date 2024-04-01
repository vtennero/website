"use client";
import Image from "next/image";

const ProjectPageComponent = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/projects/hackathon2023.png"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg text-justify">HelloWorld</p>
          <div className="flex flex-row justify-start mt-8 border-t border-coolGray-200">
            hello woerld hello woerld hello woerld hello woerld hello woerld
            hello woerld hello woerld hello woerld hello woerld hello woerld
            hello woerld hello woerld hello woerld hello woerld hello woerld
          </div>
          <div className="mt-8">hello world 2</div>
        </div>
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
          <source
            src="/images/projects/hackathondemovideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
export default ProjectPageComponent;
