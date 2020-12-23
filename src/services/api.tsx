import apisauce from "apisauce";

export const GENERAL_HEADERS = {
  "X-Auth-Token": "f71cc937e0304e22b362fd72d75649e1"
};

export const create = () => {
  const api = apisauce.create({
    baseURL: "https://api.football-data.org/v2/",
    headers: GENERAL_HEADERS,
  });

  const api2 = apisauce.create({
    baseURL: "https://api.football-data.org/v2/",
    headers: GENERAL_HEADERS,
  });


  const getTeams = () => {
    return api.get("teams");
  };

  const getPlayers = (teamId: string) => {
    return api2.get(`teams/${teamId}`);
  };

  return {
    getTeams,
    getPlayers,
  };
};