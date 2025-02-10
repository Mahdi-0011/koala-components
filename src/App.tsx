import "./App.scss";
import Header from "./components/Header/Header";
import Koala from "./components/Koala/Koala";
import Placeholder from "./components/Placeholder/Placeholder";

function App() {
	return (
		<>
			<Header />
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
