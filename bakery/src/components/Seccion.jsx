function Seccion({ titulo, children }) {
  // Generar ID único y descriptivo a partir del título
  const id = titulo.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section
      aria-labelledby={id}
      role="region"
      className="max-w-7xl mx-auto py-6 px-4"
    >
      <header className="text-start mb-8 mt-6">
        <h2 id={id} className="text-base heading-base heading-h2 text-(--color-primary)">
          {titulo}
        </h2>
      </header>
      <div>{children}</div>
    </section>
  );
}

export default Seccion;
