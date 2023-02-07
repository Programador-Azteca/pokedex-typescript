import React from 'react';
import { List, ListItemText, Divider } from '@mui/material';

interface PokemonForms {
	name: string;
	url: string;
}

interface PokemonStats {
	name: string;
}

interface PokemonStatsArray {
	stat: PokemonStats;
	base_stat: number;
}

interface PokemonAbilities {
	ability: { name: string };
}

interface PokemonDetailsProps {
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number;
	forms: Array<PokemonForms>;
	stats: Array<PokemonStatsArray>;
	abilities: Array<PokemonAbilities>;
}

function PokemonDetail(selectedPokemon: PokemonDetailsProps) {
	const { id, name, height, weight, base_experience, forms, stats, abilities } =
		selectedPokemon;
	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<h1>
					{id}. {name.toUpperCase()}
				</h1>
			}
		>
			<ListItemText>
				<h3>Altura: {height}</h3>
			</ListItemText>
			<Divider />
			<ListItemText>
				<h3>Peso: {weight}</h3>
			</ListItemText>
			<Divider />
			<ListItemText>
				<h3>Experiencia base: {base_experience}</h3>
			</ListItemText>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Formas:</h3>
				</ListItemText>
				{forms.map((value) => (
					<ListItemText key={`${value.name}-${name}`}>
						<h4>{value.name}</h4>
					</ListItemText>
				))}
			</List>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Habilidades:</h3>
				</ListItemText>
				{abilities.map((value) => (
					<ListItemText key={`${value.ability.name}-${name}`}>
						<h4>{value.ability.name}</h4>
					</ListItemText>
				))}
			</List>
			<Divider />
			<List component="div">
				<ListItemText>
					<h3>Estadísticas:</h3>
				</ListItemText>
				{stats.map((value) => (
					<ListItemText key={`${value.stat.name}-${name}`}>
						<h4>{`${value.stat.name}: ${value.base_stat}`}</h4>
					</ListItemText>
				))}
			</List>
		</List>
	);
}

export default PokemonDetail;
