import React from "react";
import { Routes, Route } from 'react-router-dom';
import PizzaMenu from "../PizzaMenu/PizzaMenu";
import ProfileCard from '../ProfileCard/ProfileCard';
import Steps from "../Steps/Steps";
import Counter from "../Counter/Counter";
import Travel from "../Travel/Travel";
import Question from "../Question/Question";
import FlashCard from "../FlashCard/FlashCard";
import Slider from "../Slider/Slider";
import Accordion from "../Accordion/Accordion";
import UserDetailForm from "../UserDetailForm/UserDetailForm";
import Calculator from "../Calculator/Calculator";
import SplitBill from "../SplitBill/SplitBill";
import AdminPanel from "../AdminPanel/AdminPanel";

function HomePage() {
    return (
        <div>
            <Routes>
                <Route exact path="/pizza" element={<PizzaMenu />} />
                <Route exact path="/card" element={<ProfileCard />} />
                <Route exact path="/step" element={<Steps />} />
                <Route exact path="/count" element={<Counter />} />
                <Route exact path="/travel" element={<Travel />} />
                <Route exact path="/question" element={<Question />} />
                <Route exact path="/flashCard" element={<FlashCard />} />
                <Route exact path="/slider" element={<Slider />} />
                <Route exact path="/accordion" element={<Accordion />} />
                <Route exact path="/form" element={<UserDetailForm />} />
                <Route exact path="/calculator" element={<Calculator />} />
                <Route exact path="/bill" element={<SplitBill />} />
                <Route exact path="/panel" element={<AdminPanel />} />
            </Routes>
        </div>
    )
}

export default HomePage;