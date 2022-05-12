import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../prismCode';


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})

const useDocumentTitle = `
//useDocumentTitle.js

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = 'Count {count}'
  }, [count])
}

export default useDocumentTitle;


//DocTitleOne.js
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleOne() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne;


//DocTitleTwo.js
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleTwo() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo;


//useCounter.js
function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prevCount => prevCount + value)
    }

  const decrement = () => {
    setCount(prevCount => prevCount - value)
    }

  const reset = () => {
    setCount(initialCount)
    }
  return [count, increment, decrement, reset]
  }

export default useCounter;


//CounterOne.js
import useCounter from '../hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div>
          <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
      )
    }

export default CounterOne;


//CounterTwo.js
import useCounter from '../hooks/useCounter'

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10)

  return (
      <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
   )
}

export default CounterTwo;


//useInput.js
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue('')
  }
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}

export default useInput;


//UserForm.js
import useInput from '../hooks/useInput';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert('Hello '$'{firstName} '$'{lastName}')
      resetFirstName()
      resetLastName()
  }
  
    return (
          <div>
            <form onSubmit={submitHandler}>
              <label>First Name</label>
                <input type="text" {...bindFirstName} />
              <label>Last Name</label>
                <input type="text" {...bindLastName} />
              <button>Submit</button>
            </form>
          </div>
       )
    }

export default UserForm;
`.trim()

const DocTitleOne = `
//Counter.js
import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
        }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
        }

    const isEven = useMemo(() => {
      let i = 0
      while (i < 2000000000) i++
          return counterOne % 2 === 0
        }, [counterOne])

    return (
      <div>
        <div>
          <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
          <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
      </div>
    )
}

export default Counter;
`.trim();

const customs = `
function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}

// import useFetch from "./useFetch";
function App(props) {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}`.trim();



class CustomHooks extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>

        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
              <h3>Custom Hooks</h3>
              <div style={titles}>
                <PrismCode
                  code={useDocumentTitle}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>Memo Hooks</h3>
              <div style={titles}>
                <PrismCode
                  code={DocTitleOne}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>Custom Hooks</h3>
              <p>
                Instead of HOCs and render props, we can encapsulate our logic in a React hook and then import that hook whenever
                we feel the need. In our example we can create a custom hooks for fetching data.
                A custom hook is a JavaScript function whose name starts with "use".
                     </p>
              <div style={titles}>
                <PrismCode
                  code={customs}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(CustomHooks));
