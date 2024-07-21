"use client"

import * as React from 'react';
import { CurrencyInput } from 'react-currency-mask';
import {
  Autocomplete,
  Button,
  SelectChangeEvent,
  Stack,
  TextField
} from '@mui/material';

export default function Home() {

  let [valor, setValor] = React.useState(0);
  let [total, setTotal] = React.useState(0);

  const [lugar, setLugar] = React.useState('');
  const handleChangeLugar = (event: any) => {
    console.log(event.target.value);
    setLugar(event.target.value as string);
    console.log(event.target.value);
  };

  const [categoria, setCategoria] = React.useState('');
  const handleChangeCategoria = (event: SelectChangeEvent) => {
    setCategoria(event.target.value as string);
  };

  const handleGastei = (event: any) => {
    console.log(valor)
  }

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
      <h1 className="flex justify-center text-3xl py-3 font-bold">APP DO PÃO DURO</h1>
      <section id="form-gastei" className="px-8">
        <Stack paddingTop={2}>
          <CurrencyInput
            onChangeValue={(event, originalValue, maskedValue) => {
              setValor(+originalValue);
            }}
            InputElement={<TextField id="input-valor" label="Gastei" className="w-full" />}
          />
        </Stack>

        <Stack paddingTop={2}>
          <Autocomplete
            disablePortal
            id="combo-lugar"
            options={empresas}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Onde?"
            onChange={handleChangeLugar}/>}
          />
        </Stack>
        <Stack paddingTop={2}>
          <Autocomplete
            disablePortal
            id="combo-categoria"
            options={categorias}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Em quê?" />}
          />
        </Stack>
        <Stack paddingTop={2}>
          <Button
            variant="contained"
            color="error"
            size="large"
            className="w-full"
            onClick={handleGastei}
          >
            Fiquei mais pobre
            <span role="img" aria-hidden="true" aria-label="" className="pl-1">😟</span>
          </Button>
        </Stack>

        <Stack paddingTop={2}>
          <div id="show-total" className="pt-3">
            <p id="total" className="text-4xl">{`Total: R$${total !== null ? `${total}` : 'null'}`}</p>
          </div>
        </Stack>
      </section>
    </main>
  );
}
