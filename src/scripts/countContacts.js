import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  const contacts = await readContacts();
  const count = await contacts.reduce(
    (acc, item) => (item.phone ? acc + 1 : acc),
    0
  );
  return count;
};

console.log(await countContacts());
