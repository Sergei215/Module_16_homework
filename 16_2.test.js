import { getPercents } from "./16_2.js";

describe ("Test for getPercents function",()=>{
    it ("For zero percent", ()=>{
        expect (getPercents(0,100)).toBe(0)
    })
    it ("For incorrect type of data for percent", ()=>{
        expect (getPercents("не число",100)).toBeNaN()
    })
    it ("For incorrect type of data for number", ()=>{
        expect (getPercents(5,"не число")).toBeNaN()
    })

})