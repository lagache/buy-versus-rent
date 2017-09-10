import { START } from '../Actions';

export default function buyVSRent(state = [], action = {}) {
    switch (action.type) {
    	case START:
    		return {
    			start: 'YEAH'
    		}
    	default:
            return state;
    }
}