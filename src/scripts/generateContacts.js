import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const arr = [];
  try {
    while (number >= 1) {
      arr.push(createFakeContact());
      number -= 1;
    }
    let contacts = await readContacts();
    contacts = [...contacts, ...arr];
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(50);
