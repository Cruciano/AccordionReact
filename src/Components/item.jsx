import css from "./accordeon.module.css";

const Item = ({itemData, index, toggleItems}) => {
    if (!itemData.isOpen) {
        return (
            <div className={css.item}>
                <div className={css.title} onClick={() => toggleItems(index)}>{itemData.title}</div>
            </div>);
    } else return (
        <div className={css.item}>
            <div className={css.title} onClick={() => toggleItems(index)}>{itemData.title}</div>
            <div className={css.content}>{itemData.content}</div>
        </div>);
}

export default Item;