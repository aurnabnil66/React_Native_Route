import {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style';

interface ICustomTextInputProps {
  type: 'string' | 'mobile';
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor?: string;
}

const CustomTextInput: FC<ICustomTextInputProps> = ({
  type,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#888888',
}) => {
  const getKeyboardType: any = () => {
    switch (type) {
      case 'mobile':
        return 'phone-pad';
      default:
        return 'default';
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTextStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={getKeyboardType()}
      />
    </View>
  );
};

export default CustomTextInput;
