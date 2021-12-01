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
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import calculator from '../../img/calculator.svg';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import s from './FormAddCategory.module.css';
import { makeStyles } from '@material-ui/core/styles';
import ruLocale from 'date-fns/locale/ru';
// import AdapterJalali from '@date-io/date-fns-jalali';
import { compareAsc, format } from 'date-fns';
import DatePicker from '@mui/lab/DatePicker';
import expenceJson from '../../data/expenselcon.json';
const month2 = new Date().getMonth() + 1;
const month = new Date().toLocaleString('ru', {
  month: 'long',
});
// const year = new Date().getFullYear();
// const date = new Date().getDate();
// console.log(`${date}-${month2}-${year}`);

const FormAddCategory = () => {
  const [value, setValue] = React.useState(format(new Date(), 'MM-dd-yyyy'));
  const ariaLabel = { 'aria-label': 'description' };
  const [age, setAge] = React.useState('');
  const [text, setText] = React.useState('');
  const [values, setValues] = React.useState('');
  console.log(value);
  //=> '2014-02-11'
  const handleInputChange = event => {
    setAge(event.target.value);
  };

  const handleChange = event => {
    setValues(event.target.value);
  };

  const CustomButtonRoot = styled('span')`
    background-color: #007fff;
    padding: 15px 20px;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
      background-color: #0059b2;
    }

    &.${buttonUnstyledClasses.active} {
      background-color: #004386;
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  `;

  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(value);
  };
  const handleTextChange = event => {
    setText(event.target.value);
  };
  const useStyles = makeStyles(theme => ({
    textInpt: {
      border: '2px solid black',
      borderRadius: '30px',
      width: '289px',
      //   height: '30px',
      outlineColor: 'black',
    },
  }));
  const css = useStyles();
  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <div className={s.containerForm}>
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
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            className={css.textInpt}
            id="outlined"
            fullWidth
            //   id={s.inputStyle}
            label="Описание товара"
            name="textInput"
            // variant="standard"
            onChange={handleTextChange}
            size="small"

            // sx={{ width: 289 + 'px', height: 50 + 'px', padding: 0, borderRadius: 10 + 'px' }}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Категория товара</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Категория товара"
                onChange={handleInputChange}
                name="select"
                size="small"
              >
                {expenceJson.map(item => {
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
              value={values}
              onChange={handleChange}
              placeholder="0.00"
              type="number"
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
    </Container>
  );
};

export default FormAddCategory;
