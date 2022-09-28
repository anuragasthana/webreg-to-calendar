import { useState, useEffect, useRef } from 'react';
import { FaAngleDown, FaAngleUp, FaCheck } from 'react-icons/fa';

const Dropdown = ( {headerTitle, list, selected, selectItem, getItem} ) => {

    const rows = list.reduce(function (rows, key, index) { 
        return (index % 2 === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);
      
    console.log(rows)

    const [openList, toggleList] = useState(false);

    let useOutsideAlert = (ref) => {
        useEffect(() => {
            let handleClickOutside = (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    toggleList(false);
                } 
            }
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);

    return (
        <div className='dd-wrapper' ref={wrapperRef}>
            <button type='button' className='dd-header' onClick={() => toggleList(!openList)} 
            style={{backgroundColor: selected < 0 ? 'white': getItem(list, selected).color, color: selected < 0 ? 'black':'white'}}>
                <div className='dd-header-title'>{selected < 0 ? headerTitle : getItem(list, selected).name}{' '}</div>
                <div className='dd-arrow'>{openList
                    ? <FaAngleUp/>
                    : <FaAngleDown/>}</div>
            </button>
            {openList && (
                <div className='dd-list'>
                    {rows.map((row) => (
                        <div className='dd-row'>
                            {row.map((item) => (<button className='dd-item' style={{backgroundColor: item.color}}
                            onClick={
                                (e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    selected === item.id ? selectItem(-1) : selectItem(item.id);
                                }
                            }>{selected === item.id && <FaCheck size="1.5x" color="white"/>}</button>))}
                        </div>
                    ))}
                </div>
        )}
        </div>
    )
}

export default Dropdown;