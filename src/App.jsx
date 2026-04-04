import Sedans from "./components/sedans"
import Suvs from "./components/suvs"
import Luxuosos from "./components/luxuosos"
export default function App() {
  return (
    <main className="min-h-svh bg-off-white-bg py-20 px-6 antialiased flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxuosos/>
      </section>
    </main>
  )
}