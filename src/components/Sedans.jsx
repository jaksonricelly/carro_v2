import iconSedans from "../assets/icon-sedans.svg";

export default function Sedans() {
  return (
    <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
      <img src={iconSedans} alt="Icone dos carros" className="mb-7" />
      <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">
        Sedans
      </h2>
      <p className="mb-7 font-lexend text-offwhite lg:mb-20">
        Escolha um sedan pelo seu preço acessível e excelente economia de
        combustível. Ideal para dirigir na cidade ou na sua próxima viagem.
      </p>
      <a
        href="https://www.webmotors.com.br/sedans"
        target="_blank"
        className="block w-fit bg-off-white-bg px-10 py-3 rounded-3xl text-orange font-bold border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg"
      >
        Ver mais
      </a>
    </div>
  );
}
