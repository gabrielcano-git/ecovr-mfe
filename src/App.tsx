// import DigitalTransformation from './components/DigitalTransformation/DigitalTransformation';
import Solutions from './components/Solutions/SolutionsSection';
import TestimonialsSection from './components/Testemonials/Testemonials';
import ContactForm from './components/ContactForm/ContactForm';
import FeaturedUpdates from './components/FeatureUpdates/FeaturedUpdates';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import SuperPortalVrSection from './components/SuperPortalVrSection/SuperPortalVrSection';
import SuperApp from './components/SuperApp/SuperApp';
import CustomerCarousel from './components/CustomerCarousel/CustomerCarousel';

const App: React.FC = () => {
  return (
    <>
      {/* Header */}

      {/* Hero Banner */}
      {/* <HeroBanner /> */}

      {/* Tudo que você precisa saber */}

      {/* Sua empresa tem um problema? */}
      {/* TODO: Ajustar esse componente cagado */}
      {/* <DigitalTransformation /> */}

      {/* Soluções sob medida para quem quer mais praticidade na gestão. */}
      <Solutions />

      {/* Super Portal Vr*/}
      {/* TODO: Setinha no desktop */}
      <SuperPortalVrSection />

      {/* Super App */}
      <SuperApp />

      {/* Quem usa aprova */}
      <TestimonialsSection />

      {/* Carrossel de imagens */}
      <CustomerCarousel />

      {/* Entre em contato com a gente! */}
      <ContactForm />

      {/* Fique por dentro das novidades! */}
      <FeaturedUpdates />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      {/* TODO: Logos e Setinhas */}
      <Footer />
    </>
  );
}

export default App;
