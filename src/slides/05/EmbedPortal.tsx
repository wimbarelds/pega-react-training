import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function EmbedPortal() {
  return (
    <Prose center>
      <h1>Embed Portal</h1>
      <ul className="text-2xl">
        <li>Vergelijkbaar met SDK Portal, maar...</li>
        <li>Pega rendert alleen de case-flow can de pagina</li>
      </ul>
      <Collapse
        title="Voorbeeld pagina"
        className="not-open:mb-4 open:fixed open:inset-0 open:z-10"
      >
        <img
          src="example-page-embed.png"
          alt=""
          style={{
            width: 'calc(100vw)',
            height: 'calc(100vh - 40px)',
            objectFit: 'contain',
          }}
        />
      </Collapse>

      <h2>En de rest van de pagina?</h2>
      <p>De rest van de pagina zou dan statisch, of met hulp van een CMS worden gerenderd.</p>

      <h2>Wanneer is dat goed?</h2>
      <ul className="compact-list">
        <li>Als jouw portaal veel content heeft</li>
        <li>En vooral als jouw content regelmatig verandert</li>
      </ul>

      <h2>Nadelen van Embed Portal</h2>
      <p>Dit is de minst volwassen oplossing.</p>
    </Prose>
  );
}
