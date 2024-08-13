import React from 'react';
import '../styles/components/Error404.css';
import Section from './Section';


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



const Error404 = () => {

  return (
    <Section>
      <UnderConstruction text={text}/>
  
    </Section>
  );
};

export default Error404;