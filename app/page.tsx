import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const sports = [
{
name: "College Football",
description: "Games, rivalries, rankings, traditions, and history.",
},
{
name: "College Basketball",
description: "March Madness, legendary teams, tournaments, and moments.",
},
{
name: "College Hockey",
description: "The Frozen Four, historic programs, rivalries, and rankings.",
},
{
name: "NHL",
description: "Stanley Cup history, great games, teams, and players.",
},
{
name: "IIHF & International Hockey",
description:
"World Championships, Olympic hockey, world juniors, and national teams.",
},
{
name: "World Soccer",
description:
"Clubs, international tournaments, derbies, and football history.",
},
{
name: "NFL",
description: "Classic games, rivalries, seasons, and Super Bowl history.",
},
{
name: "NBA",
description:
"Great teams, playoff series, players, and unforgettable moments.",
},
{
name: "MLB",
description:
"Baseball history, ballparks, rivalries, and postseason classics.",
},
{
name: "Other Sports",
description:
"Motorsport, tennis, rugby, the Olympics, and everything else.",
},
];

const featuredPosts = [
{
category: "College Football",
title: "The Greatest College Football Rivalries",
description:
"A growing ranking of the rivalries that define the sport.",
},
{
category: "International Hockey",
title: "The Best IIHF Games I Have Seen",
description:
"Memorable World Championship and international hockey games.",
},
{
category: "World Soccer",
title: "The Greatest Derbies in World Football",
description:
"Ranking the rivalries shaped by history, geography, and culture.",
},
];

export default function Home() {
return (
<div className="min-h-screen bg-[#0a0d12] text-white">
<header className="border-b border-white/10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<p className="text-2xl font-black tracking-[0.12em]">
THE SPORTS VAULT
</p>

      <nav className="hidden gap-7 text-sm text-zinc-300 md:flex">
        <Link className="transition hover:text-white" href="/">
          Home
        </Link>
        <Link className="transition hover:text-white" href="/articles">
          Articles
        </Link>
        <Link className="transition hover:text-white" href="/rankings">
          Rankings
        </Link>
        <Link className="transition hover:text-white" href="/sports">
          Sports
        </Link>
        <Link className="transition hover:text-white" href="/about">
          About
        </Link>
      </nav>
    </div>
  </header>

  <main>
    <section className="relative min-h-[720px] overflow-hidden border-b border-white/10"> <HeroSlideshow /> <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 md:py-32"> <div> <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-amber-400"> THE PEOPLE&apos;S SPORTS JOURNAL </p>
  <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
    THE SPORTS VAULT
  </h1>

  <h2 className="mt-6 text-2xl font-semibold text-zinc-100 md:text-3xl">
    From College Stadiums to the World Stage
  </h2>

  <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-200">
    Sports through the eyes of the fans who love them.
  </p>

  <div className="mt-10 flex flex-wrap gap-4">
    <Link
      href="/rankings"
      className="rounded-md bg-amber-400 px-6 py-3 font-bold text-black transition hover:bg-amber-300"
    >
      Explore Rankings
    </Link>

    <Link
      href="/articles"
      className="rounded-md border border-white/30 bg-black/20 px-6 py-3 font-bold backdrop-blur-sm transition hover:border-white/60 hover:bg-black/40"
    >
      Read Articles
    </Link>
  </div>
</div>
</div> </section>
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-9 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            Featured
          </p>
          <h2 className="mt-2 text-3xl font-black">From the Vault</h2>
        </div>

        <Link
          href="/articles"
          className="hidden text-sm font-semibold text-zinc-300 hover:text-white sm:block"
        >
          View all articles →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredPosts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-amber-400/50"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              {post.category}
            </p>

            <h3 className="mt-4 text-2xl font-bold">{post.title}</h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {post.description}
            </p>

            <Link
              href="/articles"
              className="mt-7 inline-block font-semibold text-white"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
          Browse
        </p>

        <h2 className="mt-2 text-3xl font-black">Sports Covered</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport) => (
            <article
              key={sport.name}
              className="rounded-lg border border-white/10 bg-[#10151d] p-5 transition hover:border-amber-400/50"
            >
              <h3 className="text-xl font-bold">{sport.name}</h3>

              <p className="mt-2 leading-6 text-zinc-400">
                {sport.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.07] px-7 py-12 md:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
          Community Rankings
        </p>

        <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
          Create your own rankings and compare them with other fans.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-300">
          Visitors will eventually be able to reorder lists, save their
          choices, and contribute to community rankings.
        </p>

        <Link
          href="/rankings"
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200"
        >
          View Rankings
        </Link>
      </div>
    </section>
  </main>

  <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 The Sports Vault</p>
      <p>The People&apos;s Sports Journal</p>
    </div>
  </footer>
</div>

);
}