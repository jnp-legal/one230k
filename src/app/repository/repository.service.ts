import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Repository } from '../repository';

const collection = 'repositories';
const collectionPath = collection + '/';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private firestore: AngularFirestore) { }

  get() {
    return this.firestore.collection(collection).snapshotChanges();
  }

  create(repository: Repository) {
    return this.firestore.collection(collection).add(repository);
  }

  update(repository: Repository) {
    this.firestore.doc(collectionPath + repository.id).update(repository);
  }

  delete(id: string) {
    this.firestore.doc(collectionPath + id).delete();
  }
}
