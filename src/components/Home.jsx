import homeBanner from '../images/home-banner.jpg'

function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-5">Bienvenido a FilmsTop</h1>
      <img src={ homeBanner } alt="home banner" />
    </>
  )
}

export default Home