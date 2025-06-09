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
export function SdkPortal() {
  return (
    <div className="min-w-3xl max-w-none my-auto self-center">
      <Prose>
        <h1>SDK Portal</h1>
        <ul className="text-2xl">
          <li>Hosting: Zelf (maar bij RDI: Via Pega)</li>
          <li>Wat betreft Custom Componenten: Veel opties</li>
          <li>Hier wel controle over</li>
          <ul>
            <li>De "App" (componenten bovenaan de boom)</li>
            <li>Override Componenten (default componenten, infra, designSystemExtension)</li>
          </ul>
        </ul>
        <h2>Wat betekent dat 'concreet'?</h2>
        <p>De onderstaande componenten-boom is op basis van dezelfde voorbeeld-pagina</p>
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

      <ComponentTree portal="sdk" />
    </div>
  );
}
