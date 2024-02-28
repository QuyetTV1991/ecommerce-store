import Image from "next/image";
import FilterBar from "../components/shared/FilterBar";

export default function Home() {
  return (
    <section className="">
      <FilterBar />
      <section>Main Section</section>
      <section>Sale Section</section>
      <section>Category Section</section>
      <section>Inquiry Section</section>
      <section>Recommend Section</section>
      <section>Services Section</section>
      <section>Country Section</section>
    </section>
  );
}
