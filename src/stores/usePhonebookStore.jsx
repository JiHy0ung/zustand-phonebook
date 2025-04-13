import { create } from "zustand";

const usePhoneBookStore = create((set) => ({

  phoneBook: [],
  addContact: (lastName, firstName, phoneNumber, hue) =>
    set((state) => ({
      phoneBook: [
        ...state.phoneBook,
        { lastName, firstName, phoneNumber, hue },
      ],
    })),
    
}));

export default usePhoneBookStore;
