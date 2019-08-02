import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Contact} from './contact-data';


export class ContactData implements InMemoryDbService {
  createDb(){
    const contacts: Contact[]=[
      { id: 1, name: 'Success', surname: 'Xivambu', phone: '0813009090'  },
      { id: 2, name: 'Nhlanhla', surname: 'Baloyi', phone: '0725487896'  },
      { id: 3, name: 'Ntsako', surname: 'Mathevula', phone: '0725465621'  },
      { id: 4, name: 'Hlawuleka', surname: 'Masw', phone: '0745598180' },
      { id: 5, name: 'Baldwin', surname: 'Khosa', phone: '0845698574'  }

    ];
    
    return {contacts};
  }
}