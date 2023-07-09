export type Faction = {
	name: string;
	description: string;
	isRecruiting: boolean;
	symbol: string;
	traits: FactionTrait[];
};

export type FactionTrait = {
	symbol: string;
	name: string;
	description: string;
}