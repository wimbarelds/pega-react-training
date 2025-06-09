export function Welkom() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-3 flex-1">
      <div className="col-start-2 row-start-2 flex flex-col items-start justify-center">
        <h1 className="mb-4 text-7xl font-bold">Welkom</h1>
        <p className="text-4xl font-light">Pega + React</p>
      </div>

      <div className="col-start-3 row-start-3 flex flex-col items-end justify-end py-2 px-8">
        <p className="text-lg font-semibold">Who am I?</p>
        <p className="mt-1 text-xl font-bold">Wim Barelds</p>
        <p className="text-md">Frontend Expert</p>
        <img src="logo-soprasteria.svg" alt="Sopra Steria" className="mt-3 h-auto w-32" />
      </div>
    </div>
  );
}
