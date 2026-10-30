import { AccommodationCard, SiteFooter, SiteHeader } from "./components";
import { listaAcomodacoes } from "./data";

interface HomeProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const consulta = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";
  const termo = consulta.trim().toLocaleLowerCase("pt-BR");
  const resultados = listaAcomodacoes.filter((item) => {
    const texto = `${item.title} ${item.location.description} ${item.location.city} ${item.location.state} ${item.location.country}`;
    return texto.toLocaleLowerCase("pt-BR").includes(termo);
  });

  return (
    <>
      <SiteHeader consulta={consulta} />
      <main id="acomodacoes" className="container mx-auto px-4">
        <section className="pt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Protótipo de estudo
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            Acomodações para explorar
          </h1>
          <p className="mt-2 text-gray-600">
            Anúncios e valores ilustrativos. Pesquise por cidade, estado, país ou nome.
          </p>
        </section>

        {resultados.length > 0 ? (
          <section aria-label="Acomodações disponíveis" className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resultados.map((item) => <AccommodationCard key={item.id} item={item} />)}
          </section>
        ) : (
          <p className="py-12 text-center text-gray-600" role="status">
            Não encontramos acomodações para “{consulta}”. Tente buscar por outra cidade.
          </p>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
