import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import { fetchPokemon } from "./api/PokemonApi";

window.onscroll = () => {
	if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
		// you're at the bottom of the page
		console.log("Bottom of page");
	}
};

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			let newList = await fetchPokemon(page);
			setPokemonList((list) => [...list, ...newList]);
		})();
	}, [page]);

	return (
		<div className="App">
			{pokemonList.map((p) => (
				<Pokemon info={p} />
			))}
			<button onClick={() => setPage((p) => p + 1)}>Next</button>
		</div>
	);
}

export default App;
