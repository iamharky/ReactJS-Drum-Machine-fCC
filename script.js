function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      pads: [
      {
        key: 'Q',
        id: 'HEATER-1',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

      {
        key: 'W',
        id: 'HEATER-2',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

      {
        key: 'E',
        id: 'HEATER-3',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

      {
        key: 'A',
        id: 'HEATER-4',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

      {
        key: 'S',
        id: 'HEATER-6',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

      {
        key: 'D',
        id: 'OPEN-HH',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

      {
        key: 'Z',
        id: "KICK-N'-HAT",
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

      {
        key: 'X',
        id: 'KICK',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

      {
        key: 'C',
        id: 'CLOSED-HH',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }],


      played: '' });_defineProperty(this, "handleKeyPress",








    e => {
      let keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
      let key = e.key.toUpperCase();
      if (keys.indexOf(key) !== -1) {
        this.handleClick(key);
        let id = this.state.pads[keys.indexOf(key)].id;
        this.setState({ played: this.state.pads[keys.indexOf(key)].id });
      }
    });_defineProperty(this, "handleKeyUp",

    e => {
      let keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
      let key = e.key.toUpperCase();
      if (keys.indexOf(key) !== -1) {
        let parent = document.getElementById(key).parentElement;
        parent.style.backgroundColor = '#ddd';
        document.getElementById('display').style.color = 'green';
      }
    });_defineProperty(this, "handleMouseUp",

    e => {
      let keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
      let key = e.target.children[0].id;
      if (keys.indexOf(key) !== -1) {
        let parent = document.getElementById(key).parentElement;
        parent.style.backgroundColor = '#ddd';
        document.getElementById('display').style.color = 'green';
      }
    });_defineProperty(this, "handleClick",

    (key, id) => {
      let sound = document.getElementById(key);
      sound.parentElement.style.backgroundColor = 'orange';
      document.getElementById('display').style.color = 'white';
      sound.play();
      this.setState({ played: id });
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);document.addEventListener('keyup', this.handleKeyUp);document.addEventListener('mouseup', this.handleMouseUp, false);}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      this.state.pads.map(pad => {
        return React.createElement("div", { className: "drum-pad", id: pad.id, onMouseDown: () => this.handleClick(pad.key, pad.id) },
        React.createElement("audio", { className: "clip", id: pad.key, src: pad.src }), pad.key);
      }),
      React.createElement("div", { id: "display" }, this.state.played)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));