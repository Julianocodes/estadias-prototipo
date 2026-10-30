import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { listaAcomodacoes } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AccommodationPage({ params }: PageProps) {
  const { id } = await params;
  const acomodacao = listaAcomodacoes.find((item) => item.slug === id);

  if (!acomodacao) notFound();

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-red-600">
          ← Voltar para as acomodações
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-red-600">
          Detalhes ilustrativos
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900">{acomodacao.title}</h1>
        <p className="mt-2 text-gray-600">
          {acomodacao.location.description} · Nota {acomodacao.rating}
        </p>

        <section aria-label="Fotos da acomodação" className="mt-6 grid gap-3 sm:grid-cols-2">
          {acomodacao.photos.slice(0, 5).map((foto, index) => (
            <Image
              key={foto.id}
              className={`h-64 w-full rounded-xl object-cover ${index === 0 ? "sm:row-span-2 sm:h-full" : ""}`}
              src={foto.source}
              alt={`Foto demonstrativa de acomodação em ${acomodacao.location.city}`}
              width={900}
              height={640}
              sizes="(min-width: 640px) 50vw, 100vw"
              priority={index === 0}
            />
          ))}
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="text-xl font-semibold">Hospedagem de demonstração</h2>
            <p className="mt-2 text-gray-600">
              Anfitrião(a): {acomodacao.host} · Datas de exemplo: {acomodacao.date}
            </p>
            <p className="mt-5 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
              Esta página faz parte de um protótipo de estudo. As acomodações, imagens,
              avaliações e preços são dados demonstrativos; não é possível reservar ou pagar.
            </p>
          </div>
          <aside className="h-fit rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-2xl font-semibold">
              {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(acomodacao.price)}
              <span className="text-base font-normal text-gray-600"> / noite · exemplo</span>
            </p>
            <p className="mt-3 text-sm text-gray-600">Protótipo sem sistema de reservas.</p>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
