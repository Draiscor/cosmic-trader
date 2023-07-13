import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks/redux";

function App() {
	const title = useAppSelector(state => state.title.value);
	const navigate = useNavigate();

	useEffect(() => navigate("logon"), [navigate]);

	return (
		<div>
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="h6" component="div" className="grow">
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Outlet />
		</div>
	);
}

export default App;
