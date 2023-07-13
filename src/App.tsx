import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();

	return (
		<div className="flex w-full h-screen justify-center items-center">
			<Button variant="contained" onClick={() => navigate("/new-agent")}>Create Agent</Button>
		</div>
	);
}

export default App;
