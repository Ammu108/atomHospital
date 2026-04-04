import Image from "next/image";
import { SPECIALITIES } from "~/lib/constant";

const Categories = () => {
  return (
    <section className="px-4">
      {/* ── Heading ── */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl">
          Find By Speciality
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          Simply browse through our extensive list of trusted doctors, With just
          a few clicks, you can easily <br className="hidden sm:block" />
          schedule your appointment on our hassle-free system
        </p>
      </div>

      {/* ── Speciality Grid ── */}
      <div className="no-scrollbar -mx-4 flex max-w-5xl flex-nowrap gap-8 overflow-x-auto px-4 sm:gap-12 md:mx-auto md:flex md:flex-wrap md:justify-center md:overflow-visible">
        {SPECIALITIES.map(({ label, image }) => (
          <button
            className="group flex cursor-pointer flex-col items-center gap-3 focus:outline-none"
            key={label}
            type="button"
          >
            {/* Circle image */}
            <div className="relative aspect-square w-24 overflow-hidden rounded-full border-2 transition-all duration-300 sm:w-28">
              <Image alt={label} className="object-cover" fill src={image} />
            </div>

            {/* Label */}
            <span className="font-medium text-card-foreground text-sm">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
