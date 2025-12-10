export default function CurvedDivider() {
    return (
        <div className="w-full overflow-hidden">
            <svg
                viewBox="0 0 1400 200"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* LEFT STRAIGHT LINE */}
                <path
                    d="M0 50 H850"
                    stroke="#E5E5E5"
                    strokeWidth="2"
                />

                {/* CURVE DOWN + STRAIGHT */}
                <path
                    d="M850 50
                    C950 50, 1000 150, 1100 150
                    L1400 150"
                    stroke="#E5E5E5"
                    strokeWidth="2"
                    fill="none"
                />

                {/* ORANGE GLOW DOT EXACTLY AT CURVE START */}
                <defs>
                    <radialGradient id="orangeGlow">
                        <stop offset="0%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <ellipse
                    cx="800"
                    cy="50"
                    rx="30"   // width radius
                    ry="10"   // height radius
                    fill="url(#orangeGlow)"
                />

            </svg>
        </div>
    );
}
