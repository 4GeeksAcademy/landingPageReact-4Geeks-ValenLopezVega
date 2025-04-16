import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card"; 
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	const arrCard = [
		{
			title: 'First Card',
			descripciones: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim repellat aperiam fugit quas, assumenda vero eveniet soluta, amet commodi ad asperiores reiciendis quod ipsum, similique obcaecati itaque est deleniti'
		},
		{
			title: 'Second Card',
			descripciones: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim repellat aperiam fugit quas, assumenda vero eveniet soluta, amet commodi ad asperiores reiciendis quod ipsum, similique obcaecati itaque est deleniti'
		},
		{
			title: 'Third Card',
			descripciones: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim repellat aperiam fugit quas, assumenda vero eveniet soluta, amet commodi ad asperiores reiciendis quod ipsum, similique obcaecati itaque est deleniti'
		},
		{
			title: 'Fourth Card',
			descripciones: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim repellat aperiam fugit quas, assumenda vero eveniet soluta, amet commodi ad asperiores reiciendis quod ipsum, similique obcaecati itaque est deleniti'
		}
	]
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{
						arrCard.map((item, index) => {
							return (
								<Card key={index} cardDetail={item} />
							)
						})
					}
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;