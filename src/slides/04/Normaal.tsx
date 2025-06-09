import Code from '../../shared/Code';
import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';
import xml from './example-react-app.xml?raw';

export function WaaromNormaal() {
  return (
    <Prose center xl>
      <h1>Hoe zien de meeste React apps er uit?</h1>
      <p>Bij de meeste React websites...</p>
      <p>Bepaalt React de structuur & hierarchy van de pagina.</p>
      <Collapse
        title="Voorbeeld pagina"
        className="not-open:mb-4 open:fixed open:inset-0 open:z-10"
      >
        <img
          src="example-page.png"
          alt=""
          style={{
            width: 'calc(100vw)',
            height: 'calc(100vh - 40px)',
            objectFit: 'contain',
          }}
        />
      </Collapse>
      <Collapse title="Voorbeeld (pseudo code)" className="mb-4">
        <Code code={xml} />
      </Collapse>
      <ul>
        <li>
          Je hebt een Layout, met daarin een aantal standaard elementen (header, navigatie, footer).
        </li>
        <li>
          Voor de primaire content heb je een <code>RouterOutlet</code> die op basis van de URL een
          specifiek component rendert.
        </li>
        <li>Dat component haalt dan van de server data op voor de pagina.</li>
        <li>
          <em>
            Het component bepaalt zelf welke data het ophaalt, en hoe die data gepresenteerd wordt.
          </em>
        </li>
        <li>De opgehaalde data wordt aan child-componenten doorgegeven.</li>
      </ul>
    </Prose>
  );
}
