import NavMenu from "./components/navMenu/navMenu";
import InfoSection from "./components/InfoSections/infoSection";
import Form from "./components/Form/form";
import Cards from "./components/Cards/cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavMenu/>
      <InfoSection/>
      <Form/>
      <Cards/>
    </main>
  );
}