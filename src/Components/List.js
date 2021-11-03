import React from 'react'

const List = () => {

    const addToList = () => {

    }

    return (
        <div>
            <form onSubmit ={addToList()}>
                <div>
                    <input type='text'></input>
                    <input type='submit' value='Add'></input>
                </div>
            </form>
            <div>
                <ul>
                    <li><p></p><input type="checkbox" value=""></input><input type="submit" value="Delete"></input></li>
                </ul>
            </div>
        </div>
    )
}

export default List;