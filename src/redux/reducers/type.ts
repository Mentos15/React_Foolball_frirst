export interface IActionTeams{
  payload: {
    count: number;
    filters: {};
    teams: [{
      address: string;
      area: {id: number, name: string}
      clubColors: string;
      crestUrl: string;
      email: string;
      founded: number;
      id: number;
      lastUpdated: string;
      name: string;
      phone: string;
      shortName: string;
      tla: string;
      venue: string;
      website: string;
    }];
    type: string;
  };
  type: string;
}

export interface IActionSquad{
  payload: {
    activeCompetitions: Array<object>;
    address: string;
    area: {id: number, name: string}
    clubColors: string;
    crestUrl: string;
    email: string;
    founded: number
    id: number
    lastUpdated:string;
    name: string;
    phone: string;
    shortName: string;
    squad: Array<object>;
    tla: string;
    venue: string;
    website: string;
  };
  type: string;
}

export interface IPayloadMain{
  type:string;
  payload:{
    id:number;
    teams: string;
  }
}

export interface IPayloadPersons{
  type: string;
  payload:{
    id: number;
    players: string;
  }
}

export interface IStateMain{  
      teams: string;
      id: number;
}
export interface IStatePersons{  
  players: string;
  id: number;
}

export interface IStateFetchPersons{
  players:[
    {
      countryOfBirth: string;
      dateOfBirth: string;
      id:  number;
      name: string;
      nationality: string;
      position: string;
      role: string;
      shirtNumber: number;
    }
  ]
  team:Array<object>;
  teams: Array<any>;
}

export interface IStateFetchTeams{
  state: object;
  teams: [
    {
      address: string;
      area: {id: number, name: string}
      clubColors: string;
      crestUrl: string;
      email: string;
      founded: number
      id: number
      lastUpdated:string;
      name: string;
      phone: string;
      shortName: string;
      squad: Array<object>;
      tla: string;
      venue: string;
      website: string;
    }
  ]
}

