import React from "react";

function Campsite() {
  return <div>Campsite</div>;
}

function Camp() {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:py-20 mb-10 xl:mb-20">
      <div className="flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[640px] so">
        <Campsite backgroundImage="" title="" subtitle="" peopleJoined="" />
      </div>
    </section>
  );
}

export default Camp;
