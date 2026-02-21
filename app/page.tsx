import {
  Hero,
  Features,
  Contact,
  OrderForm,
  Footer,
} from "./components/landing";

export default function Home() {
  return (
    <div className="min-h-screen font-body text-[var(--foreground)] bg-[var(--background)]">
      <Hero />
      <Features />
      <Contact />
      <Features extended />
      <OrderForm />
      <Footer />
    </div>
  );
}
