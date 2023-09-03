import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 5
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color='red'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)} />
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} key="genral" pageSize={15} country='in' category='General' />}>
            </Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={15} country='in' category='Science' />}>
            </Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={15} country='in' category='Business' />}>
            </Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={15} country='in' category='Health' />}>
            </Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={15} country='in' category='Technology' />}>
            </Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={15} country='in' category='Entertainment' />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={15} country='in' category='Sports' />}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}