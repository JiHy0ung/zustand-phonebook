import { create } from "zustand";

const usePhoneBookStore = create((set) => ({

  phoneBook: [],
  addContact: (lastName, firstName, phoneNumber, hue) =>
    set((state) => ({
      phoneBook: [
        ...state.phoneBook,
        { id: Date.now(), lastName, firstName, phoneNumber, hue },
      ],
    })),

    deleteContact: (id) => set((state) => ({
      phoneBook: state.phoneBook.filter((item) => item.id !== id)
    }))
    
}));

export default usePhoneBookStore;
