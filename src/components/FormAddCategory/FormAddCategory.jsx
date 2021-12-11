import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import calculator from '../../img/calculator.svg';
import s from './FormAddCategory.module.css';
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
import { InputAdornment } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import theme from './CalendarStyles';
import BootstrapInput from './SelectStyles';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

const FormAddCategory = ({ isExpenses }) => {
  const [value, setValue] = React.useState(new Date());
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const dispatch = useDispatch();
  const handleInputChange = event => {
    setCategory(event.target.value);
  };
  React.useEffect(() => {
    reset();
  }, [isExpenses]);

  const newDate = () => {
    try {
      if (value > new Date()) {
        Notify.failure('Ця дата поки не доступна! Виберіть дату, яка вже настала!');
        return;
      }
      const newDateValue = format(value, 'yyyy-MM-dd');
      return newDateValue;
    } catch (error) {
      Notify.failure('Введите правильную дату!');
      return false;
    }
  };

  const date = newDate();

  const handleChange = event => {
    event.target.value === '' || event.target.value === '-'
      ? setAmount('')
      : parseInt(event.target.value) <= 1000000 &&
        parseInt(event.target.value) !== 0 &&
        setAmount(parseInt(event.target.value));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (description.length <= 3 || description.length >= 20 || !isNaN(description)) {
      Notify.failure('Описание должно бить не менше 3 и не больше 20 символов');
      return;
    }
    try {
      if (newDate()) {
        isExpenses === 'expenses'
          ? dispatch(addExpenseTransaction({ date, description, category, amount }))
          : dispatch(addIncomeTransaction({ date, description, category, amount }));
        reset();
      }
    } catch (error) {
      Notify.failure('Введите правильную дату!');
    }
  };
  const handleTextChange = event => {
    setDescription(event.target.value);
  };
  const handleDateChange = newValue => {
    setValue(newValue);
  };
  // let data = '';
  // let categoryName = '';
  // let textInputName = '';

  let data = isExpenses === 'expenses' ? expenceJson : incomesJson;
  let categoryName = isExpenses === 'expenses' ? 'Категория товара' : 'Категория дохода';
  let textInputName = isExpenses === 'expenses' ? 'Описание товара' : 'Описание дохода';

  const reset = () => {
    setValue(new Date());
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <>
      <div className={s.formContainer}>
        {' '}
        <form onSubmit={handleFormSubmit}>
          <div className={s.calendarWrapper}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale} id={s.inputStyle}>
              <ThemeProvider theme={theme}>
                <DatePicker
                  maxDate={new Date()}
                  keyboard={true}
                  components={{
                    OpenPickerIcon: MoreTimeIcon,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          marginRight: { sm: '-3px', md: '-4px', lg: '0px', xl: '5px' },
                          paddingBottom: '5px',
                        }}
                      >
                        <img src={iconCalendar} />
                      </InputAdornment>
                    ),
                  }}
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
                      sx={{
                        '.css-r7ndxa-MuiInputBase-root-MuiInput-root:after': {
                          borderBottom: 'none',
                        },
                      }}
                    />
                  )}
                  format="YYYY-MM-DD"
                />
              </ThemeProvider>
            </LocalizationProvider>

            {/* <img className={s.calendarIconStyle} src={iconCalendar} /> */}
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
              {/* <div> */}
              <FormControl sx={{}}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-customized-select"
                  value={category}
                  onChange={handleInputChange}
                  required
                  label={categoryName}
                  displayEmpty
                  input={<BootstrapInput />}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <p style={{ color: 'rgb(117, 117, 117)' }}>{categoryName}</p>
                  </MenuItem>
                  {data.map(item => {
                    return (
                      <MenuItem
                        sx={{
                          paddingRight: '20px',
                          color: '#C7CCDC',
                          ':hover, :focus': { color: '#52555F', background: '#F5F6FB' },
                        }}
                        key={item.id}
                        value={item.label}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              {/* </div> */}
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
            <button className={s.authBtn} type="reset" onClick={reset}>
              Очистить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAddCategory;
