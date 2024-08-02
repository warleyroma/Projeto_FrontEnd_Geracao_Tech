import React from 'react';
import '../App.css';
import Section from '../components/Section';


const text = "404 :("
const text2 = "Oops! Esta página não pode ser encontrada!"
const text3 = "Parece que não conseguimos encontrar o que você está procurando."

const UnderConstruction = ({text}) => {
  return (
    <div>
      <h3 className="under-construction-title">{text}</h3>
      <h3 className="under-construction-title2">{text2}</h3>
      <h3 className="under-construction-title3">{text3}</h3>
    </div>
  );
};



const Categories = () => {

  return (
    <Section>
      <UnderConstruction text={text}/>
  
    </Section>
  );
};

export default Categories;