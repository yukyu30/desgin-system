import Token from '../../../../tokens/tokens.json'
import styles from './ColorPreview.module.css';

type Props = {
  color: string
};

export const ColorPreview = (props: Props) => {

  const colors = Token.global.primitiveColor


  return (
    <span className={styles.colorPreview}style={{backgroundColor: props.color}}></span>
  );
};
