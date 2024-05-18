import { useState } from "react"

const PageProduct = () => {
  // const [products, setProducts] = useState([]);

  const [iniState, setIniState] = useState(0);

  let iniVar = "Ini Variabel Biasa";

  const ubahData = () => {
    iniVar = "Data variabel berubah";
    console.log(iniVar)
  }

  const ubahState = () => {
    setIniState(iniState + 1);
  }

  return (
    <>
      <h1>{iniVar}</h1>
      <button onClick={ubahData}>Ubah Data</button>

      <h1>{iniState}</h1>
      <button onClick={ubahState}>Ubah State</button>
    </>
  )
}

export default PageProduct;