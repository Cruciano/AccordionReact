import css from "./accordeon.module.css";

const Item = ({itemData, index, toggleItems}) => {
     return (
        <div className={"item " + (itemData.isOpen ? "open" : "")} key={index}>
            <div className={"question"} onClick={() => toggleItems(index)}>{itemData.title}</div>
            <div className={"answer"}>{itemData.content}</div>
        </div>);

}

export default Item;