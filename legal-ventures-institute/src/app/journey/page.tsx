import Nav from "@/components/Nav";
import DeepDive from "@/components/sections/DeepDive";
import FoundationsBuilt from "@/components/sections/FoundationsBuilt";
import GrowingCulture from "@/components/sections/GrowingCulture";
import InMotion from "@/components/sections/InMotion";
import InitiativesNumbers from "@/components/sections/InitiativesNumbers";
import JoinJourney from "@/components/sections/JoinJourney";
import JourneyHero from "@/components/sections/JourneyHero";
import KeyMilestones from "@/components/sections/KeyMilestones";
import LookingAhead from "@/components/sections/LookingAhead";
import MeetTeam from "@/components/sections/MeetTeam";
import NotAll from "@/components/sections/NotAll";
import OurCompass from "@/components/sections/OurCompass";
import PathForward from "@/components/sections/PathForward";
import PlannedTimeline from "@/components/sections/PlannedTimeline";

export default function JourneyPage() {
  return (
    <>
      <Nav />
      <main>
        <JourneyHero />
        <MeetTeam />
        <OurCompass />
        <GrowingCulture />
        <InitiativesNumbers />
        <FoundationsBuilt />
        <KeyMilestones />
        <NotAll />
        <InMotion />
        <DeepDive />
        <PathForward />
        <PlannedTimeline />
        <LookingAhead />
        <JoinJourney />
      </main>
    </>
  );
}
