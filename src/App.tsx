import { useSlide } from './slideStore';
import Footer from './ui/Footer';
import { Nav } from './ui/Nav';

export function App() {
  const slide = useSlide();
  const Slide = slide.view;

  return (
    <>
      <Slide />
      <Nav />
      <Footer />
    </>
  );
}
