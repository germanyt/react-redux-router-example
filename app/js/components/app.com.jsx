import React from 'react'

// import Navigation from './nav.com'
import Navigation from '../containers/nav.container'

class App extends React.Component {
  render() {
    return (

      <div>
        
        <Navigation />

        <div className="container theme-showcase">
          {this.props.children}

          <hr />
          <footer>
            <p>Gavin &copy; 2016</p>
          </footer>
        </div>

      </div>
    )
  }
}


export default App;