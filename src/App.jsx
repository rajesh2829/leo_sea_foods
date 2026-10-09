import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SeafoodSection from './components/SeafoodSection';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SeafoodSection />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
