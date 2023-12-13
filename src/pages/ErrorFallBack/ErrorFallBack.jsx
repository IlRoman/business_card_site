import { Button } from '../../Components/Button/Button';
import './error-fallback.scss';

export const ErrorFallBack = ({ errorData }) => {
    const { error, resetErrorBoundary } = errorData;
    console.info('Error:', error);
    
    return (
        <div className='error-fallback'>
            <div className='error-fallback__container'>
                <h1>Oops! Something went wrong</h1>
                <Button
                    onClick={resetErrorBoundary}
                >
                    Try again
                </Button>
            </div>
        </div>
    )
};
