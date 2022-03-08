/** @format */

// import Image from 'next/image';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'


export default function SignIButton() {
   const isUserLoggedIn = true;
   return isUserLoggedIn ? (
			<button type='button' className={styles.SignIButton}>
				<FaGithub color='#04d361' />
         Gilberto A  Leite
         <FiX color="#737380" className={styles.close}/>
			</button>
		) : (
			<button type='button' className={styles.SignIButton}>
				<FaGithub color='#eba417' />
				Sign in with GitHub
			</button>
		);
}
