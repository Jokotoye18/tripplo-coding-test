export interface ISeason {
  name: string;
  abbreviation: string;
  seasonDisplay: string;
  season: number;
  standings: IStanding[];
}

export interface ILogo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: Date;
}

export interface ITeam {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: ILogo[];
}

export interface INote {
  color: string;
  description: string;
  rank: number;
}

export interface IStat {
  name: string;
  displayName: string;
  shortDisplayName: 'W' | 'L' | 'D';
  description: string;
  abbreviation: 'W' | 'L' | 'D';
  type: string;
  value: number;
  displayValue: string;
}

export interface IStanding {
  team: ITeam;
  notes: INote;
  stats: IStat[];
}
