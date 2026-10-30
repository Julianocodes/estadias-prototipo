import Image from "next/image";
import Link from "next/link";
import { IconHeartFilled, IconSearch, IconStarFilled } from "@tabler/icons-react";
import { listaAcomodacoes } from "./data";

type Acomodacao = (typeof listaAcomodacoes)[number];

export function SiteHeader({ consulta = "" }: { consulta?: string }) {
  return (
    <header className="container mx-auto space-y-6 px-4 py-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-red-600">
          Estadias
        </Link>
        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
          Projeto de estudo · sem reservas
        </span>
      </div>
      <form
        action="/"
        method="get"
        role="search"
        className="mx-auto flex w-full max-w-2xl items-center rounded-full border border-gray-200 px-3 py-2 shadow-lg shadow-gray-200"
      >
        <label htmlFor="consulta" className="sr-only">
          Busque por cidade ou acomodação
        </label>
        <input
          id="consulta"
          name="q"
          type="search"
          defaultValue={consulta}
          placeholder="Para onde você quer ir?"
          className="w-full px-3 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Buscar acomodações"
          className="rounded-full bg-red-500 p-2 text-white transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          <IconSearch aria-hidden="true" size={24} />
        </button>
      </form>
    </header>
  );
}

export function AccommodationCard({ item }: { item: Acomodacao }) {
  return (
    <article>
      <Link
        href={`/${item.slug}`}
        className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
      >
        <figure className="relative">
          <div className="absolute z-10 flex w-full items-center justify-between p-3">
            {item.hasBadge ? (
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Destaque
              </span>
            ) : <span />}
            <IconHeartFilled aria-hidden="true" className="text-white drop-shadow" size={26} />
          </div>
          <Image
            className="aspect-square w-full rounded-xl object-cover"
            src={item.photos[0].source}
            alt={`Imagem demonstrativa de acomodação em ${item.location.city}`}
            width={480}
            height={480}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <figcaption className="space-y-1 pt-3 text-sm text-gray-600">
            <div className="flex items-start justify-between gap-3 text-gray-900">
              <span className="font-semibold">{item.location.description}</span>
              <span className="flex shrink-0 items-center gap-1">
                <IconStarFilled aria-hidden="true" size={16} /> {item.rating}
              </span>
            </div>
            <p>{item.title}</p>
            <p>Anfitrião(a): {item.host} · {item.date}</p>
            <p className="pt-1 font-semibold text-gray-900">
              {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(item.price)}
              <span className="font-normal text-gray-600"> / noite · exemplo</span>
            </p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-gray-100 px-4 py-8">
      <div className="container mx-auto">
        <p className="font-semibold">Estadias · projeto de estudo</p>
        <p className="mt-2 text-sm text-gray-600">
          Interface demonstrativa, sem vínculo com plataformas de hospedagem e sem reservas reais.
        </p>
        <Link className="mt-3 inline-block text-sm underline hover:text-red-600" href="/">
          Voltar ao início
        </Link>
      </div>
    </footer>
  );
}
