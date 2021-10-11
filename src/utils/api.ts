const baseApiUrl = 'http://stubber.test.visiblethread.com';

export const apiGet = (url: string) =>
  fetch(baseApiUrl + url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));

export const apiPost = async (url: string, data: string) => {
  const response = await fetch(baseApiUrl + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getWeeklyScansForMonth = (date: string, teamName: string) => apiGet(`/scans/${teamName}/${date}`);

export const getMonthlyScans = (amount: number) => apiGet(`/scans/monthly/${amount}`);

export const getWeeklyScans = (amount: number) => apiGet(`/scans/weekly/${amount}`);

export const getAllTeams = () => apiGet(`/teams/allNames`);

export const addTeam = (data: string) => apiPost(`/teams/add`, data);
