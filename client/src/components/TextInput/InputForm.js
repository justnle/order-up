import React from 'react';

export function InputForm(props) {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          {props}
        </span>
      </div>
      <input
        type='text'
        className='form-control'
        aria-label='Sizing example input'
        aria-describedby='inputGroup-sizing-default'
      />
    </div>
  );
}
