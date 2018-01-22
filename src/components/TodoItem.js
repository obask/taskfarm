import React from 'react'
import PropTypes from 'prop-types'
import TextInputX from "./TextInputX";
import appStore from "../appStore";
import {EDIT_TODO_TEXT, SAVE_TODO_TEXT} from "../actions";

// const onDoubleClick = (breadcrumbs) => {
//     console.log("breadcrumbs = " + breadcrumbs)
//     appStore.dispatch(EDIT_TODO_TEXT({breadcrumbs}))
// }

const TodoItem = ({checked, text, submitted, focus, breadcrumbs}) => (
    <table style={{background: (focus) ? "lightGrey" : "lightBlue"}}>
        <tbody>
        <tr>
            <td className="checker sel_checkbox_td">
                <div className="ist_checkbox"> {checked ? "<*>" : "< >"} </div>
            </td>
            <td className="text_cursor content task_content_item">
                <div className="text_cursor div_due_date">
                    <span className="date date_future date_today">Today</span>
                </div>
            </td>
            <td>
            {(submitted)
                ? <div onDoubleClick={() => appStore.dispatch(EDIT_TODO_TEXT({breadcrumbs}))}>{text}</div>
                : <TextInputX  defaultValue={text}
                               focus={true}
                               onSubmit={(value) => appStore.dispatch(SAVE_TODO_TEXT(
                                   {breadcrumbs, value}
                                   ))} />
            }
            </td>
            <td className="menu">
                {breadcrumbs}
            </td>
        </tr>
        </tbody>
    </table>
)

TodoItem.propTypes = {
    checked: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    focus: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default TodoItem
