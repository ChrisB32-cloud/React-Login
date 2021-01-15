import NavBar from './components/NavBar';
import Form from './components/Form';
import PageComponents from './components/PageComponents';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageComponents>
          <NavBar />
          <Form />
        </PageComponents>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
