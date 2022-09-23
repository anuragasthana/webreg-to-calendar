import { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaCheck } from 'react-icons/fa';

const Dropdown = ( {headerTitle, list} ) => {

    const [openList, toggleList] = useState(false);

    const [selected, selectItem] = useState(-1);

    let getItem = (id) => {
        return list.filter(item => item.id === id)[0];
    }

    return (
        <div className='dd-wrapper'>
            <button type='button' className='dd-header' onClick={() => toggleList(!openList)} 
            style={{backgroundColor: selected < 0 ? 'white': getItem(selected).color, color: selected < 0 ? 'black': getItem(selected).text}}>
                <div className='dd-header-title'>{selected < 0 ? headerTitle : getItem(selected).name}{' '}</div>
                {openList
                    ? <FaAngleUp/>
                    : <FaAngleDown/>}
            </button>
            {openList && (
                <div className='dd-list'>
                    {list.map((item) => (
                        <button type='button' className='dd-list-item' key={item.id}
                        style={{backgroundColor: item.color, color: item.text}}
                        onClick={() => selectItem(item.id === selected ? -1 : item.id)} >
                            {item.name}
                            {' '}
                            {item.id === selected && <FaCheck/>}
                        </button>
                    ))}
                </div>
         )}
        </div>
    )
}

export default Dropdown;