import {mult, SpliteIntoWords, sun} from "./01";

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = sun(a, b)
    const result2 = sun(b, c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
test("splitting into words should be correct", ()=>{
    //data
    const sent1=" Hello my friend!"
    const sent2=" Js - the best  programing langvige"

    //action
    const result1 = SpliteIntoWords(sent1)
    const result2 = SpliteIntoWords(sent2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("Hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2.length).toBe(3)
    expect(result2[0]).toBe("Js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("best")
    expect(result2[4]).toBe("programing")
    expect(result2[5]).toBe("langvige")


})