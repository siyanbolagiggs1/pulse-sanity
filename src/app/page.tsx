import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { CampaignWall } from "@/components/wall/CampaignWall";
import { GettingStarted } from "@/components/marketing/GettingStarted";
import { WhyPulse } from "@/components/marketing/WhyPulse";

export default function Home() {
  return (
    <>
      <MarketingNav />
      <main>
        <Hero />
        <HowItWorks />
        <CampaignWall />
        <GettingStarted />
        <WhyPulse />
      </main>
      <MarketingFooter />
    </>
  );
}
