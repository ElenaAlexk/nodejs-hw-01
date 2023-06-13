const { listContacts, getContactById } = require('./contacts');

const invokeAction = async ({ action, id, name, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      return console.table(contacts);

    case 'get':
      const contactById = await getContactById(id);
      return console.log(contactById);
  }
};
//invokeAction({ action: 'list' });
//invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' });
