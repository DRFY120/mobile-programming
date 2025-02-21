import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Information from './src/pages/Information';


export default function App() {
    return (
        <NativeRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information/:pokemonid' element={<Information />} />

            </Routes>
            
        </NativeRouter>
    );
}
