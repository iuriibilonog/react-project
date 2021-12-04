import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
// import { AccountCircle } from '@material-ui/icons';

const useCalendar = makeStyles(() => ({
  noBorder: {
    border: 'none',
  },
}));

const TextInput = () => {
  //   console.log(props);
  //   const { onChange, type } = props;
  const calendar = useCalendar();

  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="phoneNumber"
      disableUnderline={false}
      // label="Phone Number"

      classes={{ notchedOutline: calendar.input }}
      // onChange={handlePhoneNumberChange}
      className={calendar.textField}
      placeholder="Phone Number"
      InputProps={{
        startAdornment: <InputAdornment position="start">{/* <AccountCircle /> */}</InputAdornment>,
        classes: { notchedOutline: calendar.noBorder },
      }}
    />
  );
};

export default TextInput;
