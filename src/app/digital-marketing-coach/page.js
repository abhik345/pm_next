"use client";
import Coachcta from "../../components/Coachcta";
import CoachingBanner from "../../components/CoachingBanner";
import DiscoverCoaching from "../../components/DiscoverCoaching";
import HowtoWork from "../../components/HowtoWork";
import InfluentialPart from "../../components/InfluentialPart";
import InspirePart from "../../components/InspirePart";
import Pricing from "../../components/Pricing";
import Question from "../../components/Question";
import SuccessfullCoach from "../../components/SuccessfullCoach";
import TrendingPart from "../../components/TrendingPart";
import UnlockPower from "../../components/UnlockPower";
import WhatWillDoPart from "../../components/WhatWillDoPart";
import Newsletter from "@/components/Newsletter";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading.jsx";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <section className="coach_section mb-0">
          <CoachingBanner />
          <SuccessfullCoach />
          <TrendingPart />
          <UnlockPower />
          <DiscoverCoaching />
          <WhatWillDoPart />
          <Coachcta />
          <HowtoWork />
          <InfluentialPart />
          <Pricing />
          <Question />
          <InspirePart />
          <Newsletter />
        </section>
      )}
    </>
  );
};

export default Page;
