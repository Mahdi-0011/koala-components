import "./App.scss";
import Header from "./components/Header/Header";
import Koala from "./components/Koala/Koala";

function App() {
	return (
		<>
			<Header />
			<p>
				Ett repo för att dema statiska grundläggande komponenter i React.
			</p>
			<Koala />
		</>
	);
}

export default App;
