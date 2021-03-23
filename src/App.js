import './App.css';
import css from "./Components/accordeon.module.css";
import Item from "./Components/item";
import {useState} from 'react';

function App() {
    const [itemsData, setItems] = useState([
        {
            title: "title1",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "title2",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "title3",
            content: "Some Text",
            isOpen: false
        },
    ]);

    const toggleItems = (index) => {
        setItems(itemsData.map((item, i) => {
            if (i === index) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
            return item;
        }));
    }

    return (
        <div className={css.App}>
            <div className={css.wrapper}>
                <h2 className={css.header}>Main Title</h2>
                <div className={css.accordeon}>
                    {itemsData.map((el, i) =>
                        <Item itemData={el}
                              index={i}
                              toggleItems={toggleItems}/>)}
                </div>
            </div>
        </div>);
    }

export default App;
