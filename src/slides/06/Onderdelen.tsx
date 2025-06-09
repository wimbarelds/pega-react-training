import { ImagePreview } from '../../shared/ImagePreview';
import { Prose } from '../../shared/Prose';

export function Onderdelen() {
  return (
    <Prose center>
      <h1>Onderdelen van een component</h1>
      <ImagePreview src="onderdelen.png" />
      <h2>Hoe dat weer samen komt</h2>
      <ImagePreview src="properties.png" />
    </Prose>
  );
}
