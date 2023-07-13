import {
	CancelOutlined,
	CheckCircleOutline,
	ExpandMoreRounded
} from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Pagination,
	Paper,
	TextField,
	Tooltip,
	Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { Faction } from "../definitions/factions";
import { getTraitIcon } from "../utilities";
import { useAppDispatch } from "../hooks/redux";
import { setTitle } from "../redux/titleSlice";

function NewAgent() {
	const [factions, setFactions] = useState<Faction[][]>([]);
	const [selectedFaction, setSelectedFaction] = useState<
		Faction | undefined
	>();
	const [selectedPage, setSelectedPage] = useState<number>(0);
	const [expandedTrait, setExpandedTrait] = useState<string>("");
	const [username, setUsername] = useState<string>("");

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTitle("New Agent"));
	});
	useEffect(() => {
		function getFactions(requestedPage?: number) {
			fetch(
				`${process.env.REACT_APP_BASE_URL}/factions${
					requestedPage ? `?page=${requestedPage}` : ""
				}`
			)
				.then(response => response.json())
				.then(
					(factionData: {
						data: Faction[];
						meta: { total: number; page: number; limit: number };
					}) => {
						const allFactions = factionData.data;
						if (requestedPage !== undefined)
							setFactions(current => [
								...current,
								[...allFactions]
							]);
						else setFactions([[...allFactions]]);
						const { limit, page, total } = factionData.meta;
						if (limit * page < total) getFactions(page + 1);
					}
				)
				.catch(error => {
					console.log(
						`An error occurred while attempting to retrieve factions: ${error}`
					);
				});
		}
		getFactions();
	}, [setFactions]);

	return (
		<Paper className="flex flex-col items-center" sx={{ height: "94.5vh" }}>
			<div className="justify-self-start shrink-0 mt-3">
				<Typography variant="h5">Select your faction</Typography>
			</div>
			{factions && factions.length ? (
				<div
					className="grow w-screen flex flex-col justify-center items-center mb-2"
					style={{ maxHeight: "94%" }}
				>
					<div className="flex justify-between items-center h-full w-full">
						<div
							className="grow grid grid-cols-2 gap-5 auto-cols-max auto-rows-max overflow-y-auto p-5"
							style={{ maxHeight: "95%" }}
						>
							{factions[selectedPage].map((faction, index) => (
								<Card
									color={
										selectedFaction &&
										selectedFaction.symbol ===
											faction.symbol
											? "blue"
											: "primary"
									}
									key={faction.symbol}
									onClick={() =>
										setSelectedFaction(
											factions[selectedPage][index]
										)
									}
								>
									<CardActionArea>
										<CardHeader
											title={faction.name}
											subheader={
												faction.isRecruiting ? (
													<Typography>
														Recruiting{" "}
														{
															<CheckCircleOutline color="success" />
														}
													</Typography>
												) : (
													<Typography>
														Not Recruiting{" "}
														{
															<CancelOutlined color="error" />
														}
													</Typography>
												)
											}
										/>
										<CardContent className="grid grid-cols-2 gap-2 place-items-center">
											{faction.traits?.map(trait => (
												<Tooltip
													key={trait.symbol}
													title={trait.description}
												>
													<div className="flex flex-col justify-center items-center m-1">
														{getTraitIcon(trait)}
														<Typography variant="body2">
															{trait.name}
														</Typography>
													</div>
												</Tooltip>
											))}
										</CardContent>
									</CardActionArea>
								</Card>
							))}
						</div>
						{selectedFaction ? (
							<Card className="justify-self-end shrink-0 w-1/4 h-full m-5">
								<CardHeader
									className={
										selectedFaction.isRecruiting
											? ""
											: "bg-red-500"
									}
									title={selectedFaction.name}
									subheader={
										selectedFaction.isRecruiting ? (
											<Typography>
												Recruiting{" "}
												{
													<CheckCircleOutline color="success" />
												}
											</Typography>
										) : (
											<Typography>
												Not Recruiting{" "}
												{
													<CancelOutlined color="error" />
												}
											</Typography>
										)
									}
								/>
								<CardContent className="flex flex-col grow">
									<div className="mb-2">
										<Typography>
											{selectedFaction.description}
										</Typography>
									</div>
									<div className="mv-4 overflow-y-auto">
										{selectedFaction.traits.map(trait => (
											<Accordion
												key={trait.symbol}
												expanded={
													expandedTrait ===
													trait.symbol
												}
												onChange={(e, isExpanded) =>
													setExpandedTrait(
														isExpanded
															? trait.symbol
															: ""
													)
												}
											>
												<AccordionSummary
													id={`${trait.symbol.toLowerCase()}-summary`}
													expandIcon={
														<ExpandMoreRounded />
													}
												>
													{getTraitIcon(trait)}
													<Typography>
														{trait.name}
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography>
														{trait.description}
													</Typography>
												</AccordionDetails>
											</Accordion>
										))}
									</div>
								</CardContent>
								<CardActions>
									{selectedFaction.isRecruiting ? (
										<TextField
											required
											id="username-input"
											variant="standard"
											label="Username"
											value={username}
											onChange={e =>
												setUsername(e.target.value)
											}
										/>
									) : (
										<Tooltip title="This faction is not recruiting, so cannot be selected">
											<TextField
												required
												disabled
												id="username-input"
												variant="standard"
												label="Username"
												value={username}
												onChange={e =>
													setUsername(e.target.value)
												}
											/>
										</Tooltip>
									)}
									<Button disabled={!username}>Create</Button>
								</CardActions>
							</Card>
						) : null}
					</div>
					<Pagination
						className="m-3 shrink-0"
						variant="outlined"
						color="primary"
						count={factions.length}
						onChange={(
							event: React.ChangeEvent<unknown>,
							page: number
						) => setSelectedPage(page - 1)}
					/>
				</div>
			) : null}
		</Paper>
	);
}

export default NewAgent;
