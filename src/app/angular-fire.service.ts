import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Injectable()
export class AngularFireService<T extends any> {

  constructor(private readonly db: AngularFirestore) { }

  get timestamp(): firebase.firestore.FieldValue {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  private _col(_path): AngularFirestoreCollection<T> {
    return this.db.collection<T>(_path);
  }

  private _doc(_path: string, _id: string): AngularFirestoreDocument<T> {
    return this.db.doc<T>(`${_path}/${_id}`);
  }

  get(_path: string, _id: string = null): any {
    if (_id !== null) {
      return this._doc(_path, _id).snapshotChanges().pipe(
        map(a => {
          const data = a.payload.data() as T;
          data.id = a.payload.id;
          return data;
        })
      );
    } else {
      return this._col(_path).snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as T;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
    }
  }

  add(_path: string, _data: T) {
    this._col(_path).add(_data);
  }

  delete(_path: string, _id: string) {
    this._doc(_path, _id).delete();
  }

  update(_path: string, _id: string, _data: T) {
    this._doc(_path, _id).update(_data);
  }

}
