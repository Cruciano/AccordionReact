import './App.css';
import css from "./Components/accordeon.module.css";
import Item from "./Components/item";
import {useState} from 'react';

function App() {
    const [itemsData, setItems] = useState([
        {
            title: "How many team can I invite?",
            content: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
            isOpen: false
        },
        {
            title: "What is the maximum file upload size?",
            content: "No more than 2GB. All files in your account must fit your allotted storage space.",
            isOpen: false
        },
        {
            title: "How do I reset my password?",
            content: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
            isOpen: false
        },
        {
            title: "Can I cancel my subscription?",
            content: "Yes! Send us a message and we’ll process your request no questions asked.",
            isOpen: false
        },
        {
            title: "Do you provide additional support?",
            content: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
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
                <div className={css.accordion}>
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
