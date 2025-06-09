import { Prose } from '../../shared/Prose';

export function ConstellationAPI() {
  return (
    <Prose center className="pb-12">
      <h1>Constellation API</h1>
      <p>Waar gaan we even naar kijken?</p>
      <ul className="font-mono">
        <li>
          <a
            href="https://docs.pega.com/bundle/pcore-pconnect/page/pcore-pconnect-public-apis/api/using-pcore-pconnect-public-apis.html"
            target="_blank"
          >
            Documentatie
          </a>
        </li>
        <li>PCore</li>
        <li>Mashup API</li>
        <li>DataPage Utils</li>
        <li>PubSub Utils</li>
        <li>
          <strong>pConnect</strong>
        </li>
        <li>De Redux Store</li>
      </ul>
    </Prose>
  );
}
