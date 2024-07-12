import React from 'react';

const GenderBox = ( {onChangeBox, selectedGender }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="form-control">
        <label className= {`label cursor-pointer  ${selectedGender === 'male' ? 'label-active' : ''}`}  >
          <span className="label-text">Male</span>
          <input type="radio" name="gender" className="radio radio-primary"     checked={selectedGender === 'male'} 
          onChange={() => onChangeBox('male')}/>
        </label>
      </div>
      <div className="form-control">
        <label className= {`label cursor-pointer ${selectedGender === 'female' ? 'label-active' : ''}`}>
          <span className="label-text">Female</span>
          <input type="radio" name="gender" className="radio radio-primary" checked={selectedGender === 'female'}
          onChange={() => onChangeBox('female')} />
        </label>
      </div>
    </div>
  );
}

export default GenderBox;
