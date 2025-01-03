import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { countContacts } from "./countContacts.js";

export const removeLastContact = async () => {
  const count = await countContacts();
  try {
    if (count === 0) {
      console.log("Contacts List is empty...");
      return;
    }
    const contacts = await readContacts();
    const newContacts = await contacts.filter(
      (_, index) => index !== count - 1
    );
    await writeContacts(newContacts);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
