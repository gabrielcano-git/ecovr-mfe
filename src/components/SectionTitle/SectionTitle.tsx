import styles from './SectionTitle.module.scss';
import classNames from 'classnames';
import { ReactNode, ElementType } from 'react';

interface SectionTitleProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ as: Tag = 'h2', children, className }) => {
  return (
    <Tag className={classNames(styles['section-title'], className)}>
      {children}
    </Tag>
  );
};

export default SectionTitle;