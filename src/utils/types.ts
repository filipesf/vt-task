import { AlertColor } from '@mui/material/Alert';

export interface Scan {
  teamName: string;
  date?: string;
  scansAWeek?: number;
  scansAMonth?: number;
  totalScans?: number;
}

export interface TableData {
  columns: string[];
  rows: (string | number)[][];
}

export interface NotifyProps {
  isOpen: boolean;
  message?: string;
  severity?: AlertColor;
  handleClose?: () => void;
}
