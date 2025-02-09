import { db } from "../config/firebaseConfig";
import { User } from "@monorepo/entities";

const USERS_COLLECTION = "users";

export const userRepository = {
  async updateUser(id: string, userData: Partial<User>) {
    await db.collection(USERS_COLLECTION).doc(id).set(userData, { merge: true });
  },

  async fetchUser(id: string): Promise<User | null> {
    const doc = await db.collection(USERS_COLLECTION).doc(id).get();
    return doc.exists ? ({ id: doc.id, ...doc.data() } as User) : null;
  },

  async getAllUsers(): Promise<User[] | null> {
    const doc = await db.collection(USERS_COLLECTION).get();
    const ret:User[] = []
    doc.forEach(e=>ret.push({ id: e.id, ...e.data() } as User))
    return ret;
  },
};
