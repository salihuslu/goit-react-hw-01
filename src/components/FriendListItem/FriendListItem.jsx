import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.friendItem}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={isOnline ? styles.statusOnline : styles.statusOffline}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
