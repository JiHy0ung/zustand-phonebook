import React from "react";
import usePhoneBookStore from "../stores/usePhonebookStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ContactList = () => {
  const { phoneBook, deleteContact } = usePhoneBookStore();

  return (
    <div className="list-box">
        {phoneBook.map((item) => (
            <div className="list" key={item.id}>
                <div className="list-person">
                    <img
                    className="list-img"
                    style={{ filter: `hue-rotate(${item.hue}deg)` }}
                    src="https://em-content.zobj.net/source/microsoft-teams/363/bust-in-silhouette_1f464.png"
                    />
                    <div className="list-info">
                        <p className="list-name">{item.lastName + " " + item.firstName}</p>
                        <p className="list-num">{item.phoneNumber.slice(0, 3)}-{item.phoneNumber.slice(3, 7)}-{item.phoneNumber.slice(7)}</p>
                    </div>
                </div>
                <div className="list-icons">
                    <FontAwesomeIcon className="icon-call" icon={faPhone}/>
                    <FontAwesomeIcon className="icon-msg" icon={faMessage}/>
                    <FontAwesomeIcon className="icon-del" icon={faTrashCan} onClick={() => deleteContact(item.id)}/>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ContactList;
