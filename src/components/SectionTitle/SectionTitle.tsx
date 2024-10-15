import styles from './SectionTitle.module.scss';
import classNames from 'classnames';
import { ReactNode, ElementType } from 'react';

interface SectionTitleProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: string[];
}

const SectionTitle: React.FC<SectionTitleProps> = ({ as: Tag = 'h2', children, className, variant = [] }) => {
  const variantClasses = variant.map(v => styles[`section-title--${v}`]);
  return (
    <Tag className={classNames(styles['section-title'], ...variantClasses, className)}>
      {children}
    </Tag>
  );
};

export default SectionTitle;