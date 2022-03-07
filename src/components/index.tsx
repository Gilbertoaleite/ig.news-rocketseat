/** @format */

import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Image src='/images/logo.svg' alt='logo' width={70} height={70} />
				<nav>
					<a href='#'>Home</a>
					<a href='#'>Post</a>
				</nav>
			</div>
		</header>
	);
}
