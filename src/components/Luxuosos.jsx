import iconLuxuosos from "../assets/icon-luxury.svg"

export default function Luxuosos() {
  return (
    <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
      <img
        src={iconLuxuosos}
        alt="Icone dos carros luxuosos"
        className="mb-7"
      />
      <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">
        Luxuosos
      </h2>
      <p className="mb-7 font-lexend text-offwhite lg:mb-20">
        Passeie nos melhores carros sem os preços exorbitantes. Desfrute do
        conforto aprimorado de um aluguel de luxo e chegue com estilo.
      </p>
      <a
        href="https://www.webmotors.com.br/carros-de-luxo"
        target="_blank"
        className="block w-fit bg-off-white-bg px-10 py-3 rounded-3xl text-dark-green font-bold  border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg"
      >
        Ver mais
      </a>
    </section>
  );
}
