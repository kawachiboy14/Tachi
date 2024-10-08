import { ChangeOpacity } from "util/color-opacity";
import QuickTooltip from "components/layout/misc/QuickTooltip";
import Divider from "components/util/Divider";
import Muted from "components/util/Muted";
import React from "react";
import { COLOUR_SET, ChartDocument } from "tachi-common";
import MiniTable from "../components/MiniTable";

const COLOUR_LOOKUP = {
	Beginner: COLOUR_SET.paleBlue,
	Easy: COLOUR_SET.green,
	Medium: COLOUR_SET.vibrantYellow,
	Hard: COLOUR_SET.red,
	Expert: COLOUR_SET.pink,
	Edit: COLOUR_SET.gray,
};

export default function ITGDifficultyCell({ chart }: { chart: ChartDocument<"itg:Stamina"> }) {
	let diff;

	if (chart.data.rankedLevel === null) {
		diff = `UNRANKED ${chart.data.difficultyTag} ${chart.data.chartLevel}`;
	} else {
		diff = `${chart.data.difficultyTag} ${chart.data.chartLevel}`;
	}

	let breakdown = "No Streams!";

	if (chart.data.breakdown) {
		if (chart.data.breakdown.detailed.length < 32) {
			breakdown = chart.data.breakdown.detailed;
		} else if (chart.data.breakdown.partiallySimplified.length < 32) {
			breakdown = chart.data.breakdown.partiallySimplified;
		} else if (chart.data.breakdown.simplified.length < 32) {
			breakdown = chart.data.breakdown.simplified;
		} else {
			breakdown = `${
				chart.data.breakdown.total
			} Total (${chart.data.breakdown.density.toFixed(0)}% Density)`;
		}
	}

	const minutes = Math.floor(chart.data.length / 60);
	let seconds: number | string = Math.floor(chart.data.length - minutes * 60);

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	return (
		<td
			style={{
				backgroundColor: ChangeOpacity(
					COLOUR_LOOKUP[chart.data.difficultyTag] ?? COLOUR_SET.gray,
					0.2
				),
				minWidth: "80px",
			}}
		>
			<QuickTooltip
				wide
				tooltipContent={
					<>
						{chart.data.breakdown ? (
							<MiniTable headers={["Breakdown"]} colSpan={2}>
								<tr>
									<td>Total</td>
									<td>
										{chart.data.breakdown.total} Total (
										{chart.data.breakdown.density.toFixed(0)}% Density)
									</td>
								</tr>
								<tr>
									<td>Detailed</td>
									<td>{chart.data.breakdown.detailed}</td>
								</tr>
								<tr>
									<td>Simplified</td>
									<td>{chart.data.breakdown.simplified}</td>
								</tr>
								<tr>
									<td>Length</td>
									<td>
										{minutes}:{seconds}
									</td>
								</tr>
							</MiniTable>
						) : (
							<b>This chart has no streams.</b>
						)}
						{chart.data.rankedLevel === null && (
							<>
								<Divider />
								<b>
									This chart is not ranked. Take the level with a pinch of salt.
								</b>
							</>
						)}
						{chart.data.length > 60 * 16 && (
							<>
								<Divider />
								<b>This chart is a marathon!</b>
							</>
						)}
					</>
				}
			>
				<div>
					<span>
						{diff} [{chart.data.streamBPM?.toFixed() ?? "???"}]
					</span>
					<br />
					<Muted>{chart.data.charter}</Muted>
					<br />
					<span style={{ fontSize: "0.9rem" }}>{breakdown}</span>
					<br />
					<span>
						{chart.data.length > 60 * 16 ? (
							<b>
								({minutes}:{seconds})
							</b>
						) : (
							`(${minutes}:${seconds})`
						)}
					</span>
				</div>
			</QuickTooltip>
		</td>
	);
}
