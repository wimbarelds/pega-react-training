/*
# Soorten Pega React Apps

- Custom Constellation Portal
- Custom SDK Portal
- Custom Embed Portal

Screenshot van 1 scherm

Excalidraw met 3 hierarchy bomen, "app" laag, "pega-sdk-component-bridge" laag, "sdk-component" nodes

*/

import { Prose } from '../../shared/Prose';

export function Soorten() {
  return (
    <Prose center>
      <h1>Soorten Pega + React Portals</h1>
      <ul className="text-2xl">
        <li>Constellation Portal</li>
        <li>
          <strong>SDK Portal</strong>
        </li>
        <li>Embed Portal</li>
      </ul>

      <p className="text-xl font-bold">⚠️ Deze training focust op de SDK Portal optie.</p>

      <h2>Daarbij horen ook specifieke componenten</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Constellation Portal</th>
            <th>SDK Portal</th>
            <th>Embed Portal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Custom Constellation</th>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <th>Custom SDK</th>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Override SDK</th>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>
    </Prose>
  );
}
