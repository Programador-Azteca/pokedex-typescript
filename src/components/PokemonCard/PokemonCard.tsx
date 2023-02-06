import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Pokemon } from '../../pages/HomePage/HomePage';


interface PokemonCardProps {
	pokemon: Pokemon;
	handleModalOpen: (url: string) => void;
}

function PokemonCard({ pokemon, handleModalOpen }: PokemonCardProps) {
	const { name, url } = pokemon;

	const handleClick = (e: any) => {
		e.preventDefault();
		handleModalOpen(url);
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="h5">{name}</Typography>
				<Button size="small" onClick={handleClick}>
					Conocer más
				</Button>
			</CardContent>
		</Card>
	);
}

export default PokemonCard;
