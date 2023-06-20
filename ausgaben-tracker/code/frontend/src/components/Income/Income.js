import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';

function Income() {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Income </h2>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div``;

export default Income