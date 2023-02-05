import React from 'react';
import styled from 'styled-components';
import HomePage from './pages/HomePage/HomePage';

const AppContainer = styled.div`
	text-align: center;
`;

function App() {
	return (
		<AppContainer className="App">
			<HomePage />
		</AppContainer>
	);
}

export default App;
