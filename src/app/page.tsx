"use client"

import * as React from 'react';
import { CurrencyInput } from 'react-currency-mask';
import {
  Autocomplete,
  Button,
  SelectChangeEvent,
  TextField
} from '@mui/material';

export default function Home() {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

    const empresas = [
      { label: 'Oxxo' },
      { label: 'Joanin' },
      { label: 'Shell' },
      { label: 'Carrefour' },
      { label: 'Cobasi' },
      { label: 'Uber' },
      { label: 'iFood' },
    ];

    const categorias = [
      { label: 'Cerveja' },
      { label: 'Cigarro' },
      { label: 'Combustível' },
      { label: 'Alcoólico' },
      { label: 'Ração' },
      { label: 'Transporte' },
      { label: 'Alimentação' },
      { label: 'Compras' },
    ];

  return (
    <main className="">
      <h1 className="flex justify-center text-3xl py-3 font-bold">App do Pão Duro</h1>
      <section className="px-8">
        <div className="flex justify-center py-3">
          <CurrencyInput
            onChangeValue={(event, originalValue, maskedValue) => {
              console.log(event, originalValue, maskedValue);
            }}
            InputElement={<TextField id="input-valor" label="Gastei" className="w-full" />}
          />
        </div>

        <div className="flex justify-center py-3">
          <Autocomplete
            disablePortal
            id="combo-lugar"
            options={empresas}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Onde?" />}
          />
        </div>
        <div className="flex justify-center py-3 w-full">
          <Autocomplete
            disablePortal
            id="combo-categoria"
            options={categorias}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Em quê?" />}
          />
        </div>
        <div className="flex justify-center py-3">
          <Button variant="contained" color="error" size="large" className="w-full">
            Fiquei mais pobre
            <span role="img" aria-hidden="true" aria-label="">😟</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
