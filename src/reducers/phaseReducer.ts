import { Reducer } from "redux";
import { PHASE } from "../constants";

interface IState {
    phase: {
        part: number
    }
}

let initalState = {
	phase: {
		part: 0,
	},
};

const phaseReducer: Reducer = (state: IState = initalState, action: any) => {
	switch (action.type) {
		case PHASE.CURRENT:
			return state.phase.part;

		case PHASE.NEXT:
			return {
				...state,
				phase: {
					part: state.phase.part + 1,
				},
			};
		case PHASE.PREVIOUS:
			const phase = state.phase.part;
			console.log(phase)
			if (phase != 0) {
				console.log('a')
				return {
					...state,
					phase: {
						part: phase - 1,
					},
				};
			} else {
				return state;
			}

		default:
			return state;
	}
};

export default phaseReducer;
