import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='flex flex-col h-screen'>
			<Header />
			<Search />
			<Footer />
		</div>
	);
};

export default App;
