import Code from '../../shared/Code';
import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';
import baseXml from './example-pega-base.xml?raw';
import pageJson from './example-page-response.json';
import { JsonViewer } from '../../shared/JsonViewer';
import type { JsonData } from '../../types';
import componentMapTxt from './component-map.js.txt?raw';
import { BasicComponentTree } from './BasicComponentTree';

export function WaaromPega() {
  return (
    <Prose center xl className="pb-10">
      <h1>Hoe zien Pega + React apps er uit?</h1>
      <p>Bij Pega React apps bepaalt Pega de inhoud van de pagina.</p>
      <p>
        De React App zorgt voor wat config en authenticatie, en geeft de control over aan Pega's SDK
        Bridge.
      </p>
      <Code code={baseXml} />
      <Collapse title="sdk-local-component-map.js">
        <Code code={componentMapTxt} />
      </Collapse>
      <p>
        Pega heeft daarna ook zijn eigen{' '}
        <a
          href="https://github.com/pegasystems/react-sdk-components/blob/master/packages/react-sdk-components/src/sdk-pega-component-map.js"
          target="_blank"
          className="hover:text-blue-300"
        >
          Component map
        </a>
        .
      </p>
      <p>De Pega React SDK Bridge is een soort 'wrapper' om ConstellationJS heen.</p>
      <p>
        ConstellationJS communiceert met de server, en de server geeft instructies voor de opbouw
        van de hele pagina.
      </p>
      <JsonViewer data={pageJson as unknown as JsonData} />

      <p className="text-2xl text-center py-5">
        <strong>Maar onze React app krijgt geen toegang tot deze data.</strong>
      </p>
      <p>
        In plaats daarvan, gaat Pega's React SDK Bridge samen met ConstellationJS, op basis van die
        data de volledige componenten-boom renderen.
      </p>

      <Collapse title="Componenten boom" className="max-w-[calc(100vw_-_50px)]">
        <BasicComponentTree />
      </Collapse>
    </Prose>
  );
}
