//Error Page when user tries to access invalid url

import Grid from "@mui/material/Grid";
import LocationOffOutlinedIcon from '@mui/icons-material/LocationOffOutlined';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./errorpage.css";

const ErrorPage = () => {
	return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={1}>
				<Grid container item spacing={3}>
					<Grid item xs={4}/>
					<Grid item xs={4}>
						<div className="itemwrapsection">
							<LocationOffOutlinedIcon className="locationofout"/>
						</div>
						<div className="typographywrap">
							<Typography
								variant="subtitle1"
								noWrap
								sx={{
									fontSize: "25px",
									color: 'inherit',
								}}
							>
								404 Not Found
							</Typography>
						</div>
					</Grid>
					<Grid item xs={4}/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ErrorPage;