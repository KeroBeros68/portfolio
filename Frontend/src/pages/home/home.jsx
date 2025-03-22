import Banner from '@/components/banner/banner'

import bannerImage from '@/assets/images/banner1.jpg'

import Particle from '@/components/particle/particle'

function Home() {
  return (
    <>
      <section className="relative h-70 md:h-100">
        <Particle />
        <Banner image={bannerImage} />
      </section>
    </>
  )
}

export default Home
