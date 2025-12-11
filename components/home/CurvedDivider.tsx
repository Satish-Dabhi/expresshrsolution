export default function CurvedDivider() {
    return (
        <div className="w-full overflow-hidden">
            <svg
                viewBox="0 0 1400 200"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* LEFT STRAIGHT LINE */}
                <path id="dividerPath" d="
                    M0 50 
                    H850
                    C950 50, 1000 150, 1100 150
                    L1400 150
                "
                stroke="#E5E5E5"
                strokeWidth="2"
                fill="none"
                />

                {/* ORIGINAL GRADIENT (unchanged, only stronger color) */}
                <defs>
                    <radialGradient id="orangeGlow">
                        <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
                        <stop offset="60%" stopColor="#F97316" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* GLOW ELEMENT */}
                <ellipse
                    rx="40"
                    ry="14"
                    fill="url(#orangeGlow)"
                >
                    {/* FOLLOW THE PATH EXACTLY */}
                    <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        rotate="auto"
                        keyTimes="0;1"
                        calcMode="spline"
                        keySplines="0.25 0.1 0.25 1"
                    >
                        <mpath href="#dividerPath" />
                    </animateMotion>
                </ellipse>

            </svg>
        </div>
    );
}
