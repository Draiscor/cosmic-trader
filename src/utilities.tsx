import {
	AgricultureRounded,
	Diversity1Rounded,
	Diversity2Rounded,
	ExploreRounded,
	FactoryRounded,
	FavoriteRounded,
	FlagCircleRounded,
	GroupsRounded,
	HandshakeRounded,
	HelpRounded,
	Image,
	KeyRounded,
	MilitaryTechRounded,
	PaidRounded,
	PsychologyAltRounded,
	PsychologyRounded,
	RemoveRedEyeRounded,
	ScienceRounded,
	SettingsSuggestRounded,
	ShieldRounded,
	ShuffleRounded,
	TimerRounded,
	TipsAndUpdatesRounded
} from "@mui/icons-material";
import { FactionTrait } from "./definitions/factions";

function getTraitIcon(trait: FactionTrait) {
	switch (trait.symbol) {
		case "AGGRESSIVE":
			return (
				<img src="/crossed-swords.svg" alt="Aggressive trait icon" />
			);
		case "BRUTAL":
			return <img src="/crossed-axes.svg" alt="Brutal trait icon" />;
		case "COOPERATIVE":
			return <HandshakeRounded />;
		case "COLLABORATIVE":
			return <GroupsRounded />;
		case "CURIOUS":
			return <PsychologyAltRounded />;
		case "DEFENSIVE":
			return <ShieldRounded />
		case "EXPLORATORY":
			return <ExploreRounded />;
		case "FLEETING":
			return <TimerRounded />;
		case "FLEXIBLE":
			return <ShuffleRounded />;
		case "IMPERIALISTIC":
			return (
				<img src="/honoured-crown.svg" alt="Aggressive trait icon" />
			);
		case "INDUSTRIOUS":
			return <FactoryRounded />;
		case "INNOVATIVE":
			return <TipsAndUpdatesRounded />;
		case "INTELLIGENT":
			return <img src="brain.svg" alt="intelligent train icon" />;
		case "MILITARISTIC":
			return <MilitaryTechRounded />;
		case "PEACEFUL":
			return <Diversity1Rounded />;
		case "PROGRESSIVE":
			return <FavoriteRounded />;
		case "PROUD":
			return <FlagCircleRounded />;
		case "RESEARCH_FOCUSED":
			return <ScienceRounded />;
		case "RESOURCEFUL":
			return <SettingsSuggestRounded />;
		case "SECRETIVE":
			return <KeyRounded />;
		case "SELF_SUFFICIENT":
			return <AgricultureRounded />;
		case "SMUGGLERS":
			return <img src="thief.svg" alt="Smugglers trait icon" />;
		case "STRATEGIC":
			return <PsychologyRounded />;
		case "TREASURE_HUNTERS":
			return <PaidRounded />;
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
