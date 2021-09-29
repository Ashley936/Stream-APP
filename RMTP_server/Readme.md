# Setting up RTMP Server

## Install node-media-server

in package.json
write script: "start": "node index.js"

on npm start
=> a server will listen to incoming streams at port 1935
=> send the stream to port 8000 for user consumption

## Install OBS

### Set up OBS

Set up a new scene and video and audio sources

## Accessing Live Stream

HLS and DASH are the most famous format but they require some set up and config
So we instead use http-flv (flash video format)

### Install flv.js package

<!-- flv takes the oncoming video stream and renders it inside the html video player -->

### Connect OBS to flv.js

Settings -> Stream

Stream Type : Custom Streaming Server

URL : rtmp://localhost/live

Stream key : STREAM_NAME

## Inside ShowStream componentDidMount method we can set up logic for the video player

### But we hv to do conditional rendering bcz the stream won't be loaded yet in case of direct opening of page

So we set up the video player after the stream is actually fetch:

````Javascript

buildPlayer(){

    if(this.flyPlayer || !this.props.stream){
        return;
    }
    this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${this.props.match.params}.flv`
    });

    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();

} ```
````
So, We call this.buildPlayer inside componenetDidUpdate and componentDidMount method

## CleanUP: =>
### Next we code the componentWillUnmount method to stop streaming when the user is no longer viewing the stream

componentWillUnmount() {
    this.favPlayer.destroy()
}