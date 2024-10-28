import "./App.css";
import Button from "./componentes/button";
import ButtonContato from "./componentes/button-contato";
import Nav from "./componentes/nav";
import { FaInstagram, FaRegMap, FaWhatsapp } from "react-icons/fa6";

function App() {
	return (
		<div className="centro">
			<Nav />
			<div className="bv-txt">
				<h1>Bem-vinda ao nosso estúdio!</h1>
				<p>
					Onde suas mãos recebem o cuidado e a elegância que merecem! Deixe-nos
					transformar cada detalhe em uma obra de arte, garantindo beleza e
					bem-estar em cada toque. Você merece esse momento especial!
				</p>
				<Button />
			</div>
      <div className="bt-bottom">
        <ButtonContato text={<FaInstagram className="icon"/>}/>
        <ButtonContato text={<FaWhatsapp className="icon"/>}/>
        <ButtonContato text={<FaRegMap className="icon"/>}/>
      </div>
		</div>
	);
}

export default App;
