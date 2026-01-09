"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const COLORS = ["#F97316", "#FDBA74", "#FED7AA", "#FFEDD5"];

const data = [
    { name: "Workforce Deployed", value: 15000 },
    { name: "Active Sites", value: 200 },
    { name: "Cities Served", value: 10 },
    { name: "Corporate Clients", value: 50 },
];

export default function StatsPieChart() {
    return (
        <div className="w-full h-[360px] md:h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={150}
                        paddingAngle={3}
                    >
                        {data.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value) =>
                            typeof value === "number"
                                ? value.toLocaleString("en-IN")
                                : ""
                        }
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
