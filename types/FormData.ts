import IPhones from "./IPhones";
import MembershipTypes from "./MembershipTypes";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phones: IPhones;
  membership: MembershipTypes;
}

export default FormData;
