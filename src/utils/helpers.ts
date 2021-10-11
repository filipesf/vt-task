import { Scan } from './types';

export const defaultTableColumns = ['Team', 'Average', 'Total'];

export const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue;

export const getCurrentTeamScans = (teamName: string, data: any[]) =>
  data.filter((scan) => scan.teamName === teamName).filter((scan) => scan.date);

export const getScannedMonthsName = (data: Scan[]) => data.map((scan) => scan.date && getMonthName(scan.date));

export const getScannedWeeksName = (data: Scan[]) => data.map((scan) => scan.date && getWeekName(scan.date));

export const calcSumScans = (values: number[]) => values.reduce(reducer);

export const calcAverageScans = (scannedRows: number, scannedTotal: number) => {
  const calcAverage = scannedTotal / scannedRows;

  return parseFloat(calcAverage.toString()).toFixed(2) || 0;
};

export const getTotalScansPerTeam = (teamName: string, scans: Scan[]): number => {
  const totalScansPerTeam = scans.filter((scan) => scan.totalScans).filter((scan) => scan.teamName === teamName)[0];

  return totalScansPerTeam?.totalScans || 0;
};

export const getAverageScansPerTeam = (teamName: string, scans: Scan[]) => {
  const totalScans = scans.filter((scan) => !scan.totalScans).filter((scan) => scan.teamName === teamName);
  const totalScansPerTeam = getTotalScansPerTeam(teamName, scans);

  return calcAverageScans(totalScans.length, totalScansPerTeam) || 0;
};

export const getWeekName = (date: string): string => `Week ${getWeekOfMonth(date)} of ${getMonthName(date)}`;

export const getWeekOfMonth = (date: string) => {
  const weekDate = new Date(date);
  const adjustedDate = weekDate.getDate() + weekDate.getDay();
  const prefixes = ['0', '1', '2', '3', '4', '5'];

  return parseInt(prefixes[0 | (adjustedDate / 7)]) + 1;
};

export const getMonthName = (date: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = new Date(date).getMonth();

  return months[month];
};

export const formatDate = (date: Date | null) => {
  let day = '' + date.getDate();
  let month = '' + (date.getMonth() + 1);
  let year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};
