import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Search from '.';

export default {
  title: "Components/Search",
  component: Search,
} as Meta;


export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Search
      placeholder="Search the site"
      width="400px"
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  );
}