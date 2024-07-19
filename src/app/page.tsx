"use client"

import { CurrencyInput } from 'react-currency-mask';
import { Button, TextField } from '@mui/material';

export default function Home() {
  return (
    <main className="">
      <h1 className="flex justify-center text-3xl py-3 font-bold">App do Pão Duro</h1>
      <div className="flex justify-center py-3">
        <CurrencyInput
          onChangeValue={(event, originalValue, maskedValue) => {
            console.log(event, originalValue, maskedValue);
          }}
          InputElement={<TextField label="Custom Input" size="small" />}
        />
        <Button className="ml-3" variant="contained">Gastei</Button>
      </div>
    </main>
  );
}
