import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionsInfoCard from '../Cards/TransactionsInfoCard'
import moment from 'moment'

const RecentIncome = ({ onSeeMore, transactions }) => {
    return (
        <div className='card '>
            <div className='flex items-center justify-between '>
                <h5 className='text-lg'>Income</h5>
                <button className='card-btn' onClick={onSeeMore}>
                    See All <LuArrowRight className='text-base' />
                </button>

            </div>

            <div className='mt-6'>
                {transactions?.slice(0, 5)?.map((item) => (
                    <TransactionsInfoCard
                        key={item._id}
                        title={item.source}
                        Icons={item.icon}
                        date={moment(item.date).format("DO MMM YYYY")}
                        amount={item.amount}
                        type="Income"
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentIncome
