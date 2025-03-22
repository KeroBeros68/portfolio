import Banner from '@/components/banner/banner'
import bannerImage from '@/assets/images/banner1.jpg'
import Particle from '@/components/particle/particle'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import MyCarousel from '@/components/carousel/carousel'

function Home() {
  return (
    <>
      <section className="relative h-70 md:h-100">
        <Particle />
        <Banner image={bannerImage} />
        <div className="flex justify-center">
          <div className="absolute bottom-[10%] z-20 flex w-full max-w-[1440px] flex-col gap-4 px-4 md:h-[50%] md:justify-between md:px-20">
            <div className="font-medium text-[var(--background)]">
              <h1>
                <span className="bg-white/40 p-1 text-xl md:text-4xl">
                  Kévin BERTRAND - Web developper
                </span>
              </h1>
              <div className="md:text-2xl">
                <span className="bg-white/40 p-1">
                  Autodidacte curieux et débrouillard,
                </span>
                <br />
                <span className="bg-white/40 p-1">
                  passionné de nouvelles technologies.
                </span>
                <span className="animate-fade-in-out inline-block -translate-x-1 bg-white/40 py-1 pr-1 font-extrabold">
                  |
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button variant="destructive">Contactez-moi</Button>
              <Button variant="secondary">Voir sur GitHub</Button>
              <Button variant="secondary">
                <Download />
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-radial from-emerald-950 to-[var(--background)] p-1 md:min-h-133">
        <div className="m-10 w-full max-w-[1300px]">
          <h2 className="pb-2 text-center text-3xl">Mes derniers projets</h2>
          <MyCarousel />
        </div>
      </section>
    </>
  )
}

export default Home
