import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxuosos from "./assets/icon-luxury.svg"
export default function App() {
  return (
    <main className="min-h-svh bg-off-white-bg py-20 px-6 antialiased flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="Icone dos carros" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">Sedans</h2>
          <p className="mb-7 font-lexend text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank" className="block w-fit bg-off-white-bg px-10 py-3 rounded-3xl text-orange font-bold border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg">Ver mais</a>
        </div>
        <div className="bg-green p-12">
          <img src={iconSuvs} alt="Icone dos carros Suvs" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">SUVs</h2>
          <p className="mb-7 font-lexend text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank" className="block w-fit px-10 py-3 rounded-3xl bg-off-white-bg text-green font-bold  border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg">Ver mais</a>
        </div>
        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxuosos} alt="Icone dos carros luxuosos" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">Luxuosos</h2>
          <p className="mb-7 font-lexend text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank" className="block w-fit bg-off-white-bg px-10 py-3 rounded-3xl text-dark-green font-bold  border-2 border-off-white-bg hover:bg-transparent hover:text-off-white-bg">Ver mais</a>
        </div>
        <div></div>
      </section>
    </main>
  )
}