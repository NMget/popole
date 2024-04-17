import { Spacing } from "./Spacing";
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <Status />
      <Spacing size="sm" />
      <Skills />
    </main>
  );
}
