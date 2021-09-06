import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    async function fetchPokemon () {
      let list = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page-1}`).then(res=>res.json());
      let infos = list.results.map((item)=>{
        return fetch(item.url);
      })
      let inf = await Promise.all(infos).then(async(res)=>res.map(r=> r.json()));
      console.log(inf)
      setPokemonList(l => [...l, ...list.results]);
    }
    fetchPokemon();
  },[page])



  return (
    <div className="App">
      {JSON.stringify(pokemonList)}
      <button onClick={()=>setPage(p=>p+1)}>Next</button>
    </div>
  );
}

export default App;
