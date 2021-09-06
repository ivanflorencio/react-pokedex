export async function fetchPokemon(page) {
	//
	try {
		let pokemonList = [];
		let nameList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${(page - 1) * 20}`).then((res) => res.json());

		for (const item of nameList.results) {
			let info = await fetch(item.url).then((res) => res.json());
			pokemonList.push(info);
		}

		return pokemonList;
	} catch (e) {
		console.error(e);
	}
}
