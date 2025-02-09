import { User } from "@monorepo/entities";


interface UserState {
  users?: User[]
  err?: string
}
export default UserState
