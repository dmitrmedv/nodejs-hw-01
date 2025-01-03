import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    await contacts.push(newContact);
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
