import './globals.css';
import HomePage from "./homepage";
import AboutPage from "./about";
import ExperiencesPage from './experiences';

export default function Home() {
  return (
    <><HomePage /><AboutPage /> <ExperiencesPage /> </>
  );
}