import "./App.module.css";
import style from "./App.module.css";
import Header from "./Components/Header/Header";
import CoursesListContainer from "./Components/CoursesList/CoursesListContainer";
import SortBarContainer from "./Components/SortBar/SortBarContainer";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <SortBarContainer />
      <CoursesListContainer />
    </div>
  );
}

export default App;
