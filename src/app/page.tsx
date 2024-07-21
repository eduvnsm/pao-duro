"use client"

import * as React from 'react';
import FormGastos from "./components/FormGastos";

export default function Home() {


  return (
    <main className="">
      <h1 className="flex justify-center text-3xl py-3 font-bold">APP DO PÃO DURO</h1>
      <FormGastos />
    </main>
  );
}
