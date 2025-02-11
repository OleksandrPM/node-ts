import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { IPerson } from "./Person.types";

// In real project we save data in a DB
const storeData: IPerson[] = [];

@JsonController("/person")
export default class Person {
  @Get()
  async getAll() {
    return storeData;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<IPerson | {}> {
    const person = storeData.find((item) => {
      return item.id === id;
    });

    return person || {};
  }

  @Post()
  async setPerson(@Body() body: IPerson) {
    storeData.push(body);

    return true;
  }
}
