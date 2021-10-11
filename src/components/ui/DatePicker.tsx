import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { formatDate } from 'utils/helpers';

interface Props {
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
}

const DatePicker = ({ onChange, disabled, required }: Props) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setValue(date);
    onChange(formatDate(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label='Period'
        value={value}
        onChange={(newValue) => handleChange(newValue)}
        renderInput={(params) => <TextField required={required} {...params} />}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
