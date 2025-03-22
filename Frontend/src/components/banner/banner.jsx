import { Parallax } from 'react-scroll-parallax'

function Banner({ image }) {
  return (
    <>
      <div
        className={`z-10 h-full overflow-hidden`}
        /*        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} */
      >
        <Parallax speed={+20} className="h-full">
          <img src={image} className="h-150 w-full object-cover" />
        </Parallax>
      </div>
    </>
  )
}

export default Banner
