import './App.css'
import { AppRouter } from './app/providers/router/AppRouter';
import { MainLayout } from './shared/layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <AppRouter/>
    </MainLayout>
  )
}

export default App
