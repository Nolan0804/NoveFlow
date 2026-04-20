import Footer from "./components/footer";
import NavBar from "./components/navbar";

const highlights = [
  "Menu digital via QR code, sans application a installer",
  "Commande a table, sur place ou a emporter",
  "Mises a jour du menu en temps reel",
];

const stats = [
  { value: "-38%", label: "d'attente en moyenne au moment de commander" },
  { value: "24/7", label: "menus accessibles en plusieurs langues" },
  { value: "3 min", label: "pour publier un nouveau plat ou une promo" },
];

const features = [
  {
    title: "Un menu vivant",
    description:
      "Modifiez vos plats, options, tarifs et disponibilites en quelques clics. Le QR code reste le meme, le contenu se met a jour instantanement.",
  },
  {
    title: "Commande fluide",
    description:
      "Les clients scannent, parcourent le menu, personnalisent leurs plats et valident leur commande directement depuis leur telephone.",
  },
  {
    title: "Pilotage simple",
    description:
      "Centralisez les commandes, suivez les heures de pointe et detectez les produits les plus performants depuis un tableau de bord unique.",
  },
];

const steps = [
  "Creez votre carte avec categories, photos et options",
  "Imprimez un QR code unique par table ou par zone",
  "Recevez les commandes en direct et servez plus vite",
];

export default function Home() {
  return (
    <main className="text-text-base min-h-screen overflow-hidden bg-[linear-gradient(180deg,color-mix(in_srgb,var(--background)_88%,var(--brand-primary)_12%)_0%,var(--background)_42%,var(--background)_100%)]">
      <section className="relative isolate">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <NavBar />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="border-border-brand bg-surface/80 text-primary inline-flex rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
                QR code de commande pense pour les restaurants modernes
              </span>
              <h1 className="text-text-strong mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                Votre menu devient une experience de commande rapide, elegante
                et rentable.
              </h1>
              <p className="text-text-muted mt-6 max-w-xl text-lg leading-8 sm:text-xl">
                NoveFlow permet a vos clients de scanner un QR code, consulter
                votre carte, commander en autonomie et payer plus vite. Moins
                d'attente, moins d'erreurs, plus de rotation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="bg-primary text-text-strong inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-primary-strong"
                >
                  Voir une demo
                </a>
                <a
                  href="#fonctionnalites"
                  className="border-border-soft bg-surface/70 text-text-base inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:bg-surface"
                >
                  Explorer les fonctionnalites
                </a>
              </div>

              <ul className="text-text-muted mt-8 grid gap-3 text-sm sm:grid-cols-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="border-border-soft bg-surface/70 rounded-2xl border px-4 py-4 shadow-[0_12px_40px_rgba(2,6,23,0.2)] backdrop-blur"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-primary/25 absolute -left-6 top-12 hidden h-28 w-28 rounded-full blur-3xl sm:block" />
              <div className="bg-accent/25 absolute -right-4 bottom-0 hidden h-32 w-32 rounded-full blur-3xl sm:block" />

              <div className="bg-panel-dark border-border-soft relative rounded-[2rem] border p-4 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
                <div className="bg-[linear-gradient(180deg,var(--surface-soft)_0%,var(--surface)_100%)] rounded-[1.6rem] p-5">
                  <div className="bg-surface border-border-soft flex items-center justify-between rounded-2xl border px-4 py-3 shadow-sm">
                    <div>
                      <p className="text-primary text-xs uppercase tracking-[0.3em]">
                        Table 12
                      </p>
                      <p className="text-text-strong mt-1 text-lg font-semibold">
                        Bistro urbain
                      </p>
                    </div>
                    <div className="border-border-brand bg-primary-soft rounded-2xl border px-3 py-2 text-right">
                      <p className="text-text-subtle text-xs">Ticket moyen</p>
                      <p className="text-primary text-lg font-semibold">
                        31,40 EUR
                      </p>
                    </div>
                  </div>

                  <div className="bg-panel-dark mt-4 rounded-3xl p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/70">Scan & commande</p>
                        <p className="mt-1 text-2xl font-semibold">
                          Menu QR intelligent
                        </p>
                      </div>
                      <div className="bg-surface grid h-16 w-16 grid-cols-4 gap-1 rounded-2xl p-2">
                        {Array.from({ length: 16 }).map((_, index) => (
                          <span
                            key={index}
                            className={`rounded-sm ${
                              [0, 1, 3, 4, 6, 7, 9, 10, 12, 14, 15].includes(
                                index,
                              )
                                ? "bg-panel-dark"
                                : "bg-surface-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        {
                          name: "Burger signature",
                          meta: "Boeuf, cheddar, sauce maison",
                          price: "14,90 EUR",
                        },
                        {
                          name: "Salade fraicheur",
                          meta: "Option vegan disponible",
                          price: "11,50 EUR",
                        },
                        {
                          name: "Limonade gingembre",
                          meta: "Tres demandee aujourd'hui",
                          price: "4,90 EUR",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="bg-surface/8 flex items-center justify-between rounded-2xl px-4 py-3"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-white/65">{item.meta}</p>
                          </div>
                          <span className="bg-surface text-text-strong rounded-full px-3 py-1 text-sm font-semibold">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-accent text-text-strong mt-5 rounded-2xl px-4 py-4">
                      <p className="text-sm font-medium">
                        Commande envoyee en cuisine
                      </p>
                      <p className="mt-1 text-2xl font-semibold">
                        08 commandes en attente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-8 sm:px-10 lg:grid-cols-3 lg:px-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-border-soft bg-surface rounded-[1.75rem] border px-6 py-6 shadow-[0_18px_45px_rgba(2,6,23,0.2)]"
          >
            <p className="text-text-strong text-3xl font-semibold">{stat.value}</p>
            <p className="text-text-muted mt-2 text-sm leading-6">{stat.label}</p>
          </div>
        ))}
      </section>

      <section
        id="fonctionnalites"
        className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"
      >
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em]">
            Pourquoi ca marche
          </p>
          <h2 className="text-text-strong mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Une seule plateforme pour fluidifier toute l'experience a table.
          </h2>
          <p className="text-text-muted mt-5 max-w-lg text-lg leading-8">
            De la consultation du menu jusqu'a la preparation des commandes,
            NoveFlow simplifie chaque etape pour l'equipe comme pour le client.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border-border-soft bg-[linear-gradient(180deg,var(--surface)_0%,var(--surface-soft)_100%)] rounded-[1.75rem] border p-6 shadow-[0_18px_40px_rgba(2,6,23,0.18)]"
            >
              <div className="bg-primary h-11 w-11 rounded-2xl" />
              <h3 className="text-text-strong mt-5 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-text-muted mt-3 text-sm leading-7">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-6 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:px-12">
        <div className="bg-panel-dark rounded-[2rem] p-8 text-white shadow-[0_30px_70px_rgba(2,6,23,0.45)] sm:p-10">
          <p className="text-primary-strong text-sm font-semibold uppercase tracking-[0.3em]">
            Mise en route
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Lancez votre systeme de commande QR sans friction.
          </h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border-white/10 bg-white/5 flex gap-4 rounded-2xl border px-5 py-5"
              >
                <span className="bg-primary text-text-strong flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold">
                  0{index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="border-border-soft bg-surface rounded-[2rem] border p-8 shadow-[0_24px_60px_rgba(2,6,23,0.22)] sm:p-10"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            Pour qui
          </p>
          <h2 className="text-text-strong mt-4 text-3xl font-semibold tracking-tight">
            Concue pour les restaurants qui veulent servir plus vite.
          </h2>
          <div className="text-text-muted mt-6 space-y-4">
            <p className="bg-primary-soft rounded-2xl px-5 py-4 leading-7">
              Ideale pour les brasseries, food courts, terrasses, dark kitchens
              et restaurants multi-sites.
            </p>
            <p className="bg-surface-muted rounded-2xl px-5 py-4 leading-7">
              Adaptee aux menus saisonniers, options de personnalisation,
              horaires specifiques et ventes additionnelles.
            </p>
          </div>

          <div
            id="prix"
            className="bg-[linear-gradient(135deg,var(--brand-primary)_0%,var(--brand-accent)_100%)] mt-8 rounded-[1.75rem] p-[1px]"
          >
            <div className="bg-surface rounded-[1.7rem] px-6 py-7">
              <p className="text-text-subtle text-sm font-medium">
                Offre de lancement
              </p>
              <p className="text-text-strong mt-2 text-4xl font-semibold">
                29 EUR
                <span className="text-text-subtle text-lg font-medium"> / mois</span>
              </p>
              <p className="text-text-muted mt-3 text-sm leading-6">
                QR codes illimites, back-office menu, suivi des commandes et
                support de demarrage inclus.
              </p>
              <a
                href="mailto:demo@noveflow.fr"
                className="bg-primary text-text-strong mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-primary-strong"
              >
                Parler a l'equipe
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
