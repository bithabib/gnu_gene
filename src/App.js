import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultTable from "./components/ResultTable";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <ResultTable />
      <Footer />
    </div>
  );
}

export default App;