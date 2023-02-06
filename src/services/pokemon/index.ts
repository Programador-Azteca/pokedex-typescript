import axios from 'axios';

export async function fetchAllPokemons(offset = 0, limit = 20) {
	try {
		const { data: response } = await axios.get(
			`${process.env.REACT_APP_POKEMON_ENDPOINT}?offset=${offset}&limit=${limit}`
		);

		return response.results;
	} catch (error: any) {
		throw new Error(error.message);
	}
}

export async function fetchPokemonByNameOrId(pokemonNameOrId: string) {
	try {
		const { data: response } = await axios.get(
			`${process.env.REACT_APP_POKEMON_ENDPOINT}${pokemonNameOrId}`
		);
		return response;
	} catch (error: any) {
		throw new Error(error.message);
	}
}

export async function fetchPokemonByURL(url: string) {
	try {
		const { data: response } = await axios.get(url);
		return response;
	} catch (error: any) {
		throw new Error(error.message);
	}
}
