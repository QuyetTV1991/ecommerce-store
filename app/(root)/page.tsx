import Image from "next/image";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <section className="container mx-auto p-4 lg:px-16">
      <Navbar />
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
