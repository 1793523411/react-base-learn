const domContainer = document.querySelector("#like_button_container");

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, domContainer);}
  
  setInterval(tick, 1000);
  
  