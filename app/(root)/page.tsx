import Image from "next/image";
import FilterBar from "../components/shared/FilterBar";
import Hero from "../components/shared/Hero";

export default function Home() {
  return (
    <section className="">
      <FilterBar />
      <div className="container mx-auto px-4 lg:px-16 py-2 bg-blue-100/50">
        <Hero />
        <section>Sale Section</section>
        <section>Category Section</section>
        <section>Inquiry Section</section>
        <section>Recommend Section</section>
        <section>Services Section</section>
        <section>Country Section</section>
      </div>
    </section>
  );
}
