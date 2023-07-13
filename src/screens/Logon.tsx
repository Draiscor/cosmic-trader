import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { setTitle } from "../redux/titleSlice";

function Logon() {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTitle("Logon"));
	});

	return (
		<div className="flex w-full h-screen justify-center items-center">
			<Button variant="contained" onClick={() => navigate("/new-agent")}>
				Create Agent
			</Button>
		</div>
	);
}

export default Logon;
