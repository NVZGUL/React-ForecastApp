import React , {Component} from 'react';
//import WeatherList from './containers/weather-list';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      posts: [],
      isError: false
    };
  }

  loadData(city){
    if (city) {
      axios.get('https://api.apixu.com/v1/forecast.json?key=b40f1a24fd6d41a89a7154309172102&q='+city)
        .then(response => {
          this.setState({
            posts: [response.data.current],
            isError: false
          });
        })
        .catch(error => {
          this.setState({
            posts: [],
            isError: true
          });
        });
    }
    else console.log("Empty argument")
    
  }

  componentDidMount(){
    //this.loadData(this.props.city);
  }

  updateForecast(){
    this.loadData(this.refs.input.value)
    this.refs.input.value = ''
  }

  

  render(){
    console.log(this.state.posts)
    var data = (!this.state.isError) ? this.state.posts.map((post,i) => 
              (<div key={i}>
                <p>{post.temp_c}</p>
                <p >{post.condition.text}</p>
                <img src={post.condition.icon} />
              </div>)) : <h1>Error</h1>;
    return (
      <div>
        <input 
          ref="input" 
          type="text"/>
        <input 
          onClick={e => this.updateForecast()} 
          type="button" 
          value="X"/>
        {data}
      </div>
    )
  }
    
}

export default App;