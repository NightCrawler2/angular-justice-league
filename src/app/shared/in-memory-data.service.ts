import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Superman'},
            {id: 12, name: 'Batman'},
            {id: 13, name: 'Wonder Woman'},
            {id: 14, name: 'Green Lantern'},
            {id: 15, name: 'Aquaman'},
            {id: 16, name: 'Flash'},
            {id: 17, name: 'Cyborg'},
            {id: 18, name: 'Martian Manhunter'},
            {id: 19, name: 'Green Arrow'},
            {id: 20, name: 'Black Canary'}
        ];
        return {heroes};
    }
}
