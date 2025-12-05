function Card({ nombre, descripcion, imagen }) {
  return (
    <article className="w-full bg-white rounded-xl shadow-lg flex flex-col h-full">
      <figure>
        {/* Imagen del producto con texto alternativo */}
        <img
          src={imagen}
          alt={nombre} // Alt descriptivo para lectores de pantalla
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-t-xl"
        />
        {/* Información textual del producto */}
        <figcaption className="p-4">
          <h3 className="text-sm sm:text-base md:text-lg heading-base heading-h3 text-(--color-primary) mb-1">
            {nombre}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-medium text-(--color-grey-2) pt-1">
            {descripcion}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
