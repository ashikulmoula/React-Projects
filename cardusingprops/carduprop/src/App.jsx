import Card from "./components/card";

function App() {
  let cardobj = {
    title: "Ashik",
    pera: "I am a Good Developer",
    btntxt: "Click Me",
  };
  let sifatobj = {
    title: "sifat",
    pera: "She Is a Good girl",
    btntxt: "Visit Me",
  };
  let fijaobj = {
    title: "Fija",
    pera: "She Is a Photographer",
    btntxt: "Click Me",
  };
  let mariaobj = {
    title: "Maria",
    pera: "She Is a Graphics Designer",
    btntxt: "Click Me",
  };
  return (
    <>
      <div className="text-center">
        <h1 className="bg-green-400 p-4 inline-block rounded-md m-4 text-2xl text-black text-center gap-4">
          Card Using Talwind css
        </h1>
        <div className="flex flex-wrap gap-10 mx-2 px-4">
          <Card
            name={cardobj.title}
            pera={cardobj.pera}
            btntxt={cardobj.btntxt}
          />
          <Card
            name={sifatobj.title}
            pera={sifatobj.pera}
            btntxt={sifatobj.btntxt}
          />
          <Card
            name={fijaobj.title}
            pera={fijaobj.pera}
            btntxt={fijaobj.btntxt}
          />
          <Card
            name={mariaobj.title}
            pera={mariaobj.pera}
            btntxt={mariaobj.btntxt}
          />
        </div>
      </div>
    </>
  );
}

export default App;
