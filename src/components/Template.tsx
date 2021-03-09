import React from "react";

import {useDispatch} from 'react-redux'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

import {setTemplate} from '../actions'

interface Props {
    reportId: string;
    img: string;
}

//CSS-IN-JS
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			width: "100%",
			maxWidth: 250,
			padding: "0.5em",
			background: "rgba(255, 255, 255, 0.1)",
			boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.5 )",
			backdropFilter: "blur( 15px )",
			border: "1px solid rgba( 255, 255, 255, 0.18 )",
			borderRadius: "0.5em",
			cursor: 'pointer',

			'&:hover':{
				transform: 'scale(1.05)'
			}
		},
		card__action: {
			pointerEvents: 'none'
		},
		card__image: {
			borderRadius: "0.5em",
			
		},
	})
);

const Template: React.FunctionComponent<Props> = ({ reportId, img}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const selectTemplate = () => {
		localStorage.setItem('part', '1')
		localStorage.setItem('reportId', reportId)
        dispatch(setTemplate(reportId))
    }

	return (
		<Card className={classes.card} onClick={selectTemplate}>
			<CardActionArea className={classes.card__action} > 
				<CardMedia
					component='img'
					alt='Template1'
					height='auto'
					image={img}
					className={classes.card__image}
				/>
			</CardActionArea>
		</Card>
	);
};

export default Template;
