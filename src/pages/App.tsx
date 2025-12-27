import { PageSelector } from '../components/features';
import { DUMMY_PAGES } from '../constants/mockData';

function App() {
  return (
    <div className="app-container">
      <PageSelector pages={DUMMY_PAGES} />
    </div>
  );
}

export default App;
