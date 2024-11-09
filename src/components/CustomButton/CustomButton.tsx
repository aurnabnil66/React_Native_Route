import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface ICustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: FC<ICustomButtonProps> = ({text, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.buttonProperties} onPress={onPress}>
        {text !== '' ? <Text style={styles.buttonText}>{text}</Text> : <></>}
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
