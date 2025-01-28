import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface campProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

function Campsite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: campProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="bold-18 text-white">{title}</h1>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 ">
            {PEOPLE_URL.map((data, index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={`${index}`}
                src={`${data}`}
                alt="pic"
                height={52}
                width={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

function Camp() {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:py-20 mb-10 xl:mb-20">
      <div className="flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[640px] border-2 border-red-400 overflow-x-auto">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
    </section>
  );
}

export default Camp;
