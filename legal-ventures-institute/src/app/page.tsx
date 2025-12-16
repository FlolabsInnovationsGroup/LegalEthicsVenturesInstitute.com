import BuildAfter from "@/components/sections/BuildAfter";
import DoYou from "@/components/sections/DoYou";
import Hero from "@/components/sections/Hero";
import Maze from "@/components/sections/Maze";
import Offerings from "@/components/sections/Offerings";
import Playground from "@/components/sections/Playground";
import WeAre from "@/components/sections/WeAre";
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <WeAre />
      <Maze />
      <BuildAfter />
      <Offerings />
      <Playground />
      <DoYou />
      <footer style={{ padding: "48px 0", borderTop: "1px solid var(--line)" }}>
        <div className="container" style={{ color: "var(--muted2)", fontSize: 14 }}>
          © {new Date().getFullYear()} Legal &amp; Ethics Ventures Institute
        </div>
      </footer>
    </>
  );
}
