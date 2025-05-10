import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr
                        key={id}
                        className={index % 2 === 0 ? styles.whiteRow : styles.grayRow}
                    >
                        <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;
