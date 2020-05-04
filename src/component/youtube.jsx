import React, { Component } from 'react';

const apiKey = 'AIzaSyBnylQec-AADrCC0J-2eszM2mEheDZtR7U';
const channelID = 'UC97k3hlbE-1rVN8y56zyEEA';
const limit = 10;

var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${limit}`




class youtube extends Component {
    componentDidMount = () => {
        this.getYoutubeData()
        console.log(this.state)
  }
  state = {
        items: [],
        indexCount: 0
  }

  posClicked = () => {
        if (this.state.indexCount < 10) {
              this.setState({ indexCount: this.state.indexCount += 1 });
              this.getYoutubeData()
              console.log('hello')

        }
        console.log(this.state.indexCount);

  }
  negClicked = () => {
        if (this.state.indexCount > 0) {
              this.setState({ indexCount: this.state.indexCount -= 1 });
              this.getYoutubeData()
              console.log('hello')
        }
        console.log(this.state.indexCount);

  }


  getYoutubeData = () => {


        fetch(url).then(res => res.json()).then(res => {
              console.log(res);
              this.setState({
                    items: res.items,
                    videoId: res.items[this.state.indexCount].id.videoId
              })

        })
  }



  render() {

        console.log(this);
        return (
              <div>
              <h2>Lifting Videos</h2>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>         
                    <button onClick={this.negClicked}>  Previous Video  </button>
                    <button onClick={this.posClicked}>  Next Video    </button>
              </div>
        );
  }
}

export default youtube;