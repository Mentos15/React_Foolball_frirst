export interface IRootSelectors{
  fetchs: {
    state: object;
    teams:[
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
  };
  main:{
    teams:[
      {
        teams: string;
        id: number;
      }
    ]
  };
  persons:{
    players:[
      {
        plyaers:string;
        id:number;
      }
    ]
  };
  squad:{
    players: [
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
    ];
    team:[
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
    ];
    teams: [];
  };

}