import { defineStore } from "pinia"
import { IBeer } from "@/interfaces/IBeer"

//const API = "https://beer-lover.p.rapidapi.com/top100"

export const useStore = defineStore("store", {
  state: () => ({
    beers: Array<IBeer>,
  }),
  actions: {
    getData() {
      try {
        // const responseRaw = await fetch(API, {
        //   method: "GET",
        //   headers: {
        //     "X-RapidAPI-Key":
        //       "015a58e5f9mshbeb9ea5e56eb3a3p15bba7jsn060c45912651",
        //     "X-RapidAPI-Host": "beer-lover.p.rapidapi.com",
        //   },
        // })

        // const response = await responseRaw.json()

        // if (!response.ok) {
        //   throw new Error("Error: " + response.message)
        // }

        //this.beers = JSON.parse(response.data)
        this.beers = [
          {
            id: 1,
            name: "Pilsen",
          },
          {
            id: 2,
            name: "Brahma",
          },
          {
            id: 3,
            name: "Skol",
          },
          {
            id: 4,
            name: "Stella Artois",
          },
          {
            id: 5,
            name: "Sub zero",
          },
        ]
      } catch (error) {
        console.error("Error: " + error)
      }
    },
  },
})
