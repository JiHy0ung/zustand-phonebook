import React, { useState } from "react";
import { Box } from "@mui/material";
import usePhoneBookStore from "../stores/usePhonebookStore";

const ContactForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { addContact } = usePhoneBookStore();

  const getRandomHue = () => Math.floor(Math.random() * 360);

  const handleAddContact = () => {
    // 연락처 저장 장소 -> 배열 phoneBook = []
    // 연락처 추가

    // 내용이 비어있을 때
    if (!lastName.trim() || !firstName.trim() || !phoneNumber.trim()) return;

    const hue = getRandomHue();

    addContact(lastName, firstName, phoneNumber, hue);

    setLastName("");
    setFirstName("");
    setPhoneNumber("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} height={'100%'} margin={'1rem'}>
      <div className="form-info-con">
      <Box
        className="form-container"
        justifyContent={"space-between"}
        display="flex"
      >
        <input
          type="text"
          className="form-input"
          id="LastName"
          placeholder="성"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          id="FirstName"
          placeholder="이름"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Box>

      <input
        type="number"
        className="form-input-number"
        id="PhoneNumber"
        placeholder="전화"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === 'Enter'){
                handleAddContact();
            }
        }}
      />
      </div>

      <button className="submit-button" onClick={handleAddContact}>
        완료
      </button>
    </Box>
  );
};

export default ContactForm;
