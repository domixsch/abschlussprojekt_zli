import React, { useState } from 'react'
import styled from 'styled-components';

function Form() {
    const [inputState, setInputState] = useState({
        title: '',
        amout: '',
        date: '',
        category:'',
        description:'',
    })

    const {title, amout, date, category, description} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
     
  return (
    <FormStyled>
        <div className='input-control'>
            <input type="text" 
                    value={'title'}
                    placeholder='Salary Title'
                    onChange={handleInput('title')}/>
        </div>
        <div className='input-control'>
            <input type="text" 
                    value={'title'}
                    placeholder='Salary Title'
                    onChange={handleInput('title')}/>
        </div>
    </FormStyled>
  )
}


const FormStyled = styled.form`
`;
export default Form