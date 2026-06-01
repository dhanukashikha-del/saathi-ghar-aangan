const stories = [
  {
    title: "Ramesh Uncle's morning raga",
    img: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&q=70&auto=format&fit=crop",
  },
  {
    title: "A widow's garden in Pune",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=70&auto=format&fit=crop",
  },
  {
    title: "Letters between two saathis",
    img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600&q=70&auto=format&fit=crop",
  },
  {
    title: "Chai with Lakshmi Aunty",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=70&auto=format&fit=crop",
  },
];

export function HumansStrip() {
  return (
    <section aria-labelledby="humans-heading">
      <div className="flex items-baseline justify-between px-5 mb-3">
        <h2 id="humans-heading" className="font-serif text-ink" style={{ fontSize: "22px", fontWeight: 500 }}>
          Humans of Sukhada
        </h2>
        <a
          href="#"
          className="font-sans text-marigold"
          style={{ fontSize: "15px", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          See all
        </a>
      </div>
      <div className="no-scrollbar overflow-x-auto">
        <ul className="flex gap-3 px-5 pb-1" style={{ scrollSnapType: "x mandatory" }}>
          {stories.map((s) => (
            <li
              key={s.title}
              className="relative shrink-0 overflow-hidden rounded-2xl"
              style={{ width: 240, height: 140, scrollSnapAlign: "start" }}
            >
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)" }}
              />
              <p
                className="absolute bottom-3 left-3 right-3 font-serif text-white"
                style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.25 }}
              >
                {s.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
