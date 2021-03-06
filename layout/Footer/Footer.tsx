import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';



export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer {...props} className={cn(className, styles.footer)}>
			<div className={styles.allRightProtected}>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
			<a href='#' target="_blank" className={styles.userAgreement}>Пользовательское соглашение</a>
			<a href='#' target="_blank" className={styles.confidentialPolicy}>Политика конфиденциальности</a>
		</footer>
	);
};