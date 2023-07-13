import {
	AgricultureRounded,
	BrokenImageRounded,
	Diversity1Rounded,
	Diversity2Rounded,
	ExploreRounded,
	FactoryRounded,
	FavoriteRounded,
	FlagCircleRounded,
	GroupsRounded,
	HandshakeRounded,
	HelpRounded,
	ImportantDevicesRounded,
	KeyRounded,
	MilitaryTechRounded,
	PaidRounded,
	PsychologyAltRounded,
	PsychologyRounded,
	RemoveRedEyeRounded,
	ScienceRounded,
	SellRounded,
	SettingsSuggestRounded,
	ShieldRounded,
	ShuffleRounded,
	StoreRounded,
	TimerRounded,
	TipsAndUpdatesRounded
} from "@mui/icons-material";
import { FactionTrait } from "./definitions/factions";

function getTraitIcon(trait: FactionTrait) {
	switch (trait.symbol) {
		case "AGGRESSIVE":
			return (
				<img
					height={24}
					width={24}
					src="icons/crossed-swords.svg"
					alt="Aggressive trait icon"
				/>
			);
		case "BRUTAL":
			return (
				<img
					height={24}
					width={24}
					src="icons/crossed-axes.svg"
					alt="Brutal trait icon"
				/>
			);
		case "COOPERATIVE":
			return <HandshakeRounded />;
		case "COLLABORATIVE":
			return <GroupsRounded />;
		case "COMMERCIAL":
			return <SellRounded />;
		case "CURIOUS":
			return <PsychologyAltRounded />;
		case "DEFENSIVE":
			return <ShieldRounded />;
		case "EXPLORATORY":
			return <ExploreRounded />;
		case "FLEETING":
			return <TimerRounded />;
		case "FLEXIBLE":
			return <ShuffleRounded />;
		case "FRAGMENTED":
			return <BrokenImageRounded />;
		case "FREE_MARKETS":
			return <StoreRounded />;
		case "IMPERIALISTIC":
			return (
				<img
					height={24}
					width={24}
					src="icons/honoured-crown.svg"
					alt="Aggressive trait icon"
				/>
			);
		case "INDUSTRIOUS":
			return <FactoryRounded />;
		case "INNOVATIVE":
			return <TipsAndUpdatesRounded />;
		case "INTELLIGENT":
			return (
				<img
					height={24}
					width={24}
					src="icons/brain.svg"
					alt="intelligent train icon"
				/>
			);
		case "MILITARISTIC":
			return <MilitaryTechRounded />;
		case "PEACEFUL":
			return <Diversity1Rounded />;
		case "PROGRESSIVE":
			return <FavoriteRounded />;
		case "PROUD":
			return <FlagCircleRounded />;
		case "REBELLIOUS":
			return (
				<img
					height={24}
					width={24}
					src="icons/rebel.svg"
					alt="Rebellious train icon"
				/>
			);
		case "RESEARCH_FOCUSED":
			return <ScienceRounded />;
		case "RESOURCEFUL":
			return <SettingsSuggestRounded />;
		case "SECRETIVE":
			return <KeyRounded />;
		case "SELF_SUFFICIENT":
			return <AgricultureRounded />;
		case "SMUGGLERS":
			return (
				<img
					height={24}
					width={24}
					src="icons/thief.svg"
					alt="Smugglers trait icon"
				/>
			);
		case "STRATEGIC":
			return <PsychologyRounded />;
		case "TREASURE_HUNTERS":
			return <PaidRounded />;
		case "TECHNOLOGICALLY_ADVANCED":
			return <ImportantDevicesRounded />;
		case "UNITED":
			return <Diversity2Rounded />;
		case "VISIONARY":
			return <RemoveRedEyeRounded />;
		default:
			console.log(`Fuck knows what icon to use for ${trait.name} 🤷`);
			return <HelpRounded />;
	}
}

export { getTraitIcon };
