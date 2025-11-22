function Banner({ imagen, titulo, contenido }) {
  return (
    <section className="relative w-full mx-auto my-8 px-4 sm:px-6 md:px-8">
      <figure className="relative rounded-lg shadow-lg overflow-hidden aspect-video sm:aspect-auto sm:h-80 md:h-96">
        <img src={imagen} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
          <h1>{titulo}</h1>
          <p>{contenido}</p>
        </figcaption>
      </figure>

    </section>
  );
}

export default Banner;
