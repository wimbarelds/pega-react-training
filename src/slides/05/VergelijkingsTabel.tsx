import { Prose } from '../../shared/Prose';

export function VergelijkingsTabel() {
  return (
    <Prose center className="pb-12">
      <h1>Vergelijking van soorten portalen</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Constellation</th>
            <th>Custom SDK</th>
            <th>Custom Embed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Volwassenheid</th>
            <td className="text-yellow-300">Relatief hoog</td>
            <td className="text-orange-300">Gemiddeld</td>
            <td className="text-red-300">Laag</td>
          </tr>
          <tr>
            <th>Inzicht / toegang</th>
            <td className="text-red-500">Erg laag</td>
            <td className="text-yellow-300">Gemiddeld / hoog</td>
            <td className="text-green-400">Hoog</td>
          </tr>
          <tr>
            <th>Hosting</th>
            <td>Pega</td>
            <td>Zelf</td>
            <td>Zelf</td>
          </tr>
          <tr>
            <th>App</th>
            <td>Pega</td>
            <td>Zelf, met Pega</td>
            <td>Zelf, zonder Pega</td>
          </tr>
          <tr>
            <th>Overrides</th>
            <td className="text-red-500">Geen</td>
            <td className="text-green-400">Ja</td>
            <td className="text-green-400">Ja</td>
          </tr>
        </tbody>
      </table>
    </Prose>
  );
}
