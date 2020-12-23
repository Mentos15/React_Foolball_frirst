export type FallTeamInfoProps ={
  allInfo: [
    {
      countryOfBirth: string;
      dateOfBirth: string;
      id: number;
      name: string;
      nationality: string;
      position: string;
      role: string;
      shirtNumber: number;  
    }
  ],
  location:{
    hash: string;
    key: string;
    pathname: any;
    search: string;
    state: any;
  }
  
}

