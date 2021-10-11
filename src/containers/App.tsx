import React, { useEffect, useState } from 'react';
import { Button, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from 'components/ui/Header';
import Table from 'components/ui/Table';
import theme from 'components/ui/theme';
import DatePicker from 'components/ui/DatePicker';
import Dropdown from 'components/ui/Dropdown';
import { TextField } from '@mui/material';
import Notify from 'components/ui/Notify';
import { NotifyProps, Scan, TableData } from 'utils/types';
import { AddNewTeamForm, AppContainer, Filters } from 'components/ui/Containers';
import { addTeam, getAllTeams, getMonthlyScans, getWeeklyScans, getWeeklyScansForMonth } from 'utils/api';
import {
  calcSumScans,
  calcAverageScans,
  defaultTableColumns,
  getAverageScansPerTeam,
  getCurrentTeamScans,
  getScannedMonthsName,
  getScannedWeeksName,
  getTotalScansPerTeam,
} from 'utils/helpers';

const App: React.FC = () => {
  const [allTeams, setAllTeams] = useState<string[]>([]);
  const [weeklyScansForMonth, setWeeklyScansForMonth] = useState<Scan[]>([]);
  const [weeklyScans, setWeeklyScans] = useState<Scan[]>([]);
  const [monthlyScans, setMonthlyScans] = useState<Scan[]>([]);
  const [tableData, setTableData] = useState<TableData>({ columns: [], rows: [] });
  const [selectedReportType, setSelectedReportType] = useState<string>(undefined);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(6);
  const [selectedTeam, setSelectedTeam] = useState<string>(undefined);
  const [selectedDate, setSelectedDate] = useState<string>(undefined);
  const [notify, setNotify] = useState<NotifyProps>({ isOpen: false });
  const [newTeam, setNewTeam] = useState<string>();

  const isWeeklyForMonthField = selectedReportType === 'Weekly for Month';
  const isTeamsListDisabled = !isWeeklyForMonthField;
  const isDatepickerDisabled = !isWeeklyForMonthField;
  const isScansPerReportDisabled =
    (!selectedReportType && !isWeeklyForMonthField) || (!!selectedReportType && isWeeklyForMonthField);

  const callGetWeeklyScansForMonth = (date: string, teamName: string) => {
    getWeeklyScansForMonth(date, teamName).then((scans: Scan[]) => setWeeklyScansForMonth(scans));
  };

  const callGetWeeklyScans = (amount: number) => {
    getWeeklyScans(amount).then((scans: Scan[]) => setWeeklyScans(scans));
  };

  const callGetMonthlyScans = (amount: number) => {
    getMonthlyScans(amount).then((scans: Scan[]) => setMonthlyScans(scans));
  };

  const callGetAllTeams = () => {
    getAllTeams().then((teams: string[]) => setAllTeams(teams));
  };

  const handleAddNewTeam = () => {
    const isNewTeamValid = typeof newTeam === 'string';
    const shouldAddNewTeam = !allTeams.includes(newTeam);

    isNewTeamValid
      ? shouldAddNewTeam
        ? addTeam(newTeam).then((data: boolean) => {
          setNotify({
            isOpen: true,
            message: `${newTeam} registered successfully`,
            severity: 'success',
          });

          data && setAllTeams([...allTeams, newTeam]);
          setNewTeam('');
        })
        : setNotify({
          isOpen: true,
          message: `${newTeam} is already registered.`,
          severity: 'error',
        })
      : setNotify({
        isOpen: true,
        message: 'Please, insert a valid team name.',
        severity: 'error',
      });
  };

  const handleTeamWeeklyScansForMonthData = (teamName: string) => {
    const scannedWeekLabels = getScannedWeeksName(weeklyScansForMonth);
    const scannedDataAWeek = weeklyScansForMonth.map((scan) => scan.totalScans);
    const summedScan = calcSumScans(scannedDataAWeek);
    const averageSummedScan = calcAverageScans(scannedDataAWeek.length, summedScan);

    const columns = [...defaultTableColumns, ...scannedWeekLabels];
    const rows = [[teamName, averageSummedScan, summedScan, ...scannedDataAWeek]];

    setTableData({ columns, rows });
  };

  const handleWeeklyTableData = () => {
    const columns = allTeams.map((team: string) => {
      const currentTeamScans = getCurrentTeamScans(team, weeklyScans);
      const scannedWeekLabels = getScannedWeeksName(currentTeamScans);

      return [...defaultTableColumns, ...scannedWeekLabels];
    })[0];

    const rows = allTeams.map((team: string) => {
      const currentTeamScans = getCurrentTeamScans(team, weeklyScans);
      const scannedDataAWeek = currentTeamScans.map((scan: Scan) => scan.scansAWeek);

      return [
        team,
        getAverageScansPerTeam(team, weeklyScans),
        getTotalScansPerTeam(team, weeklyScans),
        ...scannedDataAWeek,
      ];
    });

    setTableData({ columns, rows });
  };

  const handleMonthlyTableData = () => {
    const columns = allTeams.map((team: string) => {
      const currentTeamScans = getCurrentTeamScans(team, monthlyScans);
      const scannedMonthsLabels = getScannedMonthsName(currentTeamScans);

      return [...defaultTableColumns, ...scannedMonthsLabels];
    })[0];

    const rows = allTeams.map((team: string) => {
      const currentTeamScans = getCurrentTeamScans(team, monthlyScans);
      const scannedDataAMonth = currentTeamScans.map((scan: Scan) => scan.scansAMonth);

      return [
        team,
        getAverageScansPerTeam(team, monthlyScans),
        getTotalScansPerTeam(team, monthlyScans),
        ...scannedDataAMonth,
      ];
    });

    setTableData({ columns, rows });
  };

  const generateReports = () => {
    selectedReportType === 'Weekly for Month' && callGetWeeklyScansForMonth(selectedDate, selectedTeam);
    selectedReportType === 'Monthly' && callGetMonthlyScans(selectedPeriod);
    selectedReportType === 'Weekly' && callGetWeeklyScans(selectedPeriod);
  };

  useEffect(() => {
    callGetAllTeams();
  }, []);

  useEffect(() => {
    handleWeeklyTableData();
  }, [weeklyScans]);

  useEffect(() => {
    handleMonthlyTableData();
  }, [monthlyScans]);

  useEffect(() => {
    selectedTeam && handleTeamWeeklyScansForMonthData(selectedTeam);
  }, [weeklyScansForMonth]);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Notify {...notify} handleClose={() => setNotify({ ...notify, isOpen: false })} />
      <Header>
        <AddNewTeamForm>
          <TextField
            label='Team name'
            variant='outlined'
            size='small'
            value={newTeam}
            onChange={(event) => setNewTeam(event.target.value)}
          />
          <Button color='primary' variant='contained' onClick={handleAddNewTeam}>
            Add New Team
          </Button>
        </AddNewTeamForm>
      </Header>

      <AppContainer>
        <Filters>
          <Dropdown
            label='Report type'
            options={['Weekly', 'Monthly', 'Weekly for Month']}
            onChange={setSelectedReportType}
          />

          <TextField
            label='Scans per report'
            variant='outlined'
            type='number'
            value={selectedPeriod}
            onChange={(event) => setSelectedPeriod(parseInt(event.target.value))}
            disabled={isScansPerReportDisabled}
          />

          <Dropdown
            label='Team'
            options={allTeams}
            empty='All teams'
            onChange={setSelectedTeam}
            disabled={isTeamsListDisabled}
          />

          <DatePicker onChange={setSelectedDate} disabled={isDatepickerDisabled} />

          <Button color='primary' variant='contained' onClick={generateReports}>
            Generate Report
          </Button>
        </Filters>

        {!!tableData.rows.length && <Table {...tableData} />}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
