import './ExpenseForm.css'

const ExpenseForm = () => {
    return <form>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                <label>Title</label>
                <input type='text' />
                <label>Amount</label>
                <input type='text' min="0.01" step="0.01" />
                <label>Date</label>
                <input type='date'  min="2022-01-01" max="2024-12-31" />
            </div>

        </div>
    </form>
};
export default ExpenseForm;
