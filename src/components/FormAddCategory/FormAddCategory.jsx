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
// import NavigationBetweenCategories from './NavigationBetweenCategoryes/NavigationBetweenCategoryes';
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

const FormAddCategory = ({isExpenses}) => {

  
  
  
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

  // let isSpend = '';
  // const { pathname } = useLocation();
  // pathname === '/spend' ? (isSpend = true) : (isSpend = false);
  console.log(
    'Date ' + date,
    'description ' + description,
    'category ' + category,
    'amount ' + amount,
  );
  const handleFormSubmit = e => {
    e.preventDefault();
    newDate();
    isExpenses==="expenses"
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


  data = isExpenses === "expenses" ? expenceJson: incomesJson;
  categoryName = isExpenses === "expenses"? 'Категория товара' : 'Категория дохода';
  textInputName = isExpenses === "expenses" ? 'Описание товара' :  'Описание дохода';
  
  
  console.log(isExpenses, categoryName)

  const reset = () => {
    setValue(new Date());
    setCategory('');
    setDescription('');
    setAmount('');
  };

  const classes = useStyles();
  return (
    <>
      {/* <NavigationBetweenCategories /> */}
      <form onSubmit={handleFormSubmit} className={s.formContainer}>
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
            required
            value={description}
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
                required
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
            <TextField
              size="small"
              id="outlined-adornment-weight"
              value={amount}
              onChange={handleChange}
              placeholder="0"
              required
              // min="0"
              // type="number" //0 не можна
              endAdornment={
                <InputAdornment position="end">
                  <img src={calculator} />
                </InputAdornment>
              }
              // inputProps={{ pattern: '^[1-9][0-9]{0,6}$' }}
            />
          </FormControl>
        </div>

        {/* <Stack spacing={2} direction="row"> */}
        {/* <button type="submit">Button</button>
        <CustomButton>Disabled</CustomButton> */}
        <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">
          ввод
        </button>
        <button className={s.authBtn} type="button" onClick={reset}>
          Очистить
        </button>
        {/* </Stack> */}
      </form>
    </>
  );
};

export default FormAddCategory;
