import { BlockRounded, CheckRounded } from "@mui/icons-material";
import {
	Card,
	CardContent,
	CardHeader,
	Paper,
	Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Faction } from "../definitions/factions";

function NewAgent() {
	const [factions, setFactions] = useState<Faction[]>([]);
	const [selectedFaction, setSelectedFaction] = useState<
		Faction | undefined
	>();
	useEffect(() => {
		fetch(`${process.env.REACT_BASE_URL}/factions`)
			.then((response) => response.json())
			.then((factionData: { data: Faction[] }) => {
				const allFactions = factionData.data;
				setFactions(allFactions);
				setSelectedFaction(allFactions[0]);
			})
			.catch((error) =>
				console.log(
					`An error occurred while attempting to retrieve factions: ${error}`
				)
			);
	}, [setFactions]);

	return (
		<Paper className="flex items-center justify-center">
			<Typography variant="h1">Select your faction</Typography>
			<Carousel>
				{factions.map((faction) => (
					<Card>
						<CardHeader
							avatar={
								faction.isRecruiting ? (
									<CheckRounded />
								) : (
									<BlockRounded />
								)
							}
							title={faction.name}
							subheader={
								faction.isRecruiting
									? "Recruiting"
									: "Not Recruiting"
							}
						/>
						<CardContent className="flex item-center justify-center">
							{faction.traits.map((trait) => (
								<></>
							))}
						</CardContent>
					</Card>
				))}
			</Carousel>
		</Paper>
	);
}

export default NewAgent;
