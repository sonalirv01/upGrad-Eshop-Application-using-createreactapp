//Product card for showing product details

import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Delete, Edit} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import "./productCard.css";

const ProductCard = ({mode, deleteProduct, modifyProduct, buyProduct, ...details}) => {

	let truncateText = (text) => {
		if(150 > text.length) {
			return text;
		}
		return text.substring(0, 150) + "...";
	};

	let checkAdminMode = () => {
		if(mode === "EDIT") {
			return (
				<>
					<Grid item xs={2}>
						<div className="iconButtonwrap">
							<IconButton
								aria-label="Modify"
								onClick={() => modifyProduct(details)}
							>
								<Edit />
							</IconButton>
						</div>
					</Grid>
					<Grid item xs={2}>
						<div className="iconbtnwrap">
							<IconButton
								aria-label="Delete"
								onClick={() => deleteProduct(details)}
							>
								<Delete />
							</IconButton>
						</div>
					</Grid>
				</>
			);
		} else {
			return <></>;
		}
	};

	return (
		<Card className="cardmedia">
			<CardMedia sx={{height: "200px", display: "flex", justifyContent: "center"}}>
				<img className="imgmedia"
					src={details.imageUrl}
					alt={"Image of " + details.name}
					
				/>
 			</CardMedia>
			<CardContent>
				<Grid container>
					<Grid item xs={9}>
						<div className="typographyleft">
							<Typography gutterBottom variant="h6" component="div" className="wrap_text" title={details.name}>
								{details.name}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div className="typographyright">
							<Typography gutterBottom variant="h6" component="div" className="wrap_text" title={'\u20B9 ' + details.price}>
								{'\u20B9 ' + details.price}
							</Typography>
						</div>
					</Grid>
				</Grid>
				<Typography variant="body2" color="text.secondary" sx={{height: 80}}>
					{truncateText(details.description)}
				</Typography>
			</CardContent>
			<CardActions>
				<Grid container>
					<Grid item xs={8}>
						<div className="typographyleft">
							<Button
									variant="contained"
									color="primary"
									onClick={() => buyProduct(details)}
							>
								BUY
							</Button>
						</div>
					</Grid>
					{checkAdminMode()}
				</Grid>
			</CardActions>
		</Card>
	);
};

export default ProductCard;