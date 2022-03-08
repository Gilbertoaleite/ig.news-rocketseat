import styles from './styles.module.scss'

interface SubscribeButtonProps{
	priceId: number;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
	return (
		<button type='button' className={styles.SubscribeButton}>
			Subscribe now
		</button>
	);
}