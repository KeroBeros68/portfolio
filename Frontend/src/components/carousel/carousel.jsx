import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

function MyCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 20000, stopOnInteraction: true }),
  )

  return (
    <>
      <Carousel
        orientation="horizontal"
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-4/7 lg:basis-7/11">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </>
  )
}

export default MyCarousel
