import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
	const navigate = useNavigate();

	return (
		<div className="width-100 height-100 flex justify-center items-center">
			<Button variant="contained" onClick={() => navigate("/new-agent")}>Create Agent</Button>
		</div>
	);
}

export default App;
