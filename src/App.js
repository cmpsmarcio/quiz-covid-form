import { BrowserRouter, Switch, Route} from 'react-router-dom'
import AnswerList from './components/AnswerList.jsx'
import QuestionForm from './components/QuestionForm.jsx'
import MessagePage from './components/MessagePage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={QuestionForm} />
          <Route path="/list" component={AnswerList} />
          <Route path="/message" component={MessagePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
