'use client'

interface StatementSectionProps {
  title: string
  description: string
}

export default function StatementSection({
  title,
  description,
}: StatementSectionProps) {
  return (
    <section className="w-full bg-white py-8 my-2 px-0 md:px-10">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-0 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">

        {/* LEFT — HEADING */}
        <h2
          className="text-black"
          style={{
            fontFamily: 'Instrument Sans',
            fontWeight: 600,
            fontSize: 'clamp(32px, 5vw, 60px)', // perfect at all screen sizes
            lineHeight: '1.05',
            maxWidth: '560px',
          }}
        >
          {title.split('\n').map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* RIGHT — TEXT */}
        <p
          className="text-black pt-4 md:pt-2"
          style={{
            fontFamily: 'Instrument Sans',
            fontSize: 'clamp(14px, 1.6vw, 18px)', // responsive text size
            lineHeight: '1.6',
            maxWidth: '400px',
          }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
