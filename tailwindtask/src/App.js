import "./App.css";

function App() {
  return (
    // Header Component
    <div className="flex justify-start px-5 py-5 ">
      <div className="flex justify-start">
        <img
          className="w-14 h-14 rounded-full"
          src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <h3 className="pl-3">Wade Warren</h3>
        <h4 className="pl-3">July 17,2018</h4>
      </div>
    </div>
  );
}

export default App;
