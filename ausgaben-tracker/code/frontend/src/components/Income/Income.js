import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import React, { useEffect } from 'react'


function Income() {
  const {addIncome, incomes, getIncomes} = useGlobalContext()

  useEffect(() =>{
    getIncomes()
  }, [])

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income </h1>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='incomes'>
            {incomes.map((income) => {
              const {_id, title, amount, date, category, description} = income;
              return <incomeItems
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              category={category}
              indicatorColor="var(--color-green)"
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div``;

export default Income