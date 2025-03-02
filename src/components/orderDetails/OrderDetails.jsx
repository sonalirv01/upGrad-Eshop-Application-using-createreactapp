//Page to show order details ready for confirmation

import {Card, CardContent, useTheme} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./orderdetails.css";
const OrderDetails = ({quantity, product, address}) => {

	const theme = useTheme();

	return (
		<Card className="cardcontentwrap">
			<CardContent>
				<Grid container className="griditem">
					<Grid item xs={7} className="pr">
						<div className="gridpl">
							<Grid container>
								<Grid item xs={12}>
									<Typography variant={"h4"}>
										{product.name}
									</Typography>
								</Grid>
								<Grid item xs={12} className="pt">
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										Quantity: <b>{quantity}</b>
									</Typography>
								</Grid>
								<Grid item xs={12} className="pt">
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										category: <b>{product.category}</b>
									</Typography>
								</Grid>
								<Grid item xs={12} className="pt">
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
											color: theme.palette.disabled.main,
										}}
									>
										<em>{product.description}</em>
									</Typography>
								</Grid>
								<Grid item xs={12} className="pt">
									<Typography
										variant={"body1"}
										style={{
											fontSize: "25px",
											color: theme.palette.secondary.main,
										}}
									>
										Total Price : &#8377; {product.price * quantity}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={5}>
						<div className="gridpl">
							<Grid container>
								<Grid item xs={12}>
									<Typography variant={"h4"}>
										Address Details :
									</Typography>
								</Grid>
								<Grid item xs={12} className="pt">
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										{address.name}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										Contact Number: {address.contactNumber}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										{
											((address) => {
												if(address.landmark !== null) {
													return (
														<>
															{address.street}, {address.landmark}, {address.city}
														</>
													);
												} else {
													return (
														<>
															{address.street}, {address.city}
														</>
													);
												}
											})(address)
										}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										{address.state}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant={"body1"}
										style={{
											fontSize: "15px",
										}}
									>
										{address.zipcode}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default OrderDetails;