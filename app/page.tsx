import { THEME } from "./lib/constants";
import {
  Hero,
  VideoSection,
  Features,
  Pricing,
  FaqSection,
  Reviews,
  Contact,
  OrderForm,
  Footer,
} from "./components/landing";

export default function Home() {
  return (
    <div className="min-h-screen font-body text-white" style={{ backgroundColor: THEME.pink }}>
      <Hero />
      <VideoSection />
      <Features />
      <Pricing />
      <FaqSection />
      <Reviews />
      <Contact />
      <OrderForm />
      <Footer />
    </div>
  );
}
