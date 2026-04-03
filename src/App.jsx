import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxuosos from "./assets/icon-luxury.svg"
export default function App() {
  return (
    <main className="min-h-svh bg-off-white-bg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="Icone dos carros" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">Sedans</h2>
          <p className="font-lexend mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        <div className="bg-green p-12">
          <img src={iconSuvs} alt="Icone dos carros Suvs" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">SUVs</h2>
          <p className="font-lexend mb-7">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>
        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxuosos} alt="Icone dos carros luxuosos" className="mb-7"/>
          <h2 className="font-big-shoulders mb-7 uppercase text-4xl text-off-white-bg font-bold">Luxuosos</h2>
          <p className="font-lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
        <div></div>
      </section>
    </main>
  )
}