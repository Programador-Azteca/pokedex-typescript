import React, { useEffect, useState } from 'react';
import {
	Button,
	ButtonGroup,
	Grid,
	Dialog,
	DialogContent,
} from '@mui/material';
import styled from 'styled-components';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
	fetchAllPokemons,
	fetchPokemonByNameOrId,
	fetchPokemonByURL,
} from '../../services/pokemon';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

const REQUEST_LIMIT = 20;

export interface Pokemon {
	name: string;
	url: string;
}

const HomePageContainer = styled.div`
	display: inline-block;
	height: 100%;
	vertical-align: middle;
	padding: 15px;
`;

const SectionContainer = styled.div`
	margin: 15px 0 15px 0;
`;

function HomePage() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [modalStatus, setModalStatus] = useState(false);
	const [selectedPokemon, setSelectedPokemon] = useState({
		id: 0,
		name: '',
		base_experience: 0,
		height: 0,
		weight: 0,
		abilities: [],
		stats: [],
		forms: [],
	});

	const handleSearchClick = async () => {
		if (searchTerm) {
			try {
				const response = await fetchPokemonByNameOrId(searchTerm);
				setSelectedPokemon({
					id: response.id,
					name: response.name,
					base_experience: response.base_experience,
					height: response.height,
					weight: response.weight,
					abilities: response.abilities,
					stats: response.stats,
					forms: response.forms,
				});
				setModalStatus(true);
			} catch (error: any) {
				console.error(error.message);
				alert('ERROR: Pokemon no encontrado');
			}
		}
	};

	const handleModalOpen = async (url: string) => {
		try {
			const response = await fetchPokemonByURL(url);
			setSelectedPokemon({
				id: response.id,
				name: response.name,
				base_experience: response.base_experience,
				height: response.height,
				weight: response.weight,
				abilities: response.abilities,
				stats: response.stats,
				forms: response.forms,
			});
			setModalStatus(true);
		} catch (error: any) {
			console.error(error.message);
			alert('ERROR: Pokemon no encontrado');
		}
	};

	const handleFirstPageClick = async () => {
		setOffset(0);
		const response = await fetchAllPokemons(0, REQUEST_LIMIT);
		await setData(response);
	};

	const handleNextPageClick = async () => {
		setOffset(offset + REQUEST_LIMIT);
		const response = await fetchAllPokemons(
			offset + REQUEST_LIMIT,
			REQUEST_LIMIT
		);
		await setData(response);
	};

	const handlePrevPageClick = async () => {
		setOffset(Math.abs(offset - REQUEST_LIMIT));
		const response = await fetchAllPokemons(
			offset - REQUEST_LIMIT,
			REQUEST_LIMIT
		);
		await setData(response);
	};

	const handleOnChangeSearchTerm = (e: any) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};

	const handleCancelSearch = () => {
		setSearchTerm('');
	};

	const handleCloseModal = () => {
		setModalStatus(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await fetchAllPokemons(offset, REQUEST_LIMIT);
			await setData(response);
			setLoading(false);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<HomePageContainer>
				<SectionContainer>
					<h2>Diccionario Pokémon</h2>
				</SectionContainer>
				<SectionContainer>
					<SearchBar
						handleSearchClick={handleSearchClick}
						handleOnChangeSearchTerm={handleOnChangeSearchTerm}
						searchTerm={searchTerm}
						handleCancelSearch={handleCancelSearch}
					/>
				</SectionContainer>
				{loading && <SectionContainer>Cargando...</SectionContainer>}
				{loading && !data && (
					<SectionContainer>
						¡No se encontraron datos, intenta mas tarde!
					</SectionContainer>
				)}
				{!loading && (
					<Grid container justifyContent="center" spacing={2}>
						{data.map((item: Pokemon) => (
							<Grid key={`${item.name}`} item>
								<PokemonCard pokemon={item} handleModalOpen={handleModalOpen} />
							</Grid>
						))}
					</Grid>
				)}
				<SectionContainer>
					<ButtonGroup
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button disabled={offset < 1} onClick={handleFirstPageClick}>
							Inicio
						</Button>
						<Button disabled={offset < 1} onClick={handlePrevPageClick}>
							Anterior
						</Button>
						<Button onClick={handleNextPageClick}>Siguiente</Button>
					</ButtonGroup>
				</SectionContainer>
			</HomePageContainer>
			<Dialog
				className="dialog-container"
				open={modalStatus}
				keepMounted
				onClose={handleCloseModal}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogContent dividers style={{ width: 350 }}>
					<PokemonDetail {...selectedPokemon} />
				</DialogContent>
			</Dialog>
		</>
	);
}

export default HomePage;
