import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store';
import { ConvertedContainer } from './style'

export const Result = () => {
    const { value: conversionValue, valueToConvert, currency } = useSelector((state: RootState) => state);


    return (
        <ConvertedContainer>
             {currency === 'USD' ? '$' : '€'} {valueToConvert} {'>'} R${Number(conversionValue).toFixed(2)}
        </ConvertedContainer>
    );
}