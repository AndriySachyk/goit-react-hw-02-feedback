import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions-style';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
        return (
            <>
                <Button type="button"
                    key={option}
                    onClick={()=> onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            </>
        )
    })
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}