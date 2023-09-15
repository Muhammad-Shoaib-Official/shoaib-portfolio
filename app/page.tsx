import { About, Contact, Header, Portfolio, Resume, Services, Skills, Testimonial } from "./components/export";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Resume />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  )
}
