import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Templates from "./Templates";

const Home = () => {
	
	return (
		<Grid
			item
			container
			direction='column'
			alignItems='center'
			justify="center"
			spacing={9}
			style={{
				margin: 0
			}}
		>
			<Grid item >
				<Header />
			</Grid>
			<Grid item>
				<Typography variant='h3'>Choose a template</Typography>
			</Grid>
			<Grid item >
				<Templates />
			</Grid>
		</Grid>
	);
};

export default Home;
