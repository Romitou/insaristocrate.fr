import { defineEventHandler } from 'h3';

const events = [

]

export default defineEventHandler(async (event) => {
  return events;
})
