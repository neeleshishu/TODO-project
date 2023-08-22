import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskContextProvider from './context/TaskContext';
import ShoppingCartContextProvider from './context/ShoppingCartContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TaskList from './components/TaskList';
import ShoppingCart from './components/ShoppingCart';
import ItemList from './components/ItemList';
import TodoForm from './components/TodoForm';
import WeatherApi from './components/WeatherApi'; // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Task Context */}
        <TaskContextProvider>
          
          <TodoForm />
          <TaskList />
         
        </TaskContextProvider>

        {/* Shopping Cart Context */}
        <ShoppingCartContextProvider>
          <ShoppingCart />
          <ItemList />
        </ShoppingCartContextProvider>

        

        {/* Weather API */}
        <WeatherApi />
      </div>
    </Router>
  );
}

export default App;
