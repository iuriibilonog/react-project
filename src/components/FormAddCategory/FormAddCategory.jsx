import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import calculator from '../../img/calculator.svg';
import s from './FormAddCategory.module.css';
import { makeStyles } from '@material-ui/core/styles';
import ruLocale from 'date-fns/locale/ru';
import { format } from 'date-fns';
import DatePicker from '@mui/lab/DatePicker';
import expenceJson from '../../data/expenselcon.json';
import incomesJson from '../../data/incomeIcon.json';
import { addExpenseTransaction, addIncomeTransaction } from '../../redux/transactions-operations';
import { useDispatch } from 'react-redux';
import '../../utils/variables.css';
import CustomInput from './StyledInputElement/StyledInputElement';
import StyledInputCalc from './Select/StyledCalculator/StyledCalculator';
import iconCalendar from '../../img/calendar.svg';
import Box from '@mui/material/Box';
import { IconButton, InputAdornment } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const FormAddCategory = ({ isExpenses }) => {
  const [value, setValue] = React.useState(new Date());
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleInputChange = event => {
    setCategory(event.target.value);
  };
  React.useEffect(() => {
    reset();
  }, [isExpenses]);

  const newDate = () => {
    try {
      const newDateValue = format(value, 'yyyy-MM-dd');
      return newDateValue;
    } catch (error) {
      alert('Введите правильную дату!');
      return false;
    }
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

  const handleFormSubmit = e => {
    e.preventDefault();
    try {
      if (newDate()) {
        isExpenses === 'expenses'
          ? dispatch(addExpenseTransaction({ date, description, category, amount }))
          : dispatch(addIncomeTransaction({ date, description, category, amount }));
      }
    } catch (error) {
      alert('Введите правильную дату!');
    }
  };
  const handleTextChange = event => {
    setDescription(event.target.value);
  };
  const useStyles = makeStyles(theme => ({
    // textInpt: {
    //   borderRadius: '30px',
    //   width: '289px',
    //   outlineColor: 'black',
    // },
    input: {
      '&:before': {
        // normal
        borderBottom: '1px solid orange',
      },
      '&:after': {
        // focused
        borderBottom: `3px solid green`,
      },
      '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before': {
        // hover
        borderBottom: `2px solid purple`,
      },
    },
  }));
  const classes = useStyles();
  const handleDateChange = newValue => {
    setValue(newValue);
  };
  const css = useStyles();
  let data = '';
  let categoryName = '';
  let textInputName = '';

  data = isExpenses === 'expenses' ? expenceJson : incomesJson;
  categoryName = isExpenses === 'expenses' ? 'Категория товара' : 'Категория дохода';
  textInputName = isExpenses === 'expenses' ? 'Описание товара' : 'Описание дохода';

  const reset = () => {
    setValue(new Date());
    setCategory('');
    setDescription('');
    setAmount('');
  };
  const theme = createTheme({
    components: {
      // Name of the component
      MuiIconButton: {
        styleOverrides: {
          // Name of the slot
          edgeEnd: {
            // Some CSS
            // paddingLeft: '20px',
            marginLeft: '16px',
            position: 'absolute',
            top: '-3px',
            left: '10px',
            '&:hover, :focus': {
              background: 'transparent',
            },
            ['@media (min-width:980px)']: {
              // eslint-disable-line no-useless-computed-key
              marginLeft: '30px',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          underline: {
            position: 'relative',
            paddingLeft: '40px',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: '30px',
            fill: 'none',
            background: 'none',
          },
        },
      },
    },
  });

  return (
    <>
      <form onSubmit={handleFormSubmit} className={s.formContainer}>
        <div className={s.calendarWrapper}>
          <div className={s.calendarHelper}></div>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={ruLocale}
            className={css.textInpt}
            id={s.inputStyle}
          >
            <ThemeProvider theme={theme}>
              <DatePicker
                keyboard={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ marginRight: { sm: '-20px', lg: '5px' }, paddingBottom: '3px' }}
                    >
                      <img src={iconCalendar} />
                    </InputAdornment>
                  ),
                }}
                className={classes.input}
                id={s.calendarStyle}
                size="small"
                value={value}
                onChange={handleDateChange}
                renderInput={params => (
                  <TextField
                    {...params}
                    size="small"
                    margin="dense"
                    variant="standard"
                    id={s.tmp}
                  />
                )}
                format="YYYY-MM-DD"
              />
            </ThemeProvider>
          </LocalizationProvider>

          <img className={s.calendarIconStyle} src={iconCalendar} />
        </div>
        <div className={s.InputsWrapper}>
          <CustomInput
            value={description}
            placeholder={textInputName}
            name="textInput"
            onChange={handleTextChange}
            autoComplete="off"
            required
          />
          <div className={s.containerForm}>
            <div className={s.selectWrappedtmp}>
              <select
                className={s.select}
                value={category}
                onChange={handleInputChange}
                placeholder={categoryName}
                required
              >
                <option value="" disabled>
                  {categoryName}
                </option>
                {data.map(item => {
                  return (
                    <option id="option" key={item.id} value={item.label}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={s.inpuImgWrapper}>
              <StyledInputCalc value={amount} onChange={handleChange} placeholder="0" required />
              <img className={s.calculatorImg} src={calculator} />
            </div>
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">
            ввод
          </button>
          <button className={s.authBtn} type="button" onClick={reset}>
            Очистить
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAddCategory;
