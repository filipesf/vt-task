import * as React from 'react';
import styled from 'styled-components';

const Logo = () => (
  <LogoSvg aria-hidden='true' viewBox='0 0 632.313 64.882'>
    <path d='M49.8 0H21.4v7.1h-.1v14.2H42.6V42.6H21.4v-7.1h-.1V21.3H0v14.2h.1v28.4h42.6V42.6h21.2V21.3h.1v-7.1h-.1V7.1h.1V0H49.8zM126.113 30.782c-3.1 9-6 17.5-7.3 23.1h-.2c-1.5-6.2-4-14.3-7-23.3l-10-30h-12.7l22.5 63.2h14l23.2-63.2h-12.1zM152.913 16.782h11.4v46.9h-11.4zM152.913.582h11.4v11.1h-11.4zM193.413 34.482c-8-1.8-9.6-3.2-9.6-5.9 0-2.5 1.5-4.8 6.6-4.8 6.5 0 8 3.6 8.5 5.8h10.9c-.5-6.4-5.4-13.9-18.9-13.9-13.4 0-18.3 7.1-18.3 13.9 0 6.5 2.6 11.1 17.3 14.6 7.4 1.9 9.5 3.3 9.5 6.8 0 3.4-2.1 5.5-7.6 5.5-5.4 0-8.7-2.4-9.8-6.6l-11-.2c1 8.4 7 15 20.5 15 13.4 0 19.5-6.7 19.5-14.6 0-6.9-2.4-12-17.6-15.6zM218.313 16.782h11.4v46.9h-11.4zM218.313.582h11.4v11.1h-11.4zM265.613 15.682c-8 0-12 3.3-14 6.7V.582h-11.2v47.6c0 5.2 0 10.4-.1 15.5h10.9a40.482 40.482 0 00.4-5c2.3 3.8 5.6 6.1 12.8 6.1 13.4 0 20.4-11.7 20.4-25.4 0-13.4-6.8-23.7-19.2-23.7zm-3.6 40c-8.4 0-11-6.7-11-15.2 0-10.1 2.9-15.6 11.2-15.6 7.4 0 10.9 6.1 10.9 14.7 0 9.8-3.9 16.1-11.1 16.1zM292.313.582h11.4v63.2h-11.4zM333.513 15.682c-14.8 0-22.2 10.7-22.2 25.2 0 12.2 6.5 23.9 21.7 23.9 14.1 0 19.2-9 20.9-14.8h-11.4c-1.3 3.1-3.1 5.8-9.2 5.8-7 0-10.6-6.1-10.6-13.2h31.7a25.487 25.487 0 00.2-3.9c0-11.2-5.3-23-21.1-23zm-10.4 19.7c.6-6.6 3.5-11.4 10.4-11.4s9.6 5.2 9.7 11.4zM354.613 10.382h19.5v53.3h11.9v-53.3h19.6v-9.8h-51v9.8zM436.113 15.682c-7.8 0-11.7 3.7-13.9 7.1V.582h-11.3v63.1h11.4v-25.2c0-8.1 2.2-13.5 9.8-13.5 5.9 0 8.5 3.7 8.5 10.4v28.4h11.3v-30.1c0-13.2-7.5-18-15.8-18zM473.713 25.582c0-3.2-.1-7.6-.3-8.7h-11.1c.1 3.4.1 7.4.1 12.7h-.1v34.1h11.4v-21.2c0-12.5 5.8-15.9 15.3-15.8v-10.9c-7.9.1-13.1 4.1-15.3 9.8zM513.813 15.682c-14.8 0-22.2 10.7-22.2 25.2 0 12.2 6.5 23.9 21.7 23.9 14.1 0 19.2-9 20.9-14.8h-11.4c-1.3 3.1-3.1 5.8-9.2 5.8-7 0-10.6-6.1-10.6-13.2h31.7a25.487 25.487 0 00.2-3.9c0-11.2-5.3-23-21.1-23zm-10.5 19.7c.6-6.6 3.5-11.4 10.4-11.4s9.6 5.2 9.7 11.4zM580.013 31.682c0-11-6.7-15.8-18.9-15.9-14.1-.1-18.8 6.9-19.5 14.6h10.8c.7-3.4 1.9-6.3 8.2-6.3 7 0 8.2 3.9 8.2 7.5v3.2h-7.1c-13.8 0-22.3 4.9-22.3 15.5 0 7.2 4.8 14.6 16 14.6 8.5 0 11.9-3.4 13.6-6.2a22.363 22.363 0 00.7 5.1h10.8a110.733 110.733 0 01-.6-11.5zm-11.2 11.5c0 7-1.2 13.4-10.5 13.4-5.1 0-7.6-3.1-7.6-7 0-5.2 3.7-7.7 12-7.7h6.1zM632.213 50.682V.582h-11.3v20.1c-1.1-2.3-4.7-5-12-5-13.2 0-21.2 10.6-21.2 25 0 14.5 7.5 24.1 19.4 24.1 7.2 0 11.5-2.5 13.8-6.6a53.5 53.5 0 00.5 5.5h10.9c-.1-4.4-.1-8.7-.1-13zm-22.1 4.9c-6.7 0-10.9-5.3-10.9-15.2 0-9.7 4.1-15.5 11.3-15.5 9.2 0 10.7 6.3 10.7 15.1 0 7.9-1.5 15.6-11.1 15.6z'></path>
  </LogoSvg>
);

const LogoSvg = styled.svg`
  width: 200px;
  fill: #533ffb;
`;

export default Logo;