import "./App.css";
import { Dropdown } from "./coponents/dropdown/Dropdown";
import { MdFilterList } from "react-icons/md";

export default function App() {
    const list = ["Venter", "Søkte", "Ringte", "Svarte"];

    return (
        <main>
            <Dropdown trigger={<MdFilterList />} variants="md">
                {list}
            </Dropdown>
        </main>
    );
}
