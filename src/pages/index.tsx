/* eslint-disable @next/next/no-img-element */
import {  GetStaticProps } from 'next';
import Head from 'next/head'
import styles from './home.module.scss';

// Cliente-side
//Server - side
// Static Site Generation

// import Image from 'next/image';
import { FaRegHandSpock } from 'react-icons/fa';
import  SubscribeButton  from '../components/SubscribeButton';
import { stripe } from './services/stripe';

interface HomeProps{
	product: {
		priceId: number;
		amount: number;
	}
}
export default function Home({ product }: HomeProps) {
	return (
		<>
			<Head>
				<title>Home | ig.news</title>
				<link rel='shortcut icon' href='favicon.png' type='image/png' />
			</Head>
			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>{<FaRegHandSpock color='#eba417' />} Hey, welcome</span>
					<h1>
						News about the <span>React</span> world
					</h1>
					<p>
						Get access to all the publications <br />
						<span>for {product.amount} month</span>
					</p>
					<SubscribeButton priceId={product.priceId} />
				</section>
				<img src='/images/avatar.svg' alt='Girl coding' />
			</main>
		</>
	);
}

// export const getServerSideProps: GetServerSideProps = async () => {

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve('price_1KarW5H6qWHyEwaFdSB71aCa', {
		
	});

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price.unit_amount / 100),
	};

	return {
		props: {
			product,
		},
		revalidate: 60 * 60 * 24, //24 hrs
	}
};
