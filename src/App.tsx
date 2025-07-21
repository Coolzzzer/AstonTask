import './App.css'
import { AppRouter } from './app/providers/router/AppRouter';
import { MainLayout } from './shared/layouts/MainLayout';
import { ThemeProvider } from './shared/lib/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <AppRouter/>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
