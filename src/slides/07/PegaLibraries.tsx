import { Prose } from '../../shared/Prose';

export function PegaLibraries() {
  return (
    <Prose center className="pb-12">
      <h1>Pega's libraries</h1>
      <p>Om een Pega + React App te maken, maken we gebruik van een aantal libraries van Pega:</p>
      <ul>
        <li>
          <code>@pega/constellationjs</code> - de basis, faciliteert communicatie met de server,
          interpreteert wat de server terug stuurt.
        </li>
        <li>
          <code>@pega/react-sdk-components</code> - hierin zit een standaard set van componenten,{' '}
          <em>en</em> de bridge. De bridge zorgt er voor dat de interpretatie van constellationjs
          wordt omgezet naar React componenten
        </li>
        <li>
          <code>@pega/dx-component-builder-sdk</code> - Utilities voor het maken van nieuwe
          componenten en deze te publiceren naar de Pega Infinity server.
        </li>
        <li className="text-gray-400">@pega/react-sdk-overrides</li>
        <li className="text-gray-400">@pega/auth</li>
        <li className="text-gray-400">@pega/pcore-pconnect-typedefs</li>
      </ul>
    </Prose>
  );
}
