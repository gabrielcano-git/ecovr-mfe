import styles from './CustomCheckbox.module.scss';

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className={styles['custom-checkbox']}>
      {label}
      <input 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
      />
      <span className={styles['checkmark']}></span>
    </label>
  );
};

export default CustomCheckbox;