import * as React from 'react';
import { CurrencyInput } from 'react-currency-mask';
import {
  Autocomplete,
  Box,
  Button,
  Fab,
  Grid,
  SelectChangeEvent,
  Stack,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FormGastos() {
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

    return (
        <section id="form-gastei" className="px-8">
        <Stack paddingTop={2}>
            <Grid container>
                <Grid item xs={10}>
                    <CurrencyInput
                        onChangeValue={(event, originalValue, maskedValue) => {
                        setValor(+originalValue);
                        }}
                        InputElement={<TextField id="input-valor" label="Gastei" className="w-full" />}
                    />
                </Grid>
            </Grid>
        </Stack>

        <Stack paddingTop={2}>
            <Grid container>
                <Grid item xs={10}>
                    <Autocomplete
                        disablePortal
                        id="combo-lugar"
                        options={empresas}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label="Onde?"
                        onChange={handleChangeLugar}/>}
                    />
                </Grid>
                <Grid item xs={2} className="flex justify-center">
                    <Button variant="contained" color="inherit">
                        <AddIcon />
                    </Button>
                </Grid>
            </Grid>
        </Stack>
        <Stack paddingTop={2}>
            <Grid container>
                <Grid item xs={10}>
                    <Autocomplete
                        disablePortal
                        id="combo-categoria"
                        options={categorias}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label="Em quê?" />}
                    />
                </Grid>
                <Grid item xs={2} className="flex justify-center">
                    <Button variant="contained" color="inherit">
                        <AddIcon />
                    </Button>
                </Grid>
            </Grid>
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
    )
}