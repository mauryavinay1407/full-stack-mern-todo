import UserInput from './components/UserInput'

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-stone-800 min-h-screen">
      <div className="text-center">
        <h1 className="text-white pt-4 text-4xl italic">Todo App</h1>
        <UserInput />
      </div>
    </div>
  );
}

export default App;
