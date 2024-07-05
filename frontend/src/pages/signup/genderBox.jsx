import React from 'react';

const GenderBox = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input type="radio" name="gender" className="radio radio-primary" defaultChecked />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input type="radio" name="gender" className="radio radio-primary" />
        </label>
      </div>
    </div>
  );
}

export default GenderBox;
