import './App.css';
import css from "./Components/accordeon.module.css";
import Item from "./Components/item";
import {useState} from 'react';

function App() {
    const [itemsData, setItems] = useState([
        {
            title: "How many team can I invite?",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "What is the maximum file upload size?",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "How do I reset my password?",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "Can I cancel my subscription?",
            content: "Some Text",
            isOpen: false
        },
        {
            title: "Do you provide additional support?",
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
            <div className={css.background}>
                <div className={css.img_block}>

                </div>
                <div>
                    <h2 className={css.header}>Faq</h2>
                    <div className={css.faqs}>
                        {itemsData.map((el, i) =>
                            <Item itemData={el}
                                  index={i}
                                  toggleItems={toggleItems}/>)}
                    </div>
                </div>

            </div>
        </div>);
    }

export default App;
