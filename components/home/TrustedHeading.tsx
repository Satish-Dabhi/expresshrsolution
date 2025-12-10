export default function TrustedHeading() {
    return (
        <section className="w-full text-center py-12 md:py-16">
            <p
                className="text-gray-400"
                style={{
                    fontFamily: "Instrument Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    marginBottom: "24px",
                }}
            >
                Trusted by Operators
            </p>

            <h2
                className="text-black"
                style={{
                    fontFamily: "Instrument Sans",
                    fontWeight: 600,
                    fontSize: "clamp(32px, 4vw, 52px)",
                    lineHeight: "1.15",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                Trusted by industry leaders <br />
                looking for real resource innovation
            </h2>
        </section>
    );
}
