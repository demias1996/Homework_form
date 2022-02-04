import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import MembershipTypes from "../types/MembershipTypes";
import IPhones from "../types/IPhones";
import PhoneTypes from "../types/PhoneTypes";
import FormData from "~/types/FormData";

const phoneTypesArr: Array<PhoneTypes> = [
  "home",
  "work",
  "main",
  "mobile",
  "other",
];

@Module({
  name: "form",
  stateFactory: true,
  namespaced: true,
})
export default class Form extends VuexModule {
  public info: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phones: [
      ["work", ""],
      ["home", ""],
    ],
    membership: "regular",
  };
  get phones(): IPhones {
    return this.info.phones;
  }

  get freePhoneTypes(): Array<PhoneTypes> {
    const phonesObj = Object.fromEntries(this.phones);

    return phoneTypesArr.filter(
      (item) => !phonesObj[item] && phonesObj[item] !== ""
    );
  }

  get membership(): MembershipTypes {
    return this.info.membership;
  }

  @Mutation
  public updateFirstName(data: string) {
    this.info.firstName = data;
  }

  @Mutation
  public updateLastName(data: string) {
    this.info.lastName = data;
  }

  @Mutation
  public updateEmail(data: string) {
    this.info.email = data;
  }

  @Mutation
  public updatePhone(data: { key: PhoneTypes; value: string; index: number }) {
    this.info.phones[data.index] = [data.key, data.value];
  }

  @Mutation
  public addPhone(key: PhoneTypes) {
    this.info.phones.push([key, ""]);
  }

  @Mutation
  public updateMembership(data: MembershipTypes) {
    this.info.membership = data;
  }
}
