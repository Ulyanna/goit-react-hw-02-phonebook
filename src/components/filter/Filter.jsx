import React from 'react';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name :
      <Input
        type="text"
        name="filter"
        required
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
