"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Link from "next/link";

const ProjectPageComponent = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/projects/hackathon2023.png"
          width={500}
          height={500}
        ></Image>
        <video className="h-full w-full rounded-lg" controls autoPlay muted>
          <source
            src="/images/projects/hackathondemovideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            4Catalyzer LLM Hackathon
          </h2>
          <p className="text-base md:text-lg text-justify mb-2">
            By 2030, Synthetic Data will take overshadow real data in AI models.
            Synthetic data offers a unique advantage in healthcare applications
            by addressing confidentiality concerns and significantly
            accelerating the time-to-market for products.
          </p>
          <p className="text-base md:text-lg text-justify mb-2">
            I participated in a hackathon organized by 4Catalyzer, led by
            Jonathan Rothberg, a prominent figure in AI research and founder of
            Hyperfine (NASDAQ: HYPR) and Butterfly (NYSE: BFLY). The goal of
            this hackathon was to leverage Large Language Models (LLMs) to
            develop a practical and functional product for one of Rothberg's
            healthcare/biotech companies. Rothberg himself served as the judge
            for the event.
          </p>
          <p className="text-base md:text-lg text-justify mb-2">
            To begin with, we tackled a fundamental use case, focusing on
            generating synthetic data to train medical professionals in
            identifying diseases using Butterfly's ultrasound scanner.
            Specifically, our focus was on training models to generate synthetic
            images of soft tissue with cancer. The centerpiece of our efforts
            was a text-to-image system, designed to produce random images based
            on a given prompt.
          </p>
          <p className="text-base md:text-lg text-justify mb-2">
            Our technical stack included: the Breast Ultrasound Images Dataset.
            Comprising 780 images with dimensions 500*500, this dataset was
            categorized into three classes: normal, benign, and malignant.
          </p>
          <div className="text-base md:text-lg text-justify mb-2">
            <Link href="https://github.com/Aniloid2/LLM_bio_hackathon/tree/master">
              <li>Github Repository</li>
            </Link>
            <Link href="https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset">
              <li>Dataset</li>
            </Link>
            <Link href="https://huggingface.co/docs/diffusers/v0.11.0/en/training/dreambooth">
              <li>Model</li>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Jonathan_Rothberg">
              <li>Jonathan Rothberg (Wikipedia Bio)</li>
            </Link>
          </div>
          <div className="flex flex-row justify-start mt-8"></div>
          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
};
export default ProjectPageComponent;
