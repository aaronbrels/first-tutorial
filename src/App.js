
import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {  // functional component, this is the parent component for header, footer, and content components that I created

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
