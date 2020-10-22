import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'
const LoadMoreBtn = ({ text, callback }) => (
     <StyledLoadMoreBtn type="text" onclick={callback}>
         {text}
     </StyledLoadMoreBtn>
)

export default LoadMoreBtn;