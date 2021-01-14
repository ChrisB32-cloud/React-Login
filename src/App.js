import NavBar from './components/NavBar';
import Form from './components/Form';
import PageComponents from './components/PageComponents';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PageComponents>
        <NavBar />
        <Form />
      </PageComponents>
    </ThemeProvider>
  );
}

export default App;
