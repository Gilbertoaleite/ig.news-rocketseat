/* eslint-disable @next/next/no-img-element */
/** @format */

// import Image from 'next/image';
import  SignIButton  from '../SignInButton';
import styles from './styles.module.scss';

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src='/images/logo.svg' alt='logo' />
				<nav>
					<a className={styles.active} href='#'>Home</a>
					<a href='#'>Post</a>
				</nav>
				<SignIButton/>
			</div>
		</header>
	);
}
