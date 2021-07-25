import React from "react";
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    let portfolioUrl = 'https://portfolio-of-md-masud-rana.netlify.app/';
	return (
		<footer className={styles.footer}>
			Created by 
			<a target="_blank" href={portfolioUrl} rel="noreferrer" >
            {" "} Md Masud Rana {" "}
			</a>
			&copy; {new Date().getFullYear()}
		</footer>
	);
};

export default Footer;
