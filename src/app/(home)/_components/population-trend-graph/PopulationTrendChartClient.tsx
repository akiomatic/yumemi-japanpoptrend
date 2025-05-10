"use client";
import type { TPrefCode } from "@/types";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const COLORS = [
	"#4F8EFF", // 青
	"#FF8C4F", // オレンジ
	"#4FC98E", // 緑
	"#FF4F81", // ピンク
	"#FFD24F", // 黄色
	"#8E4FFF", // 紫
	"#4FBFFF", // 水色
	"#FF4FBF", // マゼンタ
	"#4FFF8E", // ライトグリーン
	"#FFB84F", // ライトオレンジ
];

const FONT_SIZE = 12;

type TPrefData = {
	prefCode: TPrefCode;
	prefName: string;
};

/**
 * @example
 * {
 *  year: 2020,
 *  "1": 1000000, // 東京都
 *  "2": 2000000, // 神奈川県
 *  "3": 3000000, // 埼玉県
 * }
 */
export type TChartData = {
	year: number;
	// [都道府県コード]: 人口
	[key: string]: number;
};

type TPopulationTrendChartClientProps = {
	prefData: TPrefData[];
	chartData: TChartData[];
};

export const PopulationTrendChartClient = ({
	chartData,
	prefData,
}: TPopulationTrendChartClientProps) => {
	return (
		<ResponsiveContainer width="100%" height={320}>
			<LineChart
				data={chartData}
				margin={{ top: 16, right: 24, left: 8, bottom: 8 }}
			>
				<CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
				<XAxis dataKey="year" stroke="#333" style={{ fontSize: FONT_SIZE }} />
				<YAxis
					stroke="#333"
					style={{ fontSize: FONT_SIZE }}
					tickFormatter={(value) => value.toLocaleString()}
				/>
				<Tooltip
					contentStyle={{ fontSize: FONT_SIZE, borderRadius: 8 }}
					labelStyle={{ fontSize: FONT_SIZE }}
					formatter={(value) => value.toLocaleString()}
				/>
				<Legend wrapperStyle={{ fontSize: FONT_SIZE, paddingTop: 8 }} />
				{prefData.map((pref, idx) => (
					<Line
						key={pref.prefCode}
						type="monotone"
						dataKey={String(pref.prefCode)}
						stroke={COLORS[idx % COLORS.length]}
						name={pref.prefName}
						strokeWidth={2}
						activeDot={{ r: 4 }}
					/>
				))}
			</LineChart>
		</ResponsiveContainer>
	);
};
