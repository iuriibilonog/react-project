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
import NavigationBetweenCategoryes from './NavigationBetweenCategoryes';
import { useLocation, useRouteMatch } from 'react-router';
import { addExpenseTransaction, addIncomeTransaction } from '../../redux/transactions-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import '../../utils/variables.css';
const month2 = new Date().getMonth() + 1;
const month = new Date().toLocaleString('ru', {
  month: 'long',
});
// const year = new Date().getFullYear();
// const date = new Date().getDate();
// console.log(`${date}-${month2}-${year}`);

const FormAddCategory = () => {
  const [value, setValue] = React.useState(new Date());
  const ariaLabel = { 'aria-label': 'description' };
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleInputChange = event => {
    setCategory(event.target.value);
  };
  const newDate = () => {
    console.log(value);
    const newDateValue = format(value, 'yyyy-MM-dd');
    console.log(newDateValue);
    return newDateValue;
  };
  const date = newDate();

  const dispatch = useDispatch();

  const handleChange = event => {
    setAmount(event.target.value);
  };

  let isSpend = '';
  const { pathname } = useLocation();
  pathname === '/spend' ? (isSpend = true) : (isSpend = false);
  console.log(
    'Date ' + date,
    'description ' + description,
    'category ' + category,
    'amount ' + amount,
  );
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
  // const [date, setDate] = useState(new Date());
  const classes = useStyles();
  return (
    <>
      <NavigationBetweenCategoryes />
      <form onSubmit={handleFormSubmit}>
        <div className={s.containerForm}>
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
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={ruLocale}
            // className={css.textInpt}
            // id={s.inputStyle}
            // sx={{ width: 289 + 'px', height: 50 + 'px', padding: 0, borderRadius: 10 + 'px' }}
          >
            <DatePicker
              fullWidth
              className={css.textInpt}
              size="small"
              value={value}
              onChange={newValue => setValue(newValue)}
              renderInput={params => <TextField {...params} size="small" />}
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
          <TextField
            // style={{ color: var(--font-tertiary) }}
            className={css.textInpt}
            id="outlined"
            fullWidth
            //   id={s.inputStyle}
            label={textInputName}
            name="textInput" //пусте поле не допускати
            // variant="standard"
            onChange={handleTextChange}
            size="small"

            // sx={{ width: 289 + 'px', height: 50 + 'px', padding: 0, borderRadius: 10 + 'px' }}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{categoryName}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label={categoryName}
                onChange={handleInputChange}
                name="select"
                size="small"
              >
                {data.map(item => {
                  return (
                    <MenuItem key={item.id} value={item.label}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              size="small"
              id="outlined-adornment-weight"
              value={amount}
              onChange={handleChange}
              placeholder="0.00"
              type="number" //0 не можна
              endAdornment={
                <InputAdornment position="end">
                  <img src={calculator} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* <Stack spacing={2} direction="row"> */}
        {/* <button type="submit">Button</button>
        <CustomButton>Disabled</CustomButton> */}
        <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">
          ввод
        </button>
        <button className={s.authBtn} type="button">
          Очистить
        </button>
        {/* </Stack> */}
      </form>
    </>
  );
};

export default FormAddCategory;
