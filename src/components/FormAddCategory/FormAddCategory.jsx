import * as React from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Container from '../Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import calculator from '../../img/calculator.svg';
import s from './FormAddCategory.module.css';
import { makeStyles } from '@material-ui/core/styles';
import ruLocale from 'date-fns/locale/ru';
import { format } from 'date-fns';
import DatePicker from '@mui/lab/DatePicker';
import expenceJson from '../../data/expenselcon.json';
import incomesJson from '../../data/incomeIcon.json';
import NavigationBetweenCategories from './NavigationBetweenCategoryes/NavigationBetweenCategoryes';
import { useLocation, useRouteMatch } from 'react-router';
import { addExpenseTransaction, addIncomeTransaction } from '../../redux/transactions-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

import '../../utils/variables.css';
import UnstyledInput from './StyledInputElement/StyledInputElement';
import CustomInput from './StyledInputElement/StyledInputElement';
import SelectCustome from './Select/Select';
import StyledInputCalc from './Select/StyledCalculator/StyledCalculator';
import TextInput from './StyledInputElement/Calendar/Calendar';
import iconCalendar from '../../img/calendar.svg';
const month2 = new Date().getMonth() + 1;
const month = new Date().toLocaleString('ru', {
  month: 'long',
});
// const year = new Date().getFullYear();
// const date = new Date().getDate();
// console.log(`${date}-${month2}-${year}`);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    // borderRadius: 20,

    // height: 29,
    borderTop: '2px solid #F5F6FB',
    borderBottom: '2px solid #F5F6FB',
    pading: 0,
    width: 156,
    fontSize: 12,
    // padding: '10px 26px 10px 12px',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    // '&:focus': {
    //   // borderColor: '#80bdff',
    // },
  },
}));

const FormAddCategory = () => {
  const [value, setValue] = React.useState(new Date());
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleInputChange = event => {
    setCategory(event.target.value);
  };

  const newDate = () => {
    const newDateValue = format(value, 'yyyy-MM-dd');
    return newDateValue;
  };
  const date = newDate();

  const dispatch = useDispatch();

  const handleChange = event => {
    event.target.value === '' || event.target.value === '-'
      ? setAmount('')
      : parseInt(event.target.value) <= 1000000 &&
        parseInt(event.target.value) !== 0 &&
        setAmount(parseInt(event.target.value));
  };

  let isSpend = '';
  const { pathname } = useLocation();
  pathname === '/spend' ? (isSpend = true) : (isSpend = false);

  const handleFormSubmit = e => {
    e.preventDefault();
    newDate();
    isSpend
      ? dispatch(addExpenseTransaction({ date, description, category, amount }))
      : dispatch(addIncomeTransaction({ date, description, category, amount }));
  };
  const handleTextChange = event => {
    setDescription(event.target.value);
  };
  const useStyles = makeStyles(theme => ({
    textInpt: {
      //   border: '2px solid black',
      borderRadius: '30px',
      width: '289px',
      //   height: '30px',
      outlineColor: 'black',
    },
  }));
  const css = useStyles();
  let data = '';
  let categoryName = '';
  let textInputName = '';
  isSpend ? (data = expenceJson) : (data = incomesJson);
  isSpend ? (categoryName = 'Категория товара') : (categoryName = 'Категория дохода');
  isSpend ? (textInputName = 'Описание товара') : (textInputName = 'Описание дохода');
  const reset = () => {
    setValue(new Date());
    setCategory('');
    setDescription('');
    setAmount('');
  };

  // const useStyles = makeStyles(() => ({
  //   noBorder: {
  //     border: 'none',
  //   },
  // }));
  const useCalendar = makeStyles(() => ({
    // noBorder: {
    //   border: 'none',
    // },
    underline: {
      '&&&:before': {
        borderBottom: 'none',
      },
      '&&:after': {
        borderBottom: 'none',
      },
    },
  }));
  const calendar = useCalendar();
  const classes = useStyles();
  return (
    <>
      {/* <NavigationBetweenCategories /> */}
      <form onSubmit={handleFormSubmit} className={s.formContainer}>
        <div className={s.calendarWrapper}>
          <div className={s.calendarHelper}></div>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={ruLocale}
            className={css.textInpt}
            id={s.inputStyle}
            // sx={{ width: 289 + 'px', height: 50 + 'px', padding: 0, borderRadius: 10 + 'px' }}
          >
            {/* <TextInput /> */}
            <DatePicker
              id={s.calendarStyle}
              // fullWidth
              // className={css.textInpt}
              size="small"
              value={value}
              onChange={newValue => setValue(newValue)}
              renderInput={params => (
                <TextField
                  {...params}
                  size="small"
                  // sx={{ disableUnderline: 'true' }}
                  // disableUnderline={true}
                  // classes={{ notchedOutline: calendar.input }}
                  className={calendar.textField}
                  // classes={{ notchedOutline: calendar.underline }}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">{<img src={calculator} />}</InputAdornment>
                  //   ),
                  //   // classes: { calendar },
                  //   // disableUnderline: true,
                  // }}
                  // label={ '<Un-labeled>'}
                  // InputLabelProps={{ shrink: true }} // stop from animating.
                  // inputProps={{ className: classes.fieldInput }}
                  // className={classes.field}
                  margin="dense"
                  variant="standard"
                  id={s.tmp}
                />
              )}
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
          <img className={s.calendarIconStyle} src={iconCalendar} />
        </div>
        <div className={s.InputsWrapper}>
          <CustomInput
            style={{ outerHeight: '40px' }}
            // className={s.tmp}
            value={description}
            label={textInputName}
            name="textInput"
            onChange={handleTextChange}
          />

          <div className={s.containerForm}>
            {/* {UnstyledInput()} */}
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Custom input"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              value={value}
              onChange={newValue => {
                setDate(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input ref={inputRef} {...inputProps} className={classes.picker} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider> */}
            {/* <div> */}
            {/* <FormControl sx={{ m: 0 }} variant="standard"> */}
            {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={category}
              label={categoryName}
              onChange={handleInputChange}
              // value={age}
              // onChange={handleChange}
              input={<BootstrapInput />}
            >
              {data.map(item => {
                return (
                  <MenuItem key={item.id} value={item.label}>
                    {item.label}
                  </MenuItem>
                );
              })}
            </Select>
            {/* </FormControl> */}
            {/* </div> */}
            {/* <TextField
            // style={{ color: var(--font-tertiary) }}
            className={css.textInpt}
            id="outlined"
            fullWidth
            required
            // value={description}
            // label={textInputName}
            // name="textInput"
            // onChange={handleTextChange}
            size="small"

            // sx={{ width: 289 + 'px', height: 50 + 'px', padding: 0, borderRadius: 10 + 'px' }}
          /> */}
            {/* <SelectCustome value={category} label={categoryName} onChange={handleInputChange} /> */}
            {/* <Box sx={{ minWidth: 120 }}> */}
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{categoryName}</InputLabel> */}
            {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label={categoryName}
                onChange={handleInputChange}
                name="select"
                size="small"
                required
              >
                {data.map(item => {
                  return (
                    <MenuItem key={item.id} value={item.label}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select> */}
            {/* </FormControl> */}
            {/* </Box> */}
            <div className={s.inpuImgWrapper}>
              <StyledInputCalc value={amount} onChange={handleChange} placeholder="0" required />
              <img className={s.calculatorImg} src={calculator} />
            </div>
            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
            {/* <OutlinedInput
              // size="small"
              // id="outlined-adornment-weight"
              // value={amount}
              // onChange={handleChange}
              // placeholder="0"
              // required
              // min="0"
              // type="number" //0 не можна
              endAdornment={
                <InputAdornment position="end">
                  <img src={calculator} />
                </InputAdornment>
              }
              // inputProps={{ pattern: '^[1-9][0-9]{0,6}$' }}
            /> */}
            {/* </FormControl> */}
          </div>
        </div>
        {/* <Stack spacing={2} direction="row"> */}
        {/* <button type="submit">Button</button>
        <CustomButton>Disabled</CustomButton> */}
        <div className={s.buttonWrapper}>
          <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">
            ввод
          </button>
          <button className={s.authBtn} type="button" onClick={reset}>
            Очистить
          </button>
        </div>
        {/* </Stack> */}
      </form>
    </>
  );
};

export default FormAddCategory;
