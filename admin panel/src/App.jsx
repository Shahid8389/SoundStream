import React from "react"
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from "./pages/AddSong";
import ListSong from "./pages/ListSong";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const url = "http://localhost:4000";

function App() {

  return (
    <div className="h-screen flex">
      <ToastContainer />
      <Sidebar />

      <div className="h-screen w-full overflow-y-scroll">
        <Navbar />

        <div className="pl-6">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </div>

      </div>

    </div>
  )
}

export default App