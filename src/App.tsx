import "./App.scss";
import Header from "./components/Header/Header";
import Koala from "./components/Koala/Koala";
import Placeholder from "./components/Placeholder/Placeholder";

function App() {
	return (
		<>
			<Header />
			<h1>
				Dags att äta torta!
			</h1>
			<p>
				Hello world!
			</p>
			<button>
				klicka inte på mig!
			</button>
			<select name="my-categori" id="my-select">
				<option value="string">Animal</option>
				<option value="string">Monster</option>
				<option value="string">Allian</option>
			</select>
			<p>
			Heading (en h1-tagg med ngn text i)
SubHeading (en p-tagg med lite text i)
Button (en button-tagg med ngn text på)
DropDown (en select-tagg med några option-taggar i)
IntroParagraph (en paragraf med kort text)
CuteCatImage (en bild på en söt katt)
Footer (en footer efter din egna design)
NavBar (en navbar efter din egna design)
MonsterCard (med bild på monster, dess namn och en punktlista med monstrets egenskaper)
Grid (ett 2x3 grid att lägga MonsterCards eller söta katter i)
MonsterForm (ett formulär för att lägga till monster, formuläret ska INTE fungera)
Switch
ngn annan komponent du kommer på som är statisk
			</p>
			<img src="" alt="" />
			<p>
				Ett repo för att dema statiska grundläggande komponenter i React.
			</p>
			<Koala />
			<div>
				<Placeholder />
			</div>
		</>
	);
}

export default App;
