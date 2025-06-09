import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';
import { ComponentTree } from './ComponentTree';

/*
Voordelen:
- Meer volwassen componenten
- Pega regelt hosting

Nadelen:
- Minder controle (context providers)
- Minder inzicht (closed source)
- Minder kansen (override componenten)
*/
export function ConstellationPortal() {
  return (
    <div className="min-w-3xl max-w-none my-auto self-center">
      <Prose>
        <h1>Constellation Portal</h1>
        <ul className="text-2xl">
          <li>Hosting: Pega</li>
          <li>De standaard-componenten zijn wel meer volwassen</li>
          <li>Wat betreft Custom Componenten: Alleen Custom Constellation componenten</li>
          <li>Dus geen controle over</li>
          <ul>
            <li>De "App" (componenten bovenaan de boom)</li>
            <li>Override Componenten (default componenten, infra, designSystemExtension)</li>
          </ul>
        </ul>
        <h2>Wat betekent dat 'concreet'?</h2>
        <p>De onderstaande componenten-boom is op basis van de voorbeeld-pagina</p>
      </Prose>
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

      <ComponentTree portal="constellation" />
      <Prose className="py-10 text-center">
        <h2>Wat een enorme lijst componenten!</h2>
      </Prose>
    </div>
  );
}
