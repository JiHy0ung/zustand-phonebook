import React, { useState, useEffect } from "react";
import usePhoneBookStore from "../stores/usePhonebookStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone, faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ContactList = () => {
  const { phoneBook, deleteContact } = usePhoneBookStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(phoneBook);

  useEffect(() => {
    setFilteredList(phoneBook);
  }, [phoneBook]);

  const handleSearch = () => {
    const filtered = phoneBook.filter((item) => {
      const fullName = `${item.lastName}${item.firstName}`;
      return fullName.includes(searchTerm);
    });
    setFilteredList(filtered);
  };

  return (
    <div className="list-box">
      <div className="list-search">
        <input
          className="list-search-input"
          type="text"
          placeholder="이름 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <FontAwesomeIcon
          className="icon-search"
          icon={faSearch}
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="list-list">
      {filteredList.map((item) => (
        <div className="list" key={item.id}>
          <div className="list-person">
            <img
              className="list-img"
              style={{ filter: `hue-rotate(${item.hue}deg)`}}
              src="https://em-content.zobj.net/source/microsoft-teams/363/bust-in-silhouette_1f464.png"
            />
            <div className="list-info">
              <p className="list-name">
                {item.lastName + " " + item.firstName}
              </p>
              <p className="list-num">
                {item.phoneNumber.slice(0, 3)}-
                {item.phoneNumber.slice(3, 7)}-
                {item.phoneNumber.slice(7)}
              </p>
            </div>
          </div>
          <div className="list-icons">
            <a href={`tel:${item.phoneNumber}`}>
              <FontAwesomeIcon className="icon-call" icon={faPhone} />
            </a>
            <a href={`sms:${item.phoneNumber}`}>
              <FontAwesomeIcon className="icon-msg" icon={faMessage} />
            </a>
            <FontAwesomeIcon
              className="icon-del"
              icon={faTrashCan}
              onClick={() => deleteContact(item.id)}
            />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ContactList;
