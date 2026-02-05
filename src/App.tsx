import "./App.css";
import { Dropdown } from "./coponents/dropdown/Dropdown";
import { MdFilterList } from "react-icons/md";

export default function App() {
    const list = [
        "Option 1 is the longest as it can be",
        "Option 2",
        "Option 3",
        "option 4",
        "option 5",
        "option 6",
    ];
    return (
        <main>
            <Dropdown triger={<MdFilterList />} variants="">
                {list}
            </Dropdown>
        </main>
    );
}
