import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
  label: string;
  options: string[];
  empty?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
}

const Dropdown = ({ label, options, empty, onChange, disabled, required }: Props) => {
  const [option, setOption] = React.useState('');

  const handleChange = (value: string) => {
    onChange(value);
    setOption(value);
  };

  return (
    <FormControl>
      <InputLabel id={`dropdown-label-${label}`}>{label}</InputLabel>
      <Select
        labelId={`dropdown-label-${label}`}
        id='dropdown'
        value={option}
        label={label}
        disabled={disabled}
        required={required}
        onChange={(event) => handleChange(event.target.value)}>
        {empty && (
          <MenuItem value=''>
            <strong>{empty}</strong>
          </MenuItem>
        )}

        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
