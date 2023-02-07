import React from 'react';
import IconButton from '@mui/material/IconButton';
import * as Icon from '@mui/icons-material';
import { Input } from '@mui/material';

interface SearchBarProps {
	handleSearchClick: () => void;
	searchTerm: string;
	handleOnChangeSearchTerm: (event: any) => void;
	handleCancelSearch: () => void;
}

function SearchBar({
	handleSearchClick,
	searchTerm,
	handleOnChangeSearchTerm,
	handleCancelSearch,
}: SearchBarProps) {
	return (
		<form>
			<Input
				id="search-bar"
				className="text"
				onChange={handleOnChangeSearchTerm}
				placeholder="Buscar pokemon..."
				size="small"
				value={searchTerm}
			/>
			<IconButton aria-label="clear" onClick={handleSearchClick}>
				<Icon.Search style={{ fill: 'blue' }} />
			</IconButton>
			<IconButton aria-label="clear" onClick={handleCancelSearch}>
				<Icon.Cancel style={{ fill: 'blue' }} />
			</IconButton>
		</form>
	);
}

export default SearchBar;
