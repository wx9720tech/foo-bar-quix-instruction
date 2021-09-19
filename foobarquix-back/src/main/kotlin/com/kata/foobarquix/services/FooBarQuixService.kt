package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result: String = "";
        if (inputNumber % 3 == 0) {
            result += "Foo";
        }
        if (inputNumber % 5 == 0) {
            result += "Bar";
        }

        val inputNumberStr = inputNumber.toString();
        val inputNumberCharArray: CharArray = inputNumberStr.toCharArray();
        for(i in inputNumberCharArray) {
            if (i == '3') {
                result += "Foo";
            }
            if (i == '5') {
                result += "Bar";
            }
            if (i == '7') {
                result += "Quix";
            }
        }

        if (result.isEmpty()) {
            return inputNumberStr;
        } else {
            return result;
        }
    }

}