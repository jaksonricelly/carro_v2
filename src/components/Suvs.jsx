import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
  return (
    <section className="bg-green p-12">
      <img src={iconSuvs} alt="Icone dos carros Suvs" className="mb-7" />
      <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">
        SUVs
      </h2>
      <p className="mb-7 font-lexend text-offwhite lg:mb-20">
        Escolha um SUV pelo seu interior espaçoso, poder e versatilidade.
        Perfeito para passar as férias em família ou para aventuras off-road.
      </p>
      <a
        href="https://www.webmotors.com.br/suvs"
        target="_blank"
        className="block w-fit px-10 py-3 rounded-3xl bg-off-white-bg text-green font-bold  border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg"
      >
        Ver mais
      </a>
    </section>
  );
}
