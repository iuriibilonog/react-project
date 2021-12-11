import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '0px',
  },
  '.MuiInputLabel-root': { color: 'red' },
  '.MuiSelect-select': { paddingLeft: '8px' },
  '& .MuiInputBase-input': {
    borderTop: '2px solid #F5F6FB',
    borderBottom: '2px solid #F5F6FB',
    padingLight: '5px',
    width: 142,
    fontSize: 12,
    background: 'white',
    ['@media (max-width:767.5px)']: {
      width: '240px',
      borderBottomLeftRadius: '16px',
      border: '2px solid white',
      background: 'transparent',
    },
  },
  //   '.css-1yizycn-MuiInputBase-root-MuiInput-root:after': {
  //     borderBottom: '2px solid red',
  //   },
}));
export default BootstrapInput;
