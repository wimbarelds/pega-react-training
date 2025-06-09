import { create } from 'zustand';

import type { Slide, Slides } from './types';
import { Welkom } from './slides/01/Welkom';
import { Agenda } from './slides/02/Agenda';
import { Quiz } from './slides/03/Quiz';
import { JsxExplanation } from './slides/03/JSX';
import { HtmlElements } from './slides/03/HtmlElements';
import { Componenten } from './slides/03/Componenten';
import { TypeScriptCheck } from './slides/03/Typescript';
import { Hooks } from './slides/03/Hooks';
import { CustomHooks } from './slides/03/CustomHooks';
import { LoadingData } from './slides/03/LoadingData';
import { Props } from './slides/03/Props';
import { MoreJsx } from './slides/03/MoreJsx';
import { Waarom } from './slides/04/Waarom';
import { WaaromNormaal } from './slides/04/Normaal';
import { WaaromPega } from './slides/04/Pega';
import { Soorten } from './slides/05/Soorten';
import { ConstellationPortal } from './slides/05/ConstellationPortal';
import { SdkPortal } from './slides/05/SdkPortal';
import { EmbedPortal } from './slides/05/EmbedPortal';
import { VergelijkingsTabel } from './slides/05/VergelijkingsTabel';
import { SoortenComponenten1 } from './slides/06/SoortenComponenten1';
import { Onderdelen } from './slides/06/Onderdelen';
import { SoortenComponenten2 } from './slides/06/SoortenComponenten2';
import { PegaLibraries } from './slides/07/PegaLibraries';
import { ComponentMaken } from './slides/08/ComponentenMaken';
import { ConstellationAPI } from './slides/09/ConstellationAPI';
import { OverigeTools } from './slides/10/OverigeTools';

const slides: Slides = [
  [{ preview: 'Welkom', view: Welkom }],
  [{ preview: 'Agenda', view: Agenda }],
  [
    { preview: 'Quiz', view: Quiz },
    { preview: 'HTML', view: HtmlElements },
    { preview: 'JSX', view: JsxExplanation },
    { preview: 'Componenten', view: Componenten },
    { preview: 'Typescript', view: TypeScriptCheck },
    { preview: 'Hooks', view: Hooks },
    { preview: 'Data ophalen', view: LoadingData },
    { preview: 'Custom Hooks', view: CustomHooks },
    { preview: 'Props', view: Props },
    { preview: 'More JSX', view: MoreJsx },
  ],
  [
    { preview: 'Waarom', view: Waarom },
    { preview: '"Normaal"', view: WaaromNormaal },
    { preview: 'Pega', view: WaaromPega },
  ],
  [
    { preview: 'Soorten Portals', view: Soorten },
    { preview: 'Constellation', view: ConstellationPortal },
    { preview: 'SDK', view: SdkPortal },
    { preview: 'Embed', view: EmbedPortal },
    { preview: 'Overzicht', view: VergelijkingsTabel },
  ],
  [
    { preview: 'Soorten componenten', view: SoortenComponenten1 },
    { preview: 'Onderdelen', view: Onderdelen },
    { preview: 'Soorten v2', view: SoortenComponenten2 },
  ],
  [{ preview: `Pega's libraries`, view: PegaLibraries }],
  [{ preview: 'Component maken', view: ComponentMaken }],
  [{ preview: 'Constellation API', view: ConstellationAPI }],
  [{ preview: 'Overig', view: OverigeTools }],
];

const firstSlide = slides[0][0];
const lastSlide = slides.at(-1)!.at(-1)!;

type SetSlideFn = (prev: Slide) => Slide;
interface SlideStore {
  slide: Slide;
  setSlide: (newSlide: Slide | SetSlideFn) => void;
}

const useStore = create<SlideStore>((set) => ({
  slide: firstSlide,
  setSlide: (newSlide) => {
    if (typeof newSlide !== 'function') return set({ slide: newSlide });
    return set((prev) => ({ slide: newSlide(prev.slide) }));
  },
}));

function changeSlide(current: Slide, diff: 1 | -1) {
  const topicIndex = slides.findIndex((topic) => topic.includes(current));
  const topic = slides[topicIndex];
  if (topicIndex === -1 || !topic) return current;
  const slideIndex = topic.indexOf(current);
  if (slideIndex === -1) return current;

  const newSlideIndex = slideIndex + diff;
  if (newSlideIndex >= 0 && newSlideIndex < topic.length) return topic[newSlideIndex];
  const newTopicIndex = newSlideIndex === -1 ? topicIndex - 1 : topicIndex + 1;
  if (newTopicIndex < 0 || newTopicIndex >= slides.length) return current;

  if (newTopicIndex > topicIndex) return slides[newTopicIndex][0];
  return slides[newTopicIndex].at(-1)!;
}

export const useSlide = () => useStore((state) => state.slide);
export const useSetSlide = () => useStore((state) => state.setSlide);

export const useSlideNav = () => {
  const setSlide = useSetSlide();
  const nextSlide = () => setSlide((prev) => changeSlide(prev, 1));
  const prevSlide = () => setSlide((prev) => changeSlide(prev, -1));
  return { nextSlide, prevSlide };
};

export const useHasPrevSlide = () => useStore(({ slide }) => slide !== firstSlide);
export const useHasNextSlide = () => useStore(({ slide }) => slide !== lastSlide);

export const useSlides = () => slides;
