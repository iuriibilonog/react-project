import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ff751d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loader() {
  return <RingLoader css={override} size={150} color="#ff751d" />;
}

export default Loader;
