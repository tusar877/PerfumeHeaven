import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return {
		    redirect: {
		      permanent: false,
		      destination: `${
			`https://amzn.to/42aFW0T`
		      }`,
		    },
		  };
		}

export default Home
